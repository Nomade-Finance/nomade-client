import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa'

import { Component } from 'react'
import { FooterMenuItems } from './FooterMenuItems'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render () {
    return (
      <section id='main-footer'>
        <ul className="footer-menu">
          {FooterMenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="footer-icon">
          <Link to='https://github.com/Nomade-Finance' target='_blank'>
            <FaGithub />
          </Link>
          <Link to='https://linkedin.com/company/nomade-finance' target='_blank'>
            <FaLinkedin />
          </Link>
          <Link to='https://discord.gg/8vGPTvMphS' target='_blank'>
            <FaDiscord />
          </Link>
        </div>
      </section>
    )
  }
}

export default Footer
