import "./_taux.scss"

import { getBinanceData, getExchangeRateData } from "@/app/api/routes";

import React from "react";
import Skeleton from "@mui/material/Skeleton";
import useSWR from "swr";

interface Props {
  symbol: string;
}

const TauxDuJour: React.FC<Props> = ({ symbol }) => {
  const { data: binanceData, error: binanceError } = useSWR<{ price: number }>(
    `binance-${symbol}`,
    () => getBinanceData(symbol)
  );
  const { data: exchangeRateData, error: exchangeRateError } = useSWR(
    "taux-de-change",
    getExchangeRateData
  );

  if (binanceError || exchangeRateError) return <div>Erreur de connexion</div>;
  if (!binanceData || !exchangeRateData)
    return <Skeleton width={200} height={50} />;

  const priceInUSD = binanceData.price;
  const priceInXOF = priceInUSD * exchangeRateData.rates.XOF;

  return (
    <code className="taux-jour">
      TAUX DU JOUR: 1 {symbol} = {priceInXOF.toFixed(0)} FCFA
    </code>
  );
};

export default TauxDuJour;
