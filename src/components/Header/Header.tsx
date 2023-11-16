import { useEffect, useState } from 'react'

import Marquee from 'react-fast-marquee'
import axios from 'axios'

interface CryptoData {
  id: string;
  name: string;
  current_price: number;
  price_change: number;
}

interface ExchangeRateData {
  rates: {
    XOF: number;
  };
}

const Header = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([])
  const [exchangeRate, setExchangeRate] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    try {
      const result = await axios.get<CryptoData[]>(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,tether'
      )

      const newData = result.data.map((crypto) => {
        const oldCrypto = cryptoData.find((c) => c.id === crypto.id)
        return {
          ...crypto,
          price_change: oldCrypto
            ? crypto.current_price - oldCrypto.current_price
            : 0
        }
      })

      setCryptoData(newData)

      const exchangeResult = await axios.get<ExchangeRateData>(
        'https://api.exchangerate-api.com/v4/latest/USD'
      )
      setExchangeRate(exchangeResult.data.rates.XOF)
    } catch (error) {
      setError('Erreur de connexion')
    } finally {
      setLoading(false)
      setTimeout(() => {
        fetchData()
      }, 60000) // prochain call après 60s
    }
  }

  useEffect(() => {
    fetchData()
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
      <Marquee className='marquee' autoFill pauseOnHover loop={0}
      >
      {cryptoData.map((crypto) => (
        <div key={crypto.id} style={{ marginRight: '0.5rem' }}>
          <h2>{crypto.name} {'-'}</h2>
          <p>
            <span>{'-'} Prix Actuel: </span>
            {loading
              ? '...'
              : (crypto.current_price * exchangeRate).toLocaleString('fr-FR', {
                  minimumFractionDigits: 1
                })} FCFA
          </p>
        </div>
      ))}
      </Marquee>
    </header>
  )
}

export default Header
