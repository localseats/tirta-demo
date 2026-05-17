"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Treatment", href: "#treatment" },
  { label: "Reservation", href: "#reservation" },
  { label: "Access", href: "#access" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between"
      animate={{
        backgroundColor: scrolled ? "rgba(13,10,8,0.95)" : "rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" as const }}
    >
      <a
        href="#"
        className="font-cormorant text-[22px] font-light tracking-[0.15em] text-[#C9A96E]"
      >
        Tirta
      </a>

      <div className="hidden md:flex items-center gap-10">
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="font-lato text-[11px] font-light tracking-[0.25em] uppercase text-[#F5F0E8] hover:text-[#C9A96E] transition-colors duration-300"
          >
            {label}
          </a>
        ))}
      </div>

      <a
        href="#reservation"
        className="hidden md:block font-lato text-[11px] font-light tracking-[0.2em] uppercase text-[#C9A96E] border border-[#C9A96E] px-5 py-2 hover:bg-[#C9A96E] hover:text-[#0D0A08] transition-all duration-300"
      >
        RESERVE
      </a>
    </motion.nav>
  );
}
