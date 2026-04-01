"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/src/i18n/use-locale";
import { useTranslation } from "react-i18next";

const navItems = [
  { label: "common.nav.about", href: "#about" },
  { label: "common.nav.projects", href: "#projects" },
  { label: "common.nav.skills", href: "#skills" },
  { label: "common.nav.experience", href: "#experience" },
  { label: "common.nav.contact", href: "#contact" },
];

export function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { language, setLanguage, supportedLanguages } = useLocale();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (!langRef.current) return;
      if (!langRef.current.contains(target)) setLangOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, []);

  const currentLang = (() => {
    switch (language) {
      case "vi":
        return {
          code: "VI",
          label: t("common.languages.vi"),
          flag: "🇻🇳",
        };
      case "en":
      default:
        return {
          code: "EN",
          label: t("common.languages.en"),
          flag: "🇺🇸",
        };
    }
  })();

  const langMeta = (lng: string) => {
    switch (lng) {
      case "vi":
        return { code: "VI", label: t("common.languages.vi"), flag: "🇻🇳" };
      case "en":
      default:
        return { code: "EN", label: t("common.languages.en"), flag: "🇺🇸" };
    }
  };

  // detect scroll for blur/shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // active section detection
      const sections = navItems.map((item) =>
        document.querySelector(item.href),
      );

      let current = "";
      sections.forEach((section, i) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = navItems[i].href;
        }
      });

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 z-50 w-full transition-all duration-300
          ${
            scrolled
              ? "border-b border-white/10 bg-[#0B0F19]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
              : "bg-transparent"
          }
        `}
      >
        <div className='mx-auto flex h-16 max-w-6xl items-center px-6 md:grid md:grid-cols-[auto_1fr_auto] md:gap-6'>
          {/* logo */}
          <a
            href='#'
            className='text-sm font-semibold tracking-wide text-white'
          >
            Thao.Do
          </a>

          {/* desktop nav (center) */}
          <nav className='hidden items-center justify-center gap-8 md:flex'>
            {navItems.map((item) => {
              const isActive = active === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`
                    relative text-sm transition
                    ${isActive ? "text-white" : "text-gray-400 hover:text-white"}
                  `}
                >
                  {t(item.label)}
                  {isActive && (
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      style={{ transformOrigin: "left" }}
                      className='absolute -bottom-1 left-0 h-[2px] w-full bg-indigo-400'
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* language (right) */}
          <div ref={langRef} className='relative hidden md:block'>
            <button
              type='button'
              onClick={() => setLangOpen((v) => !v)}
              className='inline-flex w-30 items-center gap-2 whitespace-nowrap rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10'
              aria-haspopup='menu'
              aria-expanded={langOpen}
            >
              <span aria-hidden='true'>{currentLang.flag}</span>
              <span className='flex-1 truncate text-left text-sm'>
                {currentLang.label}
              </span>
            </button>

            {langOpen && (
              <div
                role='menu'
                className='absolute right-0 mt-2 w-30 overflow-hidden rounded-xl border border-white/10 bg-[#0B0F19]/95 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.35)]'
              >
                {supportedLanguages.map((lng) => {
                  const meta = langMeta(lng);
                  const isActive = language === lng;

                  return (
                    <button
                      key={lng}
                      type='button'
                      role='menuitem'
                      onClick={() => {
                        setLanguage(lng);
                        setLangOpen(false);
                      }}
                      className={`flex w-full items-center gap-2 px-3 py-2 text-sm transition ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span aria-hidden='true'>{meta.flag}</span>
                      <span className='flex-1 text-left'>{meta.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* mobile button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className='ml-auto inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white md:hidden'
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className='fixed top-16 z-40 w-full border-b border-white/10 bg-[#0B0F19]/95 backdrop-blur-xl md:hidden'
          >
            <div className='mx-auto max-w-6xl px-6 py-4'>
              <div className='mb-4 flex items-center justify-end gap-2'>
                {supportedLanguages.map((lng) => {
                  const meta = langMeta(lng);
                  const isActive = language === lng;

                  return (
                    <button
                      key={lng}
                      type='button'
                      onClick={() => setLanguage(lng)}
                      className={`inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs transition ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                      }`}
                      aria-label={`Switch language to ${meta.label}`}
                    >
                      <span aria-hidden='true'>{meta.flag}</span>
                      <span>{meta.code}</span>
                    </button>
                  );
                })}
              </div>

              <nav className='flex flex-col gap-4'>
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className='text-gray-300 transition hover:text-white'
                  >
                    {t(item.label)}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
