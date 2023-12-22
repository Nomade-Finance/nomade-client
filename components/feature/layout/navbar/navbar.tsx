"use client";

import { Menu, X } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import Icon from "@/lib/icons";
import Link from "next/link";
import Logo from "./logo";
import ThemeToggle from "@/src/theme/ThemeToogle";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import menuItems from "@/src/data/navItem.json";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const goToExchange = () => {
    router.push("#");
  };

  return (
    <nav className="sticky z-10 top-0 bg-background border-b w-full flex flex-wrap items-center justify-between p-2 md:p-6 transition-color duration-300">
      <div className="flex justify-between w-full items-center">
        <Logo />
        <div className="hidden md:flex items-center">
          {menuItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="block mt-2 md:mt-0 md:inline-block mr-1 md:mr-2"
            >
              <Button
                className="flex gap-2 justify-center items-center text-[0.9em]"
                variant="outline"
              >
                <Icon
                  size={15}
                  name={item.icon as keyof typeof dynamicIconImports}
                />
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-2 md:gap-5">
            <ThemeToggle />
            <Button onClick={goToExchange}>ÉCHANGES</Button>
          </div>
          <div className="block md:hidden ml-2">
            <Button
              variant="outline"
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center w-9 p-0 md:px-2 md:py-2 rounded"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      <div
        className={`w-full block flex-grow pt-3 md:hidden ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="flex justify-center items-center border-t pt-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="block md:mt-0 p-1 md:mr-4"
            >
              <Button
                variant="outline"
                size="sm"
                className="flex gap-2 justify-center items-center text-[0.5em] s:text-xs"
              >
                <Icon
                  size={10}
                  name={item.icon as keyof typeof dynamicIconImports}
                />
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
