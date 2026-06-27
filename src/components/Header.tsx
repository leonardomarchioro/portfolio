"use client";

import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import type { Generals } from "@/i18n/generals";
import type { Dictionary } from "@/i18n/pt-BR";

type HeaderProps = {
  brand: Generals["brand"];
  navItems: Dictionary["nav"];
  currentLng: string;
};

export function Header({ brand, navItems, currentLng }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Sync theme on mount
  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as "dark" | "light") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleLanguageChange = (lng: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lng", lng);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <header className="fixed top-0 z-20 w-full border-b border-surface-muted bg-background/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-20 w-full max-w-container items-center justify-between px-gutter md:px-20"
        aria-label="Navegacao principal"
      >
        <a
          className="inline-flex items-center gap-2 font-code text-lg font-bold tracking-normal text-text"
          href="#hero"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-primary">{brand.prefix}</span>
          {brand.name}
          <span className="text-primary">{brand.suffix}</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="list-none flex items-center gap-8 p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className="font-display text-sm font-medium uppercase tracking-[0.05em] text-text-muted transition-colors hover:text-primary"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 border-l border-surface-muted pl-6">
            <button
              onClick={toggleTheme}
              className="inline-flex size-10 cursor-pointer items-center justify-center rounded border border-surface-muted bg-surface text-text hover:bg-surface-strong transition-colors"
              aria-label="Alternar tema"
              type="button"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <select
              value={currentLng}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="cursor-pointer rounded border border-surface-muted bg-surface px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-text outline-none focus:border-primary hover:bg-surface-strong transition-colors"
              aria-label="Selecionar idioma"
            >
              <option value="pt_BR" className="bg-surface text-text font-sans">PT</option>
              <option value="en" className="bg-surface text-text font-sans">EN</option>
            </select>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="inline-flex size-11 cursor-pointer items-center justify-center rounded border border-surface-muted bg-surface text-text md:hidden"
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen ? (
        <div className="grid gap-4 border-t border-surface-muted bg-background px-gutter pb-6 pt-4 md:hidden">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <a
                className="py-3 font-display text-sm font-medium uppercase tracking-[0.05em] text-text-muted transition-colors hover:text-primary"
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-surface-muted pt-4">
            <span className="font-display text-xs font-semibold uppercase tracking-wider text-text-muted">
              Configurações / Settings
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="inline-flex size-10 cursor-pointer items-center justify-center rounded border border-surface-muted bg-surface text-text hover:bg-surface-strong transition-colors"
                aria-label="Alternar tema"
                type="button"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <select
                value={currentLng}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="cursor-pointer rounded border border-surface-muted bg-surface px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-text outline-none focus:border-primary hover:bg-surface-strong transition-colors"
                aria-label="Selecionar idioma"
              >
                <option value="pt_BR" className="bg-surface text-text font-sans">PT</option>
                <option value="en" className="bg-surface text-text font-sans">EN</option>
              </select>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
