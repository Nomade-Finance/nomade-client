import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CGU | Nomade Finance",
  description: "Conditions Générales d'Utilisation",
};

export default function page() {
  return (
    <div className="flex items-center justify-center h-screen">
      Conditions Générales
    </div>
  );
}
