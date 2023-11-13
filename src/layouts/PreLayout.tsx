import { ReactNode } from 'react'
import { m } from 'framer-motion'
import useLayoutAvant from '@hooks/usePreLayout'
interface LayoutAvantProps {
  children: ReactNode;
}

const LayoutAvant = ({ children }: LayoutAvantProps) => {
  const { navbar, footer } = useLayoutAvant()

  return (
    <section>
      {navbar}
      <m.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
      className="pre-child">{children}</m.main>
      {footer}
    </section>
  )
}

export default LayoutAvant
