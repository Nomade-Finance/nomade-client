// useLayoutAvant.ts
import React, { useEffect, useState } from 'react'

import Header from '@components/Header/Header'

export default function useHeader () {
  const [header, setHeader] = useState<React.ReactNode>(null)

  useEffect(() => {
    setHeader(<Header />)
  }, [])

  return { header }
}
