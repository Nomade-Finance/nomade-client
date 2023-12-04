import './_footer.scss'

import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa'

import { FooterMenuItems } from './FooterMenuItems'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='main-footer'>
      <ul className="footer-menu">
        {FooterMenuItems.map((item, index) => {
          return (
            <li key={index}>
            <Link className={item.cName} href={item.url} aria-label={item.title}>
              {item.title}
            </Link>
          </li>
          )
        })}
      </ul>
      <div className="footer-icon">
        <a href='https://github.com/Nomade-Finance' target='_blank' rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href='https://linkedin.com/company/nomade-finance' target='_blank' rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href='https://discord.gg/8vGPTvMphS' target='_blank' rel="noopener noreferrer" aria-label="Discord">
          <FaDiscord />
        </a>
      </div>
    </footer>
  )
}

export default Footer