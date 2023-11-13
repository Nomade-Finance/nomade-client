import './Loading.scss'

import badge from '@assets/nomade-badge.svg'

export default function Loading () {
  return <div className="loading">
    <img src={badge} alt="nomade icon" />
  </div>
}
