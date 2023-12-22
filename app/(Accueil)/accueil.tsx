"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
const Accueil: React.FC = () => {
  const router = useRouter();
  const goToExchange = () => {
    router.push("#");
  };

  return (
    <div className="flex flex-col align-center justify-center p-12 gap-12 w-full">
      <h1 className="text-xl l:text-8xl lg:text-5xl md:text-4xl sm:text-3xl s:text-2xl text-left">
        Accédez aux
        <span className="bg-gradient-to-r from-orangen to-primary bg-clip-text text-transparent">
          <b> cryptos</b>
        </span>
        <br />
        en toute <b>simplicité</b>
        <br />
      </h1>
      <Button
        onClick={goToExchange}
        className="w-[150px]"
        variant="outline"
        size="lg"
      >
        Lancer L&apos;app
      </Button>
    </div>
  );
};

export default Accueil;
