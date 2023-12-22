import type { Metadata } from "next";
import React from 'react'
import Tribu from "./tribu";
export const metadata: Metadata = {
  title: "La Tribu | Nomade Finance",
  description: "La Tribu",
};

function page() {
  return (
    <section className="cone">
       <Tribu/>
    </section>
  )
}

export default page