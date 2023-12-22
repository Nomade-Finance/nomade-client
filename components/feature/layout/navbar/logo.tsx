import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import LogoDesktopDark from "@/src/assets/nomade-logos/nomade-finance-logo-blanc-bleu-4Dark.svg";
import LogoDesktopLight from "@/src/assets/nomade-logos/nomade-finance-logo-blanc-bleu-4Light.svg";
import LogoMobileDark from "@/src/assets/nomade-logos/sidebar-closed-icon-4dark.svg";
import LogoMobileLight from "@/src/assets/nomade-logos/sidebar-closed-icon-4light.svg";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ThemeImage from "@/src/theme/theme-image";

const Logo: React.FC = () => {

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <>
        <div className="s:hidden">
          <Skeleton className="h-5 w-5 rounded-full" />
        </div>
        <div className="hidden s:block">
          <Skeleton className="h-4 w-[110px]" />
        </div>
      </>
    );
  }

  return (
    <>
      <Link href="/" className="s:hidden">
        <ThemeImage
          srcDark={LogoMobileDark}
          srcLight={LogoMobileLight}
          alt="Logo Nomade Finance"
          width={30}
          height={30}
        />
      </Link>
      <Link href="/" className="hidden s:block">
        <ThemeImage
          srcDark={LogoDesktopDark}
          srcLight={LogoDesktopLight}
          alt="Logo Nomade Finance"
          width={110}
          height={30}
        />
      </Link>
    </>
  );
};

export default Logo;
