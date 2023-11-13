import HomePage from '@components/Homepage/HomePage'
import useHeader from '@hooks/useHeader'
import usePreLayout from '@hooks/usePreLayout'

export default function Accueil () {
  const layout = usePreLayout()
  const header = useHeader()

  return (
    <section>
      {header.header}
      {layout.navbar}
        <HomePage />
      {layout.footer}
    </section>
  )
}
