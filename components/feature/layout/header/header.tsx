"use client";

import React, { useEffect, useState } from "react";

import { CloudOff } from "lucide-react";
import Marquee from "react-fast-marquee";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchPrice } from "@/src/api/fetchPrice";

type PriceData = { [key: string]: string };

const tickers = ["BTC", "SOL", "ETH", "BNB", "USDC", "ARB"];

const Header = () => {
  const [data, setData] = useState<PriceData | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    Promise.all(tickers.map((ticker) => fetchPrice(ticker + "USDT")))
      .then((prices) => {
        const priceData = prices.reduce((acc, { symbol, price }) => {
          acc[symbol] = price;
          return acc;
        }, {} as PriceData);
        setData(priceData);
      })
      .catch(setError);
  }, []);

  if (error) {
    return (
      <header className="p-1 flex justify-center gap-3 items-center bg-orangen text-blanc">{error.message} <CloudOff size={15}/></header>
    );
  }

  return (
    <header className="sticky border-b flex w-full h-auto items-center justify-between p-1 bg-primary-foreground text-foreground">
      <Marquee
        className="flex w-screen cursor-grab"
        autoFill
        pauseOnHover
        loop={0}
      >
        {tickers.map((ticker) => (
          <div
            className="flex items-baseline border hover:border-lime-500 hover:cursor-pointer rounded px-1 mx-1 w-[97%] sm:w-auto text-[0.8em] sm:text-sm "
            key={ticker}
          >
            <h3 className="font-bold bg-gradient-to-r from-primary to-lime-400 bg-clip-text text-transparent">
              {ticker}
              {" -"}
            </h3>
            <span className="pr-1 flex items-center font-semibold">
              {"-"}
              <span className="pl-1" />
              {data?.[ticker + "USDT"] ?? (
                <Skeleton className="pl-1 w-20 h-3" />
              )}
            </span>
            <span className="pl-1 text-[0.8em] font-semibold bg-gradient-to-r from-cyan-300 to-lime-400 bg-clip-text text-transparent">
              FCFA
            </span>
          </div>
        ))}
      </Marquee>
    </header>
  );
};

export default Header;
