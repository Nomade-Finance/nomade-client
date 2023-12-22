"use client";

import { ApiResponse, fetchPrice } from "@/src/api/fetchPrice";
import React, { useEffect, useState } from "react";

import { Card } from "@/components/ui/card";
import { CloudOff } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface CryptoCardProps {
  name: string;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ name }) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchPrice(name + "USDT")
      .then(setData)
      .catch(setError);
  }, [name]);

  if (error) {
    return (
      <Card className="p-1 rounded-lg flex justify-center gap-3 items-center bg-muted">
        {error.message} <CloudOff size={15} />
      </Card>
    );
  }

  return (
    <Card className="flex flex-col p-3 items-center justify-start hover:border-lime-500 hover:cursor-pointer rounded mx-1 sm:w-auto text-[0.8em] sm:text-sm">
      <h1 className="font-bold text-xl bg-gradient-to-r from-primary to-lime-400 bg-clip-text text-transparent">
        {name}
      </h1>

      <div className="flex items-baseline">
        <span className="flex text-sm items-center gap-1 pl-1 font-semibold">
          <p className="font-bold bg-gradient-to-r from-primary to-orangen bg-clip-text text-transparent">
            Prix:
          </p>
          {data?.price ?? <Skeleton className="w-14 h-3" />}
        </span>
        <span className="pl-1 text-[0.8em] font-semibold bg-gradient-to-r from-primary to-lime-400 bg-clip-text text-transparent">
          FCFA
        </span>
      </div>
    </Card>
  );
};

export default CryptoCard;
