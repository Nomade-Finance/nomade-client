"use client"

import './_crypto-card.scss'

import React, { useEffect, useState } from 'react'
import { getBinanceData, getExchangeRateData } from '@/app/api/routes'

import Skeleton from '@mui/material/Skeleton';

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
      const data = await getBinanceData(symbol)
      const newPrice = (data.price)
      setPreviousPrice(price)
      setPrice(newPrice * exchangeRate)
      setIsLoading(false)
    }

    const fetchRate = async () => {
      const rate = await getExchangeRateData()
      setExchangeRate(rate.rates.XOF)
    }

    const interval = setInterval(() => {
      fetchPrice()
      fetchRate()
    }, 10000) // 10000 ms = 10 seconds

    //  fetch Initial
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
          <Skeleton height={30} width={75} />
          )
        : (
        <span className='price'>{formattedPrice} FCFA <span className={priceChangeClass}>{priceChange}</span></span>
          )}
    </div>
  )
}

export default CryptoCard
