"use client";

import { BookOpen, Brain, Goal, Target, Tent } from "lucide-react";

import NomadeCard from "@/components/feature/core/cards/ nomade-card";
import React from "react";
import cardData from './tribu.json';

function tribu() {
  return (
    <section className="flex flex-col justify-between space-y-5 p-3 border rounded-lg">
      <h1 className="text-xs s:text-base md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-bold">
        <span className="flex gap-2 items-center bg-gradient-to-r from-primary to-orangen bg-clip-text text-transparent">
          <Tent size={25} color="#e49435" />
          Bienvenue au campement.
        </span>
      </h1>
      <section className="flex flex-col gap-10 justify-between space-y-1 h-full p-1">
        <section className="border rounded-lg p-3 backdrop-blur-sm bg-opacity-50">
          <div>
            <h2 className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-xl flex items-center justify-start space-x-1 uppercase pb-4">
              <BookOpen size={20} color="#e49435" />
              <span className="pl-1 font-bold">Histoire</span>
            </h2>
            <div className="flex flex-col gap-5 text-start">
              <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-2xl">
                Réunis par notre amour pour les possibilités sans fin offertes
                par la technologie, nous avons décidé de nous lancer dans une
                aventure audacieuse. Inspirés par les opportunités offertes par
                le web3 et l&apos;impact potentiel sur la finance, nous avons
                fondé Nomade Finance en 2023.
              </p>
              <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-2xl">
                Notre plateforme est conçue pour offrir une expérience intuitive
                et sans complications, facilitant les échanges rapides de{" "}
                <strong>crypto-actif</strong>. Nous mettons l&apos;accent sur la
                simplicité en proposant des options de paiement par Mobile
                Money, ouvrant ainsi la voie à une nouvelle ère
                d&apos;accessibilité aux <strong>actifs numériques</strong> en
                Afrique de l&apos;Ouest.
              </p>
              <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-2xl">
                Aujourd&apos;hui, <strong>Nomade Finance</strong> est bien plus
                qu&apos;une simple plateforme d&apos;échange. C&apos;est le
                résultat d&apos;un voyage, une aventure commune, une tribu de
                passionnés déterminés à ouvrir de nouvelles opportunités pour
                tous. Notre histoire continue de s&apos;écrire, et nous sommes
                honorés de vous avoir à nos côtés pour chaque chapitre.
              </p>
            </div>
          </div>
        </section>
        <section className="border rounded-lg p-3 backdrop-blur-sm bg-opacity-50">
          <div>
            <h2 className="text-xs sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-xl flex items-center justify-start space-x-1 uppercase pb-4">
              <Target size={20} color="#e49435" />
              <span className="pl-1 font-bold">Mission</span>
            </h2>
            <div>
              <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-2xl">
                Nous avons pour mission d’innover les services financiers en
                Afrique de l&apos;Ouest en fusionnant de manière transparente le
                mobile money et les crypto-monnaies au sein d&apos;une
                plateforme conviviale et sécurisée, favorisant l&apos;inclusion
                financière et l&apos;autonomisation.
              </p>
            </div>
          </div>
        </section>

        {/* OBJECTIF */}

        <section className="border rounded-lg p-3 backdrop-blur-sm bg-opacity-50">
          <div>
            <h2 className="text-xs sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-xl flex items-center justify-start space-x-1 uppercase pb-4">
              <Goal size={20} color="#e49435" />
              <span className="pl-1 font-bold">Objectif</span>
            </h2>
            <div className="flex flex-col text-base text-start gap-3">
              <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-2xl">
                Notre objectif ultime est de simplifier le paysage des échanges
                de crypto-monnaies en Afrique de l&apos;Ouest. <br />
                Nous nous engageons à fournir des solutions{" "}
                <strong>simples, rapides & sécurisées</strong> pour permettre
                aux particuliers de profiter des avantages des{" "}
                <strong>actifs numériques</strong>.
              </p>
              <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-2xl">
                Nous commençons par offrir une sélection soigneusement choisie
                de crypto-actifs.
                <br />
                Cependant, nous prévoyons de diversifier notre offre en nous
                appuyant sur les avis de nos utilisateurs pour répondre de
                manière personnalisée à leurs besoins spécifiques.
              </p>
            </div>
          </div>
        </section>

        <section className="border rounded-lg p-3 backdrop-blur-sm bg-opacity-50">
          <div>
            <h2 className="text-xs sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-xl flex items-center justify-start space-x-1 uppercase pb-4">
              <Brain size={20} color="#e49435" />
              <span className="pl-1 font-bold">Équipe</span>
            </h2>
            <div className="flex flex-col text-base text-start gap-3">
              <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-2xl">
                Nous sommes une équipe passionnée et déterminée qui a embrassé
                la philosophie de la tribu nomade pour créer Nomade Finance.
                Notre histoire est le reflet de notre engagement envers une
                finance numérique accessible et sans barrières.
              </p>
              <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-2xl">
                Notre équipe est composée de passionnés de la finance, de la
                technologie et de la sécurité. Chacun d&apos;entre nous partage
                une vision commune : rendre l&apos;univers des crypto-monnaies
                plus transparent, plus accessible et plus sûr pour nos
                utilisateurs.
              </p>
            </div>
          </div>
        </section>

        <section className="border rounded-lg p-3 backdrop-blur-sm bg-opacity-50">
          <div>
            <h2 className="text-xs sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-xl flex items-center justify-start space-x-1 uppercase pb-4">
              <Tent size={20} color="#e49435" />
              <span className="pl-1 font-bold">La tribu</span>
            </h2>
            <div className="flex flex-col text-base text-start gap-3">
              <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-2xl">
                Chez Nomade Finance, nous croyons en la force de la communauté.
                Rejoignez notre communauté et faites partie de quelque chose de
                plus grand !
              </p>
              <section>
                <div>
                  <section className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
                    {cardData.map((card, index) => (
                      <NomadeCard
                        key={index}
                        title={card.title}
                        content={card.content}
                        iconName={card.icon}
                      />
                    ))}
                  </section>
                </div>
              </section>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default tribu;
