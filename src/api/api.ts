import { CryptoData, ExchangeRateData } from '../interfaces/interfaces'

import axios from 'axios'

export const fetchCryptoData = async (): Promise<CryptoData[]> => {
  const result = await axios.get<CryptoData[]>(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,tether'
  )
  return result.data
}

export const fetchExchangeRate = async (): Promise<number> => {
  const result = await axios.get<ExchangeRateData>(
    'https://api.exchangerate-api.com/v4/latest/USD'
  )
  return result.data.rates.XOF
}
// --------/ Conversion / -------------//
export const fetchBitcoinRate = async (): Promise<number> => {
  const result = await axios.get<CryptoData[]>(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin'
  )
  return result.data[0].current_price
}

export const fetchUSDCRate = async (): Promise<number> => {
  const result = await axios.get<CryptoData[]>(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=usd-coin'
  )
  return result.data[0].current_price
}
// ------------------------------------
