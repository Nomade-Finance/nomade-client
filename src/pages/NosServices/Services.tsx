import './_nos-services.scss'

import CryptoCard from '@components/Card/CryptoCard'
import PreLayout from '@layouts/PreLayout'

export default function Services () {
  return (
    <PreLayout>
      <section id="main-services">
        <h1 className="sevices-title">Nos Services</h1>
        <section>
          <div>
            <h2 className="subtitle">Achat & Vente de Crypto-Actifs</h2>
            <p className="description">
              Chez Nomade Finance, nous vous offrons un choix soigneusement
              sélectionné de crypto-actifs. Pour le moment, nous proposons USDC
              et Bitcoin. Notre priorité est de vous fournir des solutions
              stables et fiables pour vos besoins en cryptomonnaies.
            </p>
          </div>
        </section>

          <section>
            <div>
              <h2 className="subtitle">Nos Sélection de Cryptos</h2>
              <section className="crypto-card-grid">
                <CryptoCard symbol={'btc'} />
                <CryptoCard symbol={'usdc'} />
                <CryptoCard symbol={'eth'} />
                <CryptoCard symbol={'sol'} />
                <CryptoCard symbol={'avax'} />
                <CryptoCard symbol={'arb'} />
              </section>
            </div>
          </section>
          <section>
            <h2>Paiement par mobile money</h2>
            <p>
              Nous vous offrons la flexibilité d'acheter ou de vendre vos
              cryptos préférés en utilisant votre solde mobile money. C'est un
              moyen pratique d'investir dans ces actifs numériques ou de les
              convertir en monnaie locale.
            </p>
          </section>

          <section>
            <h2>À Votre Service 24/7</h2>
            <p>
              Notre équipe est à votre service en continu, de jour comme de
              nuit, 7 jours sur 7. Nous sommes là pour répondre à toutes vos
              questions, résoudre les moindres problèmes, et vous accompagner
              dans vos échanges. Notre engagement est de vous assurer une
              expérience sans souci.
            </p>
          </section>
          <section className="service-card">
            <h2>Sécurité maximale</h2>
            <p>
              Chez Nomade Finance, nous plaçons la sécurité au sommet de nos
              priorités. Nous avons mis en place des protocoles de sécurité de
              pointe pour garantir la protection de vos actifs et de vos données
              personnelles. Vous pouvez effectuer des transactions en toute
              confiance, sachant que nous surveillons de près votre sécurité
              pour une expérience utilisateur optimale.
            </p>
          </section>
      </section>
    </PreLayout>
  )
}
