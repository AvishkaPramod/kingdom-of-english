import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-royal-900 via-royal-500 to-royal-700 text-white overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-royal-500/30 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 text-center py-24">
        <span className="inline-block bg-gold-500/20 text-gold-400 border border-gold-500/40 px-4 py-1 rounded-full text-sm font-semibold mb-6">
          ✨ Marawila Premier Language Institute
        </span>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Unlock Your Global Future
          with the <span className="text-gold-500">Kingdom of English</span>{" "}
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
          IELTS • PTE • Spoken English • School English • German Visa
          Facilitation. Your journey to success starts here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-gold text-lg">
            🎯 Book a Free Assessment
          </Link>
          <Link href="/courses" className="btn-outline !text-white !border-white hover:!bg-white hover:!text-royal-900">
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  );
}