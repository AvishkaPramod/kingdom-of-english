import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa"; 

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Kingdom of English | IELTS, PTE & German Visa – Marawila",
  description:
    "Marawila's premier institute for IELTS, PTE, Spoken English, School English, and German Visa Facilitation.",
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "German Visa", href: "/german-visa" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {/* HEADER */}
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-4">
          <div className="container-custom flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <Image 
                src="/logo.jpg" 
                alt="Kingdom of English Logo" 
                width={40} 
                height={40} 
                className="rounded-md object-cover shadow-sm group-hover:scale-105 transition-transform duration-300" 
              />
              <span className="font-bold text-xl text-royal-900">
                Kingdom of English
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium text-royal-900 hover:text-gold-500 transition"
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:+94764017185" className="btn-gold !py-2 !px-4 text-sm">
                📞 Call Now
              </a>
            </nav>

            <div className="md:hidden flex gap-3">
              <a
                href="https://wa.me/94764017185"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl"
              >
                💬
              </a>
              <a href="tel:+94764017185" className="text-2xl">
                📞
              </a>
            </div>
          </div>
        </header>

        <main>{children}</main>

        {/* FOOTER */}
        <footer className="bg-royal-900 text-white pt-16 pb-8">
          <div className="container-custom grid md:grid-cols-3 gap-10">
            <div>
                            <div className="flex items-center gap-3 mb-4">
                <div className="bg-white p-1 rounded-md">
                  <Image 
                    src="/logo.jpg" 
                    alt="Kingdom of English Logo" 
                    width={35} 
                    height={35} 
                    className="rounded-sm object-cover" 
                  />
                </div>
                <h3 className="font-bold text-xl">Kingdom of English</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Marawila's premier institute for IELTS, PTE, Spoken English,
                and German Visa Facilitation. Your journey to success starts
                here.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-gold-500">
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

            <div>
              <h4 className="font-bold text-lg mb-4 text-gold-500">
                Contact Us
              </h4>
              <ul className="space-y-3 text-gray-300 text-sm">
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
                <li>
                  <a
                      href="https://www.facebook.com/share/19vyJSEHwc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#1877F2] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <FaFacebook size={20} />
                      Follow on Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Kingdom of English. All rights
            reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}