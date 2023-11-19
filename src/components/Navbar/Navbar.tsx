import './_navbar.scss'

import Button from '@components/Button/Button'
import CloseIcon from '@mui/icons-material/Close'
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded'
import { Link } from 'react-router-dom'
import Logo4Dark from '@assets/nomade-logos/nomade-finance-logo-blanc-bleu-4Dark.svg'
import Logo4Light from '@assets/nomade-logos/nomade-finance-logo-blanc-bleu-4Light.svg'
import MenuIcon from '@mui/icons-material/Menu'
import { MenuItems } from './MenuItems'
import ThemeSwitcher from '@components/Button/ThemeSwitch'
import { m } from 'framer-motion'
import { useState } from 'react'
import useTheme from '@hooks/useTheme'

const variants = {
  in: { opacity: 1, y: '0' },
  out: { y: '50%' },
  sweep: { y: '15%' }
}

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const [isDarkMode, switchTheme] = useTheme()

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <nav>
      <Link to="/">
        <m.img
          className="navbar-logo"
          src={isDarkMode ? Logo4Dark : Logo4Light}
          alt="logo nomade finance"
          initial="sweep"
          whileTap={{ scale: 0.97 }}
          animate={clicked ? 'out' : 'in'}
          variants={variants}
        />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        {clicked ? <CloseIcon className="close" /> : <MenuIcon className="menu" />}
      </div>
      <m.ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => (
          <m.li whileTap={{ scale: 0.97 }} key={index}>
            <Link className={item.cName} to={item.url}>
              {item.title}
            </Link>
          </m.li>
        ))}
        <ThemeSwitcher onClick={switchTheme}/>
      </m.ul>
      <Link to="/echanges">
        <Button type='button' className="navbar-button" label="Échanges" icon={<CurrencyBitcoinRoundedIcon />} iconPosition="right" />
      </Link>
    </nav>
  )
}

export default Navbar
