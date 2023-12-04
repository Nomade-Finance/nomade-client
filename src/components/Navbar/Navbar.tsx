"use client";

import "./_navbar.scss";

import Button from "@/components/Button/Button";
import CloseIcon from "@mui/icons-material/Close";
import CurrencyBitcoinRoundedIcon from "@mui/icons-material/CurrencyBitcoinRounded";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItems } from "./MenuItems";
import ThemeSwitcher from "@/components/Button/ThemeSwitch";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useTheme from "@/hooks/useTheme";

const Navbar = () => {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [isDarkMode, switchTheme, logosrc] = useTheme();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLinkClick = (url: string) => {
    setClicked(false);
    router.push(url);
  };

  return (
    <nav className="main-navbar">
      <Link href="/">
        <Image
          className="navbar-logo"
          src={logosrc}
          alt="logo nomade finance"
          width={140}
          height={40}
          priority
        />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        {clicked ? (
          <CloseIcon className="close" />
        ) : (
          <MenuIcon className="menu" />
        )}
      </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index} className={item.cName} onClick={() => handleLinkClick(item.url)}>
              {item.title}
            </li>
          ))}
          <ThemeSwitcher onClick={switchTheme} />
        </ul>

      <Button
        href="/exchange"
        type="button"
        className="navbar-button"
        label="Échanges"
        icon={<CurrencyBitcoinRoundedIcon />}
        iconPosition="right"
      />
    </nav>
  );
};

export default Navbar;
