import Button from '@components/Button/Button'
import CloseIcon from '@mui/icons-material/Close'
import { Component } from 'react'
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { MenuItems } from './MenuItems'
import logo from '@assets/logos/nomade-finance-logo-blanc-bleu.svg'
import { motion } from 'framer-motion'

class Navbar extends Component {
  state = { clicked: false }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render () {
    return (
      <nav>
        <Link to="/">
          <img
            className="navbar-logo"
            src={logo}
            alt="logo nomade finance"
          />
        </Link>
        <div className="menu-icon" onClick={this.handleClick}>
          {this.state.clicked
            ? (
            <CloseIcon className="close" />
              )
            : (
            <MenuIcon className="menu" />
              )}
        </div>
        <ul
        className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <motion.li
              whileTap={{ scale: 0.97 }}
              key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </motion.li>
            )
          })}
        </ul>

        <Link to="/echanges">
          <Button
            className="navbar-button"
            label="Échanges"
            icon={<CurrencyBitcoinRoundedIcon />}
            iconPosition="right"
          />
        </Link>
      </nav>
    )
  }
}

export default Navbar
