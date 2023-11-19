import './_homepage.scss'

import Button from '@components/Button/Button'
import { Link } from 'react-router-dom'
import { m } from 'framer-motion'

export default function HomePage () {
  return (
    <section id="home-body">
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      className="home-background">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        className="pattern">
          <m.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          className="hero">
            <h1
            className="title">
              La solution <b>fiable</b> pour accéder aux
              <m.b
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              className="cryptomonnaie"> crypto-actifs</m.b>
            </h1>
            <Link to="/echanges">
                <Button type='button' label="Lancer L'app" outline />
            </Link>
          </m.section>
        </m.div>
      </m.div>
    </section>
  )
}
