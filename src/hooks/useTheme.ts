import { MouseEvent, useEffect, useState } from 'react'

import IconDark from '@/assets/nomade-logos/sidebar-closed-icon-4dark.svg'
import IconLight from '@/assets/nomade-logos/sidebar-closed-icon-4light.svg'
import IconTextDark from '@/assets/nomade-logos/sidebar-nomade-finance-icon-text-4Dark.svg'
import IconTextLight from '@/assets/nomade-logos/sidebar-nomade-finance-icon-text-4Light.svg'
import Logo4Dark from '@/assets/nomade-logos/nomade-finance-logo-blanc-bleu-4Dark.svg';
import Logo4Light from '@/assets/nomade-logos/nomade-finance-logo-blanc-bleu-4Light.svg';

type UseThemeType = [boolean, (event: MouseEvent) => void, string, string, string]

const useTheme = (): UseThemeType => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'light'
      return savedTheme === 'dark'
    }
    return false
  })

  const [logoSrc, setLogoSrc] = useState(Logo4Light);
  const [sideLogo, setSideLogo] = useState(IconTextLight);
  const [sideLogoIcon, setSideLogoIcon] = useState(IconLight);

  const switchThemes = (): any => {
    const newTheme = !isDarkMode ? 'dark' : 'light'
    setIsDarkMode(!isDarkMode)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = (e: { matches: boolean | ((prevState: boolean) => boolean) }) => setIsDarkMode(e.matches)
    mediaQuery.addEventListener('change', listener)
    return () => mediaQuery.removeEventListener('change', listener)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setIsDarkMode(savedTheme === 'dark')
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark')
      setLogoSrc(Logo4Dark);
      setSideLogo(IconTextDark);
      setSideLogoIcon(IconDark);
    } else {
      document.body.classList.remove('dark')
      setLogoSrc(Logo4Light);
      setSideLogo(IconTextLight);
      setSideLogoIcon(IconLight);
    }
    document.body.classList.add('theme-loaded');
  }, [isDarkMode])

  return [isDarkMode, switchThemes, logoSrc, sideLogoIcon, sideLogo ]
}

export default useTheme