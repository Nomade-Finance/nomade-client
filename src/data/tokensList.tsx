import React from 'react'
import btc from '@assets/coins/icone-btc.svg'
import usdc from '@assets/coins/icone-usdc.svg'

interface ListeTokenType {
  nom: string;
  symbol: string;
  icone: React.ReactElement;
}

export const ListeToken: ListeTokenType[] = [
  {
    nom: 'Bitcoin',
    symbol: 'bitcoin',
    icone: <img src={btc} alt='logo wave' loading='lazy' className='icone-crypto'/>
  },

  {
    nom: 'USD Coin',
    symbol: 'usdc',
    icone: <img src={usdc} alt='logo wave' loading='lazy' className='icone-crypto'/>
  }
]
