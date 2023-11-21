/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { CryptoData, ExchangeRateData } from '../interfaces/interfaces'

const API_KEY = import.meta.env.VITE_APP_BINANCE_API_KEY

if (!API_KEY) {
  throw new Error('VITE_APP_BINANCE_API_KEY is not set in .env')
}

export const fetchCryptoData = async (symbol: string): Promise<CryptoData> => {
  const response = await fetch(`/api/ticker/price?symbol=${symbol.toUpperCase()}USDT`, {
    headers: {
      'X-MBX-APIKEY': API_KEY
    }
  })
  const data = await response.json() as CryptoData
  return data
}

export const fetchCryptoRate = async (symbol: string): Promise<number> => {
  const data = await fetchCryptoData(symbol)
  return (data.price)
}

export const fetchExchangeRate = async (): Promise<number> => {
  const response = await fetch('/rates/latest/USD')
  const data = await response.json() as ExchangeRateData
  if (!data.rates) {
    throw new Error('Les données des taux ne sont pas disponibles')
  }
  const rate = Math.round(data.rates.XOF)
  return rate
}
