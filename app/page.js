import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CoursesPreview from "@/components/sections/CoursesPreview";
import GermanVisaCTA from "@/components/sections/GermanVisaCTA";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <CoursesPreview />
      <GermanVisaCTA />
      <Testimonials />
    </>
  );
}