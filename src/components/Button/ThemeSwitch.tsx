import './_theme-swither.scss'

import { FaMoon, FaSun } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'

import { m } from 'framer-motion'

interface ThemeSwitcherProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  onClick = () => {}
}) => {
  const switchTheme = (event: React.MouseEvent) => {
    onClick(event)
    setIsDarkMode(!isDarkMode)
  }
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    return savedTheme === 'dark'
  })

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = (e: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => setIsDarkMode(e.matches)
    mediaQuery.addEventListener('change', listener)
    return () => mediaQuery.removeEventListener('change', listener)
  }, [])

  return (
    <m.button
      className="theme-switcher"
      whileHover={{ cursor: 'pointer', background: 'var(--nomade-hover)' }}
      whileTap={{ scale: 0.97 }}
      onClick={switchTheme}
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </m.button>
  )
}

export default ThemeSwitcher
