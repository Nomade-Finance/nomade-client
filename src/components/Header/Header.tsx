"use client";

import "./_header.scss";

import { BinanceResponse, ExchangeRateResponse } from "@/lib/interfaces/interfaces";
import { getBinanceData, getExchangeRateData } from "@/app/api/routes";
import { useEffect, useState } from "react";

import Marquee from "react-fast-marquee";
import Skeleton from "@mui/material/Skeleton";

const Header = () => {
  const [cryptoData, setCryptoData] = useState<BinanceResponse[]>([]);
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const symbols = [
        "BTC",
        "ETH",
        "SOL",
        "BNB",
        "ARB",
        "AVAX",
        "DOT",
        "USDC",
        "ADA",
        "XRP",
      ];
      const data: BinanceResponse[] = await Promise.all(
        symbols.map(async (symbol) => {
          const response = await getBinanceData(symbol);
          return {
            id: symbol, // assuming the id should be the symbol
            current_price: Number(response.price),
            symbol: symbol,
            price: Number(response.price),
            // include any other properties expected in BinanceResponse
          };
        })
      );
      setCryptoData(data);
      localStorage.setItem("cryptoData", JSON.stringify(data));

      const rateResponse: ExchangeRateResponse = await getExchangeRateData();
      setExchangeRate(rateResponse.rates.XOF);
      localStorage.setItem(
        "exchangeRate",
        JSON.stringify(rateResponse.rates.XOF)
      );
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Erreur de connexion");
      }
    } finally {
      setLoading(false);
      setTimeout(fetchData, 500000);
    }
  };

  useEffect(() => {
    const storedCryptoData = localStorage.getItem("cryptoData");
    const storedExchangeRate = localStorage.getItem("exchangeRate");

    if (storedCryptoData && storedExchangeRate) {
      setCryptoData(JSON.parse(storedCryptoData));
      setExchangeRate(JSON.parse(storedExchangeRate));
      setLoading(false);
    } else {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fffcf7",
          background: "#e45535",
        }}
      >
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <Skeleton variant="rectangular" width={"100%"} height={25} style={{ backgroundColor: 'var(--nomade-blck)'}} />
      ) : (
        <header id="main-header">
          <Marquee className="marquee" autoFill pauseOnHover loop={0}>
            {cryptoData.map((crypto: BinanceResponse) => {
              const price: number = crypto.price * exchangeRate;
              return (
                <div key={crypto.symbol} style={{ marginRight: "0.5rem" }}>
                  <h2>
                    {crypto.symbol} {"-"}
                  </h2>
                  <p>
                    <span>{"-"} Prix Actuel: </span>
                    {!isNaN(price)
                      ? price.toLocaleString("fr-FR", {
                          minimumFractionDigits: 1,
                        })
                      : "N/A"}{" "}
                    FCFA
                  </p>
                </div>
              );
            })}
          </Marquee>
        </header>
      )}
    </>
  );
};

export default Header;
