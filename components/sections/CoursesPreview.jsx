import Link from "next/link";
import { courses } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";
import CourseCard from "@/components/ui/CourseCard";

export default function CoursesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Programs"
          title="Master Your Language Goals"
          description="Tailored programs for every age and objective — from school English to international exams."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/courses" className="btn-primary">
            View All Courses →
          </Link>
        </div>
      </div>
    </section>
  );
}