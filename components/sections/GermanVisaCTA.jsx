import Link from "next/link";
import DE from "country-flag-icons/react/3x2/DE";

export default function GermanVisaCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-royal-900 to-royal-700 text-white">
      <div className="container-custom text-center">
        <div className="flex justify-center mb-6">
          <DE className="w-16 h-auto rounded-md shadow-lg border border-white/20" title="Germany" />
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Dreaming of <span className="text-gold-500">Germany?</span>
        </h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
          From A1 German classes to complete visa documentation — we guide
          you every step of the way. Start your German journey today.
        </p>
        <Link href="/german-visa" className="btn-gold text-lg">
          Explore German Visa Services →
        </Link>
      </div>
    </section>
  );
}