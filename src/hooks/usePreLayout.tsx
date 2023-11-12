import React, { useEffect, useState } from 'react'

import Footer from '@components/Footer/Footer'
import Navbar from '@components/Navbar/Navbar'

export default function usePreLayout () {
  const [navbar, setNavbar] = useState<React.ReactNode>(null)
  const [footer, setFooter] = useState<React.ReactNode>(null)

  useEffect(() => {
    setNavbar(<Navbar />)
    setFooter(<Footer />)
  }, [])

  return { navbar, footer }
}
