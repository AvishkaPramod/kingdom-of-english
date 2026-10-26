import Link from "next/link";
import Image from "next/image";
import DE from 'country-flag-icons/react/3x2/DE';
import { FaFacebook } from "react-icons/fa";

export const metadata = {
  title: "About Us | Kingdom of English",
  description:
    "Learn about Kingdom of English — Marawila's premier language institute for IELTS, PTE, Spoken English, and German Visa Facilitation.",
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-royal-900 via-royal-500 to-royal-700 text-white py-20">
        <div className="container-custom text-center">
          <span className="inline-block bg-gold-500/20 text-gold-400 border border-gold-500/40 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            About Kingdom of English
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bridging Sri Lanka to the World
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Since our founding, we've been dedicated to empowering students,
            professionals, and migrants with the language skills to succeed
            globally.
          </p>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="section-title mt-3 mb-6">
              A Launchpad for Your International Future
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kingdom of English was founded with a singular vision: to bridge
              the gap between Sri Lanka and the world. We understand the
              aspirations of our community in Marawila and beyond. We aren't
              just a tuition class — we are a launchpad for your international
              career and education.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you're preparing for IELTS to migrate to Australia,
              learning German for a family reunification visa, or simply
              mastering spoken English for your career, our experienced
              instructors guide you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-royal-50 p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold text-royal-900 mb-2">500+</div>
              <div className="text-sm text-gray-600">Students Taught</div>
            </div>
            <div className="bg-gold-500/10 p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold text-royal-900 mb-2">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="bg-gold-500/10 p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold text-royal-900 mb-2">3+</div>
              <div className="text-sm text-gray-600">Expert Teachers</div>
            </div>
            <div className="bg-royal-50 p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold text-royal-900 mb-2">5</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">
              What Drives Us
            </span>
            <h2 className="section-title mt-3">Our Mission & Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-royal-500">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-royal-900 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide world-class English language training and migration
                support that is accessible, affordable, and effective for every
                student in Sri Lanka.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-gold-500">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-royal-900 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted language and migration consultancy in the
                North Western Province, known for integrity and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY TRUST US ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">
              Our Strengths
            </span>
            <h2 className="section-title mt-3">Why Students Trust Us</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "👨‍🏫",
                title: "Expert Instructors",
                desc: "Passionate educators with years of experience in international exam preparation.",
              },
              {
                icon: "🎯",
                title: "Personalized Learning",
                desc: "Small class sizes and one-on-one attention to ensure rapid progress.",
              },
              {
                icon: "DE-icon",
                title: "German Visa Experts",
                desc: "End-to-end guidance for your German dream — from language to documentation.",
              },
              {
                icon: "🏆",
                title: "Proven Track Record",
                desc: "High success rates in IELTS, PTE, and German visa approvals.",
              },
              {
                icon: "📍",
                title: "Central Location",
                desc: "Easy access from anywhere in Marawila and Puttalam district.",
              },
              {
                icon: "💰",
                title: "Affordable Fees",
                desc: "World-class training at prices that work for Sri Lankan families.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                                <div className="text-4xl mb-4 h-12 flex items-center">
                  {item.icon === "DE-icon" ? (
                    <DE className="w-10 h-auto rounded-sm shadow-sm border border-gray-200" title="Germany" />
                  ) : (
                    item.icon
                  )}
                </div>
                <h3 className="text-xl font-bold text-royal-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* ===== FACEBOOK ===== */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-bold text-royal-900 mb-4">
            Stay Connected With Us
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Follow our Facebook page for the latest updates, student success stories, and class schedules.
          </p>
          <a
            href="https://www.facebook.com/share/19vyJSEHwc/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1877F2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            <FaFacebook size={24} />
            Follow us on Facebook
          </a>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-gradient-to-r from-royal-900 to-royal-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful students who achieved their goals with
            us. Book your free assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-lg">
              🎯 Book Free Assessment
            </Link>
            <Link
              href="/courses"
              className="btn-outline !text-white !border-white hover:!bg-white hover:!text-royal-900"
            >
              View Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}