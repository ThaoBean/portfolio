"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

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
        <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-6'>
          {/* logo */}
          <a
            href='#'
            className='text-sm font-semibold tracking-wide text-white'
          >
            Thao.dev
          </a>

          {/* desktop nav */}
          <nav className='hidden items-center gap-8 md:flex'>
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
                  {item.label}

                  {/* active underline */}
                  {isActive && (
                    <motion.span
                      layoutId='nav-underline'
                      className='absolute -bottom-1 left-0 h-[2px] w-full bg-indigo-400'
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* mobile button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className='inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white md:hidden'
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
              <nav className='flex flex-col gap-4'>
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className='text-gray-300 transition hover:text-white'
                  >
                    {item.label}
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
