import { Bot, Lock, Repeat, ShoppingBag, Smartphone } from "lucide-react";

import CryptoCard from "@/components/feature/core/cards/crypto-card";
import React from "react";

export default function Services() {
  return (
    <section className="flex flex-col justify-between space-y-5 p-3 border rounded-lg">
      <h1 className="text-xs s:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-bold">
        <span className="flex gap-2 items-center bg-gradient-to-r from-primary to-orangen bg-clip-text text-transparent">
          <ShoppingBag size={25} color="#e49435" />
          Nos Services
        </span>
      </h1>
      <section className="flex flex-col gap-3 justify-between space-y-1 h-full p-3 border rounded-lg">
        <section>
          <div>
            <h2 className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-xl flex items-center justify-start space-x-1 uppercase pb-4">
              <Repeat size={20} color="#e49435" />
              <span className="pl-1 font-bold">Achat & Vente</span>
            </h2>
            <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-2xl">
              Nous vous offrons un choix soigneusement sélectionné de
              crypto-actifs. Pour le moment, nous proposons <b>l&apos;USDC</b>{" "}
              et le <b>Bitcoin</b>. Notre priorité est de vous fournir des
              solutions stables et fiables pour vos besoins en cryptomonnaies.
            </p>
          </div>
        </section>

        <section>
          <div>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <CryptoCard name={"BTC"} />
              <CryptoCard name={"ETH"} />
              <CryptoCard name={"BNB"} />
              <CryptoCard name={"SOL"} />
              <CryptoCard name={"USDC"} />
              <CryptoCard name={"DAI"} />
            </section>
          </div>
        </section>
      </section>

      <section className="flex flex-col justify-between space-y-1 h-full p-4 border border-nomade-border rounded-lg">
        <div>
          <h2 className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-xl flex items-center justify-start space-x-1 uppercase pb-4">
            <Smartphone size={20} color="#e49435" />
            <span className="pl-1 font-bold">Mobile money</span>
          </h2>
          <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-2xl">
            Nous vous offrons la flexibilité d&apos;acheter ou de vendre vos
            cryptos préférés en utilisant votre solde mobile money.
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-between space-y-1 h-full p-4 border border-nomade-border rounded-lg">
        <div>
          <h2 className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-xl flex items-center justify-start space-x-1 uppercase pb-4">
            <Bot size={20} color="#e49435" />
            <span className="pl-1 font-bold">Support 24/7</span>
          </h2>
          <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-2xl">
            Notre équipe est à votre service en continu, de jour comme de nuit,
            7 jours sur 7. Nous sommes là pour répondre à toutes vos questions,
            résoudre les moindres problèmes, et vous accompagner dans vos
            échanges. Notre engagement est de vous assurer une expérience sans
            souci.
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-between space-y-1 h-full p-4 border border-nomade-border rounded-lg">
        <div>
          <h2 className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-xl flex items-center justify-start space-x-1 uppercase pb-4">
            <Lock size={20} color="#e49435" />
            <span className="pl-1 font-bold">Sécurité maximale</span>
          </h2>
          <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-2xl">
            Chez Nomade Finance, nous plaçons la sécurité au sommet de nos
            priorités. Nous avons mis en place des protocoles de sécurité de
            pointe pour garantir la protection de vos actifs et de vos données
            personnelles. Vous pouvez effectuer des transactions en toute
            confiance, sachant que nous surveillons de près votre sécurité pour
            une expérience utilisateur optimale.
          </p>
        </div>
      </section>
    </section>
  );
}
