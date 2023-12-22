import type { Metadata } from "next";
import React from "react";
import Services from "./services";

export const metadata: Metadata = {
  title: "Services | Nomade Finance",
  description: "Nos Services",
};
function page() {
  return (
    <section >
      <Services/>
    </section>
  );
}

export default page;
