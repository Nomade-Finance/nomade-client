import "./_services.scss";

import CryptoCard from "@/components/Card/CryptoCard";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import LoopRoundedIcon from "@mui/icons-material/LoopRounded";
import MobileFriendlyRoundedIcon from "@mui/icons-material/MobileFriendlyRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";

export const metadata = {
  title: "Nomade Finance | Nos Services",
  description: "Nos services en place pour vous",
};
export default function Services() {
  return (
    <>
      <section id="main-services">
        <h1 className="sevices-title">Nos Services</h1>
        <section>
          <div>
            <h2 className="subtitle">
              <span>
                <LoopRoundedIcon />
              </span>
              Achat & Vente
            </h2>
            <p className="description">
              Chez Nomade Finance, nous vous offrons un choix soigneusement
              sélectionné de crypto-actifs. Pour le moment, nous proposons{" "}
              <b>l&apos;USDC</b> et le <b>Bitcoin</b>. Notre priorité est de
              vous fournir des solutions stables et fiables pour vos besoins en
              cryptomonnaies.
            </p>
          </div>
        </section>

        <section>
          <div>
            <h2 className="subtitle">Notre Sélection</h2>
            <section className="crypto-card-grid">
              <CryptoCard symbol={"BTC"} />
              <CryptoCard symbol={"USDC"} />
              <CryptoCard symbol={"ETH"} />
              <CryptoCard symbol={"SOL"} />
              <CryptoCard symbol={"AVAX"} />
              <CryptoCard symbol={"ARB"} />
            </section>
          </div>
        </section>
        <section>
          <h2 className="subtitle">
            <span>
              <MobileFriendlyRoundedIcon />
            </span>
            Mobile money
          </h2>
          <p>
            Nous vous offrons la flexibilité d&apos;acheter ou de vendre vos
            cryptos préférés en utilisant votre solde mobile money. C&apos;est
            un moyen pratique d&apos;investir dans ces actifs numériques ou de
            les convertir en monnaie locale.
          </p>
        </section>

        <section>
          <h2 className="subtitle">
            <span>
              <SupportAgentRoundedIcon />
            </span>
            Service 24/7
          </h2>
          <p>
            Notre équipe est à votre service en continu, de jour comme de nuit,
            7 jours sur 7. Nous sommes là pour répondre à toutes vos questions,
            résoudre les moindres problèmes, et vous accompagner dans vos
            échanges. Notre engagement est de vous assurer une expérience sans
            souci.
          </p>
        </section>
        <section className="service-card">
          <h2 className="subtitle">
            <span>
              <HttpsOutlinedIcon />
            </span>
            Sécurité maximale
          </h2>
          <p>
            Chez Nomade Finance, nous plaçons la sécurité au sommet de nos
            priorités. Nous avons mis en place des protocoles de sécurité de
            pointe pour garantir la protection de vos actifs et de vos données
            personnelles. Vous pouvez effectuer des transactions en toute
            confiance, sachant que nous surveillons de près votre sécurité pour
            une expérience utilisateur optimale.
          </p>
        </section>
      </section>
    </>
  );
}
