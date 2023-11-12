import { ReactNode } from 'react'
import useLayoutAvant from '@hooks/usePreLayout'

interface LayoutAvantProps {
  children: ReactNode;
}

const LayoutAvant = ({ children }: LayoutAvantProps) => {
  const { navbar, footer } = useLayoutAvant()

  return (
    <section>
      {navbar}
      <main className="pre-child">{children}</main>
      {footer}
    </section>
  )
}

export default LayoutAvant
