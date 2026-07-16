"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig, whatsappMessages } from "@/data/config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon, MenuIcon, CloseIcon } from "@/components/icons";

const navLinks = [
  { href: "/#inicio", label: "Início" },
  { href: "/#catalogo", label: "Catálogo" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#contato", label: "Contato" },
];

export default function Header({ overlay = false }: { overlay?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const whatsappHref = buildWhatsAppUrl(whatsappMessages.general);
  const solid = scrolled || !overlay;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          solid ? "border-b border-plum/10 bg-cream/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:h-[72px] sm:px-6">
          <a href="/#inicio" aria-label={`${siteConfig.name}, ir para o início`}>
            <Image
              src="/brand/logo-mark.png"
              alt={siteConfig.name}
              width={1168}
              height={771}
              className="h-9 w-auto sm:h-11"
            />
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-plum/90 transition-colors hover:text-plum"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-plum px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-plum-light"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-plum text-cream shadow-card transition-colors hover:bg-plum-light md:hidden"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-ink/50 animate-fade-in"
          />
          <div className="absolute right-0 top-0 flex h-full w-[80%] max-w-xs flex-col bg-cream px-6 pb-8 pt-5 shadow-float animate-drawer-in">
            <div className="flex items-center justify-between">
              <Image
                src="/brand/logo-mark.png"
                alt={siteConfig.name}
                width={1168}
                height={771}
                className="h-9 w-auto"
              />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-plum"
                aria-label="Fechar menu"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col" aria-label="Navegação mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-plum/10 py-4 text-lg text-ink/80 transition-colors hover:text-plum"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-plum px-5 py-3.5 text-base font-medium text-white"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
