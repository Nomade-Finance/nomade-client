import { ReactNode } from 'react'
import { m } from 'framer-motion'
import usePreLayout from '@hooks/usePreLayout'
interface PreLayoutProps {
  children: ReactNode;
}

const PreLayout = ({ children }: PreLayoutProps) => {
  const { navbar, footer } = usePreLayout()

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
export default PreLayout
