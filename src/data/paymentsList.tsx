import './_icon-style.scss'

import { ReactNode } from 'react'
import om from '@assets/mobile-money/orange-money.svg'
import wave from '@assets/mobile-money/logo-wave.svg'

interface MethodePaiement {
  nom: string;
  symbole: string;
  icone: ReactNode;
  devise: string;
}

const iconeOM = <img className="icone-crypto" src={om} alt='OM SN'/>
const iconeWave = <img className="icone-crypto" src={wave} alt='Wave SN'/>

export const ListePaiement: MethodePaiement[] = [
  {
    nom: 'Orange Money Sénégal',
    symbole: 'OM SN',
    icone: iconeOM,
    devise: 'FCFA'
  },

  {
    nom: 'Wave Sénégal',
    symbole: 'Wave SN',
    icone: iconeWave,
    devise: 'FCFA'
  }
]
