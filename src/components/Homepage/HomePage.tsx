import "./_homepage.scss";

import Button from "@/components/Button/Button";
// import TauxDuJour from "../Outputs/TauxDuJour";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className="home-body">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="home-background"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pattern"
        >
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="hero"
          >

            <h1 className="title">
              La solution <b>fiable</b> pour accéder aux
              <motion.b
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="cryptomonnaie"
              >
                {" "}
                crypto-actifs
              </motion.b>
            </h1>
            <Button
              href="/exchange"
              type="button"
              label="Lancer L'app"
              outline
            />
            {/* <TauxDuJour symbol="USDC"/> */}
          </motion.section>
        </motion.div>
      </motion.div>
    </section>
  );
}
