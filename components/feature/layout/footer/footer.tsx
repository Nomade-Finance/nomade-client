import { Github, Linkedin } from "lucide-react";

import Link from "next/link";
import footerData from "@/src/data/footerItem.json";

const Footer: React.FC = () => {
  const { links, socialMedia } = footerData;

  return (
    <footer className="relative w-full m-0 border-t md:sticky md:bottom-0 md:w-full grid grid-cols-1 md:flex gap-2 py-10 sm:p-3 bg-background items-center justify-items-center md:justify-between transition-colors duration-300">
      <div className="flex flex-col justify-center text-center md:flex-row gap-2 md:gap-5">
        {links.map((link, index) => (
          <Link
            className="text-secondary-foreground hover:text-primary/60"
            type="link"
            key={index}
            href={link.url}
          >
            <p className="text-sm">{link.name}</p>
          </Link>
        ))}
      </div>
      <div className="flex flex-row md:flex-row gap-2 md:gap-3">
        <Link href={socialMedia.github}>
          <Github size={15} />
        </Link>
        <Link href={socialMedia.linkedin}>
          <span>
            <Linkedin size={15} />
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
