import { z } from "zod";

// Schéma pour la réponse de l'API
const apiResponseSchema = z.object({
  symbol: z.string(),
  price: z.string(),
});

// Type pour la réponse de l'API
export type ApiResponse = z.infer<typeof apiResponseSchema>;

export const fetchPrice = async (symbol: string): Promise<ApiResponse> => {
  const response = await fetch(
    `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
  );
  const data = await response.json();
  // Valider les données avec Zod
  const validatedData = apiResponseSchema.parse(data);

  // Récupérer le taux de conversion depuis l'API
  const conversionResponse = await fetch(
    "https://api.exchangerate-api.com/v4/latest/USD"
  );
  const conversionData = await conversionResponse.json();

  // Convertir le prix en FCFA
  const priceInUSD = Number(validatedData.price);
  const priceInFCFA = priceInUSD * conversionData.rates.XOF;

  // Arrondir à 2 décimales et formater pour le français
  const formatter = new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const formattedPrice = formatter.format(priceInFCFA);

  return { symbol: validatedData.symbol, price: formattedPrice };
};
