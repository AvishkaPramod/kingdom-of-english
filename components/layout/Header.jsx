"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navLinks, siteInfo } from "@/lib/data";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl"></span>
          <span
            className={`font-display font-bold text-xl transition-colors ${
              scrolled ? "text-royal-900" : "text-white"
            }`}
          >
            Kingdom of English
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors hover:text-gold-500 ${
                scrolled ? "text-royal-900" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${siteInfo.phone}`}
            className="btn-gold !py-2 !px-4 text-sm"
          >
            📞 Call Now
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className={`md:hidden text-3xl ${
            scrolled ? "text-royal-900" : "text-white"
          }`}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}