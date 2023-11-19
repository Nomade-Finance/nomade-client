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
    try {
      const data: CryptoData[] = await fetchCryptoData()
      setCryptoData(data)
      const rate: number = await fetchExchangeRate()
      setExchangeRate(rate)
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('Erreur de connexion')
      }
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
      <Marquee className='marquee' autoFill pauseOnHover loop={0}>
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
