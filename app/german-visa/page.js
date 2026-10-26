import Link from "next/link";
import DE from 'country-flag-icons/react/3x2/DE';

export const metadata = {
  title: "German Visa Facilitation | Kingdom of English",
  description:
    "Complete German visa facilitation services in Marawila — German language classes (A1–B1), document verification, visa application assistance, and interview preparation.",
};

const services = [
  {
    icon: "🗣️",
    title: "German Language Classes (A1–B1)",
    description:
      "Essential language training for Family Reunification, Job Seeker, or Student Visas. Complete preparation for Goethe-Institut exams.",
    details: [
      "A1, A2, and B1 level courses",
      "Goethe-Institut exam preparation",
      "Conversation practice with native patterns",
      "Listening, speaking, reading, writing",
    ],
  },
  {
    icon: "📑",
    title: "Document Checklist & Verification",
    description:
      "We help you organize every piece of paperwork correctly. Guidance on translations, apostilling, and certifications.",
    details: [
      "Complete document checklist",
      "Translation service guidance",
      "Apostille & certification support",
      "Verification before submission",
    ],
  },
  {
    icon: "📝",
    title: "Visa Application Assistance",
    description:
      "Step-by-step guidance through the German visa application process. We help you fill forms correctly and prepare every required document.",
    details: [
      "Application form filling guidance",
      "Letter of Motivation drafting",
      "Cover letter preparation",
      "Appointment booking support",
    ],
  },
  {
    icon: "🎤",
    title: "Interview Preparation",
    description:
      "Mock interviews that simulate the real German Embassy interview. Build confidence and know exactly what to expect.",
    details: [
      "Realistic mock interviews",
      "Common question preparation",
      "Body language & etiquette tips",
      "Confidence building sessions",
    ],
  },
  {
    icon: "✈️",
    title: "Post-Landing Support",
    description:
      "We don't disappear after your visa is approved. Get practical guidance for your first weeks in Germany.",
    details: [
      "Accommodation guidance",
      "Transport & city navigation",
      "Cultural orientation",
      "Emergency contact support",
    ],
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family & Student Visa Support",
    description:
      "Specialized assistance for families reuniting in Germany and students pursuing education at German universities.",
    details: [
      "Family reunification guidance",
      "Student visa documentation",
      "University application support",
      "Blocked account setup help",
    ],
  },
];

const process = [
  { step: "01", title: "Free Consultation", desc: "Discuss your goals and check eligibility for German visa types." },
  { step: "02", title: "Language Training", desc: "Enroll in A1–B1 German classes and build required language skills." },
  { step: "03", title: "Document Preparation", desc: "We help you gather, translate, and verify all required documents." },
  { step: "04", title: "Application Submission", desc: "Fill forms, draft motivation letters, and book your appointment." },
  { step: "05", title: "Interview Prep", desc: "Mock interviews to prepare you for the embassy interview." },
  { step: "06", title: "Visa Approved! 🎉", desc: "Receive your visa and get ready for your German journey." },
];

export default function GermanVisaPage() {
  return (
    <div className="pt-24">
      {/* ===== HERO ===== */}
      <section className="relative bg-gradient-to-br from-royal-900 via-royal-700 to-royal-900 text-white py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />

        <div className="container-custom relative text-center">
          <div className="flex justify-center mb-6">
            <DE className="w-24 h-auto rounded-md shadow-lg border border-white/20" title="Germany" />
          </div>
          <span className="inline-block bg-gold-500/20 text-gold-400 border border-gold-500/40 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            German Visa Facilitation
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Gateway to <span className="text-gold-500">Germany</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            Comprehensive language training and visa support services. From A1
            German classes to complete documentation — we simplify the journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-lg">
              📅 Book Consultation
            </Link>
            <a
              href="#services"
              className="btn-outline !text-white !border-white hover:!bg-white hover:!text-royal-900"
            >
              View Services ↓
            </a>
          </div>
        </div>
      </section>

      {/* ===== WHY GERMANY ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">
              Why Germany?
            </span>
            <h2 className="section-title mt-3">
              A Land of Opportunity Awaits
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎓", title: "Free Education", desc: "World-class universities with low or no tuition fees." },
              { icon: "💼", title: "Strong Economy", desc: "Europe's largest economy with abundant job opportunities." },
              { icon: "🏥", title: "Great Healthcare", desc: "World-class public healthcare for residents." },
              { icon: "🌍", title: "Path to EU", desc: "German residency opens doors across the European Union." },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-royal-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="section-title mt-3">
              Complete German Visa Services
            </h2>
            <p className="section-subtitle mt-4">
              Everything you need — from language training to landing in
              Germany.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-royal-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 border-t pt-4">
                  {service.details.map((detail, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-xs text-gray-600"
                    >
                      <span className="text-gold-500 font-bold">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="section-title mt-3">Your 6-Step Journey</h2>
            <p className="section-subtitle mt-4">
              A clear, structured process from consultation to visa approval.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, i) => (
              <div
                key={i}
                className="relative bg-gradient-to-br from-royal-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition"
              >
                <div className="text-5xl font-bold text-gold-500/30 absolute top-4 right-6">
                  {item.step}
                </div>
                <div className="relative">
                  <h3 className="text-lg font-bold text-royal-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REQUIREMENTS ===== */}
      <section className="py-20 bg-royal-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
              Important
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Our Role & Responsibility
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Kingdom of English is a language training and visa facilitation
              service — not a legal firm. We provide guidance, documentation
              support, and language training to help you prepare a strong
              application. Final visa decisions rest with the German Embassy.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our meticulous approach reduces the risk of rejection and ensures
              a smooth, stress-free process for you and your family.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600 text-royal-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your German Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation today and let's discuss your German visa
            goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-royal-900 text-white font-semibold px-8 py-4 rounded-lg hover:bg-royal-700 transition"
            >
              📞 Book Free Consultation
            </Link>
            <a
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-royal-900 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}