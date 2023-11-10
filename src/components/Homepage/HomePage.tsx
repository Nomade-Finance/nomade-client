import Button from '@components/Button/Button'
import { Link } from 'react-router-dom'

export default function HomePage () {
  return (
    <section id="home-body">
      <div className="home-background">
        <div className="pattern">

          <section className="hero">
            <h1 className="title">
              La solution <b>fiable</b> pour accéder aux{' '}
              <b className="cryptomonnaie">crypto-actifs</b>
            </h1>
            <Link to="/echanges">
              <Button label="Echanges" outline/>
            </Link>
          </section>

        </div>
      </div>
    </section>
  )
}
