"use client";

import "./_sidebar.scss";

import { easeInOut, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Avatar from "@/components/Avatar/Avatar";
import CloseIcon from "@mui/icons-material/Close";
import Cookies from 'js-cookie';
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { SidebarData } from "./SidebarData";
import ThemeSwitcher from "@/components/Button/ThemeSwitch";
import { getUser } from "@/app/api/users/routes";
import { useRouter } from "next/navigation";
import useTheme from "@/hooks/useTheme";

interface User {
  name: string;
}
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { x: "-100%" },
};

const Sidebar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null); // Define the type of user


  const router = useRouter();
  const handleLinkClick = (url: string) => {
    setSidebar(false);
    router.push(url);
  };
  const handleLogout = () => {
    // Clear the authentication token
    Cookies.remove('token');
    Cookies.remove('expirationDate');

    // Redirect the user to the login page
    router.push('/auth/login');
  };
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [isDarkMode, switchTheme, sideLogo, sideLogoIcon] = useTheme();
  
  useEffect(() => {
    // Fetch the user data when the component mounts
    getUser().then(setUser);
  }, []);

  return (
    <>
      <div className="utilsbar">
        <div className="vstack">
          <Link className="link" href="/">
            <Image
              src={sideLogoIcon}
              alt="Theme icon"
              className="side-icon"
              width={30}
              height={37}
              priority
            />
          </Link>
          <motion.button
            className="side-menu-bars"
            onClick={showSidebar}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MenuIcon className="menu" />
          </motion.button>

        </div>
        <div className="vstack">
          <div className="hstack">
          <Avatar /> 
        <ThemeSwitcher onClick={switchTheme} />
          </div>
        </div>

      </div>

      <motion.aside
        className={sidebar ? "side-menu active" : "side-menu"}
        animate={sidebar ? "open" : "closed"}
        variants={variants}
        transition={{ ease: easeInOut, duration: 0.1 }}
      >
        <ul className="side-menu-items">
          <li className="sidebar-toggle">
            <Link href="/">
              <Image
                src={sideLogo}
                alt="Nomade Logo with Text"
                className="side-logo"
                width={125}
                height={50}
                priority
              />
            </Link>
            <motion.button
              className="side-menu-bars"
              onClick={() => setSidebar(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <CloseIcon className="close" cursor="pointer" />
            </motion.button>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <motion.li
                key={index}
                className={item.cName}
                animate={sidebar ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.3 }}
              >
                <a
                  onClick={() => handleLinkClick(item.path)}
                  aria-label={item.title}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </motion.aside>
    </>
  );
};

export default Sidebar;
