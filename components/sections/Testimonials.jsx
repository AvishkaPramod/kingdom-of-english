import { testimonials } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          subtitle="Student Success Stories"
          title="What Our Students Say"
          description="Real stories from real students who achieved their goals with us."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <div className="text-gold-500 text-2xl mb-3">★★★★★</div>
              <p className="text-gray-700 italic leading-relaxed mb-5">
                "{t.message}"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-royal-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}