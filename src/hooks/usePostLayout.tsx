import React, { useEffect, useState } from 'react'

import Footer from '@components/Footer/Footer'
import Sidebar from '@components/Sidebar/Sidebar'

export default function usePostLayout () {
  const [sidebar, setSidebar] = useState<React.ReactNode>(null)
  const [footer, setFooter] = useState<React.ReactNode>(null)

  useEffect(() => {
    setSidebar(<Sidebar />)
    setFooter(<Footer/>)
  }, [])

  return { sidebar, footer }
}
