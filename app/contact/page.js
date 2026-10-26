import Link from "next/link";

export const metadata = {
  title: "Contact Us | Kingdom of English",
  description:
    "Contact Kingdom of English in Marawila — call, WhatsApp, or visit us for IELTS, PTE, Spoken English, and German visa services.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-royal-900 via-royal-500 to-royal-700 text-white py-20">
        <div className="container-custom text-center">
          <span className="inline-block bg-gold-500/20 text-gold-400 border border-gold-500/40 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            We'd Love to Hear From You
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Have questions? Ready to enroll? Reach out and we'll guide you
            toward your goals.
          </p>
        </div>
      </section>

      {/* ===== CONTACT INFO CARDS ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-10">
            {[
              {
                icon: "📍",
                title: "Visit Us",
                lines: ["Main Street", "Marawila, Sri Lanka"],
              },
              {
                icon: "📞",
                title: "Call Us",
                lines: ["+94 76 401 7185"],
                href: "tel:+94764017185",
              },
              {
                icon: "💬",
                title: "WhatsApp",
                lines: ["+94 76 401 7185", "Quick replies"],
                href: "https://wa.me/94764017185",
              },
              {
                icon: "✉️",
                title: "Email",
                lines: ["kingdomofenglish18@gmail.com", "Reply within 24h"],
                href: "mailto:kingdomofenglish18@gmail.com",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-royal-900 mb-3">
                  {item.title}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gold-500 transition"
                  >
                    {item.lines.map((line, j) => (
                      <div key={j}>{line}</div>
                    ))}
                  </a>
                ) : (
                  <div className="text-sm text-gray-600">
                    {item.lines.map((line, j) => (
                      <div key={j}>{line}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DIRECT CONTACT + MAP ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-12">
          
          {/* Direct Contact Side */}
          <div className="flex flex-col justify-center">
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">
              Fastest Way to Reach Us
            </span>
            <h2 className="section-title mt-3 mb-6">Let's Talk About Your Goals</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              To give you the fastest and most personalized service, we handle all inquiries directly via Phone, WhatsApp, or in person. Click one of the buttons below to connect with our team instantly.
            </p>

            <div className="space-y-4">
              <a
                href="https://wa.me/94764017185"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-50 border border-green-200 p-4 rounded-xl hover:bg-green-100 transition group"
              >
                <div className="bg-green-500 text-white p-3 rounded-full text-2xl group-hover:scale-110 transition-transform">
                  💬
                </div>
                <div>
                  <h4 className="font-bold text-royal-900">Chat on WhatsApp</h4>
                  <p className="text-sm text-gray-600">+94 76 401 7185</p>
                </div>
              </a>

              <a
                href="tel:+94764017185"
                className="flex items-center gap-4 bg-blue-50 border border-blue-200 p-4 rounded-xl hover:bg-blue-100 transition group"
              >
                <div className="bg-royal-500 text-white p-3 rounded-full text-2xl group-hover:scale-110 transition-transform">
                  📞
                </div>
                <div>
                  <h4 className="font-bold text-royal-900">Call Us Directly</h4>
                  <p className="text-sm text-gray-600">+94 76 401 7185</p>
                </div>
              </a>

              <a
                href="mailto:kingdomofenglish18@gmail.com"
                className="flex items-center gap-4 bg-gray-50 border border-gray-200 p-4 rounded-xl hover:bg-gray-100 transition group"
              >
                <div className="bg-gray-700 text-white p-3 rounded-full text-2xl group-hover:scale-110 transition-transform">
                  ✉️
                </div>
                <div>
                  <h4 className="font-bold text-royal-900">Send an Email</h4>
                  <p className="text-sm text-gray-600">kingdomofenglish18@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Map & Hours Side */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8 border border-gray-100">
              <iframe
                src="https://maps.google.com/maps?q=7.390536308288574,79.83187103271484&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kingdom of English Location"
              ></iframe>
            </div>

            {/* Hours */}
            <div className="bg-royal-50 p-6 rounded-2xl border border-royal-100">
              <h3 className="font-bold text-royal-900 mb-4 flex items-center gap-2 text-lg">
                🕐 Office Hours
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-royal-100 pb-2">
                  <span className="text-gray-600">Monday – Friday</span>
                  <span className="font-semibold text-royal-900">
                    8:30 AM – 6:30 PM
                  </span>
                </li>
                <li className="flex justify-between border-b border-royal-100 pb-2">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold text-royal-900">
                    8:30 AM – 5:00 PM
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-red-500">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="py-16 bg-gradient-to-r from-royal-900 to-royal-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-200 mb-6">
            Don't wait. Book your free assessment today and take the first step toward your global future.
          </p>
          <a
            href="https://wa.me/94764017185"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-lg inline-block"
          >
            💬 Book Free Assessment on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}