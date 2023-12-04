"use client";

import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import styles from "./_themeSwitcher.module.scss";

const DarkModeRoundedIcon = dynamic(
  () => import("@mui/icons-material/DarkModeRounded"),
  { ssr: false,
    loading: () => <div style={{ fontSize: "1em" }}>&#9790;</div>,
  }
  
);

const LightModeRoundedIcon = dynamic(
  () => import("@mui/icons-material/LightModeRounded"),
  { ssr: false,
    loading: () => <div style={{ fontSize: "1em" }}>&#9728;</div>,
  }
);

interface ThemeSwitcherProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: any;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  onClick = () => {},
}) => {
  const switchTheme = (event: React.MouseEvent) => {
    onClick(event);
    setIsDarkMode(!isDarkMode);
  };
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "light";
      return savedTheme === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.classList.toggle("dark", isDarkMode);
    }
  }, [isDarkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e: { matches: boolean }) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return (
    <button className={styles["theme-switcher"]} onClick={switchTheme} aria-label="theme-switcher">
      {isDarkMode ? (
        <LightModeRoundedIcon style={{ fontSize: "1em" }} />
      ) : (
        <DarkModeRoundedIcon style={{ fontSize: "1em" }} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
