import './_header.scss'

import { fetchCryptoData, fetchExchangeRate } from '@api/api'
import { useEffect, useState } from 'react'

import { CryptoData } from '../../interfaces/interfaces'
import Marquee from 'react-fast-marquee'

const Header = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([])
  const [exchangeRate, setExchangeRate] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const fetchData = async () => {
    setLoading(true) // Set loading to true before making the API request
    try {
      const symbols = [
        'BTC',
        'ETH',
        'SOL',
        'BNB',
        'ARB',
        'AVAX',
        'DOT',
        'USDC',
        'ADA',
        'XRP'
      ] // top 10 tickers
      const data: CryptoData[] = await Promise.all(
        symbols.map((symbol) => fetchCryptoData(symbol))
      )
      setCryptoData(data)
      localStorage.setItem('cryptoData', JSON.stringify(data)) // Store data in local storage

      const rate: number = await fetchExchangeRate()
      setExchangeRate(rate)
      localStorage.setItem('exchangeRate', rate.toString()) // Store exchange rate in local storage
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('Erreur de connexion')
      }
    } finally {
      setLoading(false) // Set loading to false after the API request is complete
      setTimeout(() => {
        fetchData()
      }, 500000) // Next call dans 500000 ms = 500 s = 5 min
    }
  }

  useEffect(() => {
    const storedCryptoData = localStorage.getItem('cryptoData')
    const storedExchangeRate = localStorage.getItem('exchangeRate')

    if (storedCryptoData && storedExchangeRate) {
      setCryptoData(JSON.parse(storedCryptoData) as CryptoData[])
      setExchangeRate(parseFloat(storedExchangeRate))
      setLoading(false)
    } else {
      fetchData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Exécuter l'effet seulement une fois lors du montage
  if (error) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fffcf7',
          background: '#e45535'
        }}
      >
        <p>{error}</p>
      </div>
    )
  }

  return (
    <header id="main-header">
      <Marquee className="marquee" autoFill pauseOnHover loop={0}>
        {cryptoData.map((crypto: CryptoData) => {
          const price: number = (crypto.price)
          return (
            <div key={crypto.price} style={{ marginRight: '0.5rem' }}>
              <h2>
                {crypto.symbol} {'-'}
              </h2>
              <p>
                <span>{'-'} Prix Actuel: </span>
                {loading
                  ? '...'
                  : !isNaN(price)
                      ? (price * exchangeRate).toLocaleString('fr-FR', {
                          minimumFractionDigits: 1
                        })
                      : 'N/A'} FCFA
              </p>
            </div>
          )
        })}
      </Marquee>
    </header>
  )
}

export default Header
