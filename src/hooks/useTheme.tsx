import { MouseEvent, useEffect, useState } from 'react'

type UseThemeType = [boolean, (event: MouseEvent) => void]

const useTheme = (): UseThemeType => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    return savedTheme === 'dark'
  })

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

  return [isDarkMode, switchThemes]
}

export default useTheme
