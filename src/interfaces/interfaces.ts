export interface CryptoData {
  id: string;
  current_price: number;
  symbol: string;
  price: number;
}
export interface ExchangeRateData {
  rates: {
    XOF: number;
  };
}
