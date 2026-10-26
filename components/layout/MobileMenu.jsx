"use client";

import Link from "next/link";
import { navLinks, siteInfo } from "@/lib/data";

export default function MobileMenu({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Slide-in panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl
                    transform transition-transform duration-300 md:hidden ${
                      open ? "translate-x-0" : "translate-x-full"
                    }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <span className="font-display font-bold text-royal-900">
            Menu
          </span>
          <button
            onClick={onClose}
            className="text-2xl text-royal-900"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col p-5 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-lg font-medium text-royal-900 hover:text-gold-500 transition"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={`tel:${siteInfo.phone}`}
            className="btn-gold text-center mt-4"
          >
            📞 Call Now
          </a>

          <a
            href={`https://wa.me/${siteInfo.whatsapp.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-center"
          >
            💬 WhatsApp
          </a>
        </nav>
      </aside>
    </>
  );
}