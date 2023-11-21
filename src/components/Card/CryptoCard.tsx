// CryptoCard.tsx
import './_crypto-card.scss'

import React, { useEffect, useState } from 'react'
import { fetchCryptoData, fetchExchangeRate } from '@api/api'

interface CryptoCardProps {
  symbol: string;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ symbol }) => {
  const [price, setPrice] = useState<number>(0)
  const [previousPrice, setPreviousPrice] = useState<number>(0)
  const [exchangeRate, setExchangeRate] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchPrice = async () => {
      const data = await fetchCryptoData(symbol)
      const newPrice = (data.price)
      setPreviousPrice(price)
      setPrice(newPrice * exchangeRate)
      setIsLoading(false)
    }

    const fetchRate = async () => {
      const rate = await fetchExchangeRate()
      setExchangeRate(rate)
    }

    const interval = setInterval(() => {
      setIsLoading(true)
      fetchPrice()
      fetchRate()
    }, 100000) // 100000 ms = 100 s = 1 min

    // Call fetchPrice & fetchRate immediately, then every 1 second
    fetchPrice()
    fetchRate()

    return () => clearInterval(interval)
  }, [exchangeRate, price, symbol])

  const formattedPrice = new Intl.NumberFormat('fr-FR').format(price)
  const priceChange = price > previousPrice ? '↑' : '↓'
  const priceChangeClass = price > previousPrice ? 'up' : 'down'

  return (
    <div className="crypto-card">
      <h2 className={priceChangeClass}>{symbol.toUpperCase()}</h2>
      {isLoading
        ? (
        <p> Chargement -.-</p>
          )
        : (
        <span className='price'>{formattedPrice} FCFA <span className={priceChangeClass}>{priceChange}</span></span>
          )}
    </div>
  )
}

export default CryptoCard
