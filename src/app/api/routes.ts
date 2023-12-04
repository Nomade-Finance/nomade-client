import {
  BinanceResponse,
  ExchangeRateResponse,
} from "@/lib/interfaces/interfaces";

import axios from "axios";

export async function getBinanceData(symbol: string): Promise<BinanceResponse> {
  const response = await axios.get<BinanceResponse>(
    `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}USDT`,
    {
      headers: {
        "X-MBX-APIKEY": process.env.BINANCE_API_KEY,
      },
    }
  );
  return response.data;
}

export async function getExchangeRateData(): Promise<ExchangeRateResponse> {
  const response = await axios.get<ExchangeRateResponse>(
    "https://open.er-api.com/v6/latest/USD"
  );
  return response.data;
}
