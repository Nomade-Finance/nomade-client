import './Loading.scss'

import badge from '@assets/nomade-badge.svg'
import { m } from 'framer-motion'

export default function Loading () {
  return <m.div className="loading">
    <img src={badge} alt="nomade icon" />
  </m.div>
}
