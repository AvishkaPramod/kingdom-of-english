import Link from "next/link";
import { navLinks, siteInfo } from "@/lib/data";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-royal-900 text-white pt-16 pb-8">
      <div className="container-custom grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">👑</span>
            <h3 className="font-display font-bold text-xl">
              Kingdom of English
            </h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Marawila's premier institute for IELTS, PTE, Spoken English,
            and German Visa Facilitation. Your journey to success starts here.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-lg mb-4 text-gold-500">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-gold-500 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-gold-500">
                Contact Us
              </h4>
              <ul className="space-y-3 text-gray-300 text-sm mb-6">
                <li>📍 Main Street, Marawila, Sri Lanka</li>
                <li>
                  📞{" "}
                  <a href="tel:+94764017185" className="hover:text-gold-500">
                    +94 76 401 7185
                  </a>
                </li>
                <li>
                  ✉️{" "}
                  <a
                    href="mailto:kingdomofenglish18@gmail.com"
                    className="hover:text-gold-500"
                  >
                    kingdomofenglish18@gmail.com
                  </a>
                </li>
              </ul>

              {/* 👇 ADD THIS FACEBOOK BUTTON HERE 👇 */}
              <a
                href="https://www.facebook.com/share/19vyJSEHwc/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877F2] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <FaFacebook size={20} />
                Follow on Facebook
              </a>
            </div>
      </div>

      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Kingdom of English. All rights reserved.
      </div>
    </footer>
  );
}