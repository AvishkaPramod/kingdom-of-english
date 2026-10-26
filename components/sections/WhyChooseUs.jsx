import { whyChooseUs } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";
import DE from 'country-flag-icons/react/3x2/DE';

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          subtitle="Why Students Trust Us"
          title="Why Choose Kingdom of English?"
          description="We combine expert teaching with personalized attention to help every student reach their goal."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {whyChooseUs.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 h-12 flex items-center">
                {item.icon === "DE-icon" ? (
                   <DE className="w-10 h-auto rounded-sm shadow-sm border border-gray-200" title="Germany" />
                ) : (
                  item.icon
                )}
              </div>
              <h3 className="font-display font-bold text-xl text-royal-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}