"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import Icon from "@/lib/icons";
import dynamic from "next/dynamic";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { useTheme } from "next-themes";

const SunIcon = dynamic(dynamicIconImports["sun"]);
const MoonIcon = dynamic(dynamicIconImports["moon"]);
const SunMoonIcon = dynamic(dynamicIconImports["sun-moon"]);

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="w-9 p-0 relative"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          <>
            {resolvedTheme === "dark" ? (
              <Icon
                name="sun"
                size={15}
                className={`absolute transition-opacity duration-100 ${
                  resolvedTheme === "dark" ? "opacity-100" : "opacity-0"
                }`}
              />
            ) : (
              <Icon
                name="moon"
                size={15}
                className={`absolute transition-opacity duration-100 ${
                  resolvedTheme === "dark" ? "opacity-0" : "opacity-100"
                }`}
              />
            )}
          </>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="hover:cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <span className="flex items-center gap-2">
            <SunIcon size={15} /> Claire
          </span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="hover:cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          <span className="flex items-center gap-2">
            <MoonIcon size={15} /> Sombre
          </span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="hover:cursor-pointer"
          onClick={() => setTheme("system")}
        >
          <span className="flex items-center gap-2">
            <SunMoonIcon size={15} /> Système
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
