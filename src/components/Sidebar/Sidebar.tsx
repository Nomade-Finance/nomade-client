import { easeInOut, m } from 'framer-motion'

import CloseIcon from '@mui/icons-material/Close'
import IconDark from '@assets/logos/sidebar-closed-icon-4dark.svg'
import IconLight from '@assets/logos/sidebar-closed-icon-4light.svg'
import IconTextDark from '@assets/logos/sidebar-nomade-finance-icon-text-4Dark.svg'
import IconTextLight from '@assets/logos/sidebar-nomade-finance-icon-text-4Light.svg'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { SidebarData } from './SidebarData'
import ThemeSwitcher from '@components/Button/ThemeSwitch'
import { useState } from 'react'
import useTheme from '@hooks/useTheme'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { x: '-100%' }
}

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  const [isDarkMode, switchTheme] = useTheme()

  return (
    <>
      <div className="sidebar">
        <div className="side-avatar">
          <ThemeSwitcher onClick={switchTheme}/>
        </div>
        <Link className="link" to="/">
          <img
          src={isDarkMode ? IconDark : IconLight}
          alt="Theme icon"
          className="side-icon"
          loading="lazy"
          />
        </Link>

        <m.button className="side-menu-bars" onClick={showSidebar}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        >
          <MenuIcon className="menu"/>
        </m.button>
      </div>

      <m.aside className={sidebar ? 'side-menu active' : 'side-menu'}
      animate={sidebar ? 'open' : 'closed'}
      variants={variants}
      transition={{ ease: easeInOut, duration: 0.1 }}
      >
        <ul className="side-menu-items">
          <li className="sidebar-toggle">
            <Link to="/">
              <img
                src={isDarkMode ? IconTextDark : IconTextLight}
                alt="Nomade Logo with Text"
                className="side-logo"
                loading="lazy"
              />
            </Link>
            <m.button className="side-menu-bars" onClick={() => setSidebar(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <CloseIcon className="close" cursor="pointer" />
            </m.button>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <m.li key={index} className={item.cName}
              animate={sidebar ? 'open' : 'closed'}
              variants={variants}
              transition={{ duration: 0.3 }}
              >
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </m.li>
            )
          })}
        </ul>
      </m.aside>
    </>
  )
}

export default Sidebar
