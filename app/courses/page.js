import Link from "next/link";

export const metadata = {
  title: "Courses | Kingdom of English",
  description:
    "IELTS, PTE, Spoken English, and School English courses in Marawila. Expert instructors, small classes, high success rates.",
};

const courses = [
  {
    id: "ielts",
    icon: "📘",
    title: "IELTS",
    subtitle: "Academic & General Training",
    description:
      "The gold standard for migration to the UK, Australia, Canada, and New Zealand. Our IELTS program covers all four skills with intensive practice and mock exams.",
    duration: "3–4 Months",
    level: "All Levels",
    highlights: [
      "Listening, Reading, Writing & Speaking modules",
      "Weekly full mock exams with detailed feedback",
      "Individual speaking practice sessions",
      "Writing task 1 & 2 templates that score high",
      "Small class sizes (max 10 students)",
    ],
  },
  {
    id: "pte",
    icon: "💻",
    title: "PTE Academic",
    subtitle: "Computer-Based English Test",
    description:
      "The fast and computer-based English test for study and migration. Master the Pearson algorithm, timing strategies, and proven templates to score high.",
    duration: "2–3 Months",
    level: "Intermediate+",
    highlights: [
      "Master the Pearson scoring algorithm",
      "Time management for 20 task types",
      "High-scoring answer templates",
      "Practice on real PTE software",
      "Weekly mock tests with analytics",
    ],
  },
  {
    id: "spoken",
    icon: "🗣️",
    title: "Spoken English",
    subtitle: "Beginner to Advanced",
    description:
      "Speak fluently and confidently. Perfect for students, employees, and business owners who want real-world fluency for career and social success.",
    duration: "3 Months",
    level: "All Levels",
    highlights: [
      "Grammar & vocabulary building",
      "Public speaking practice",
      "Accent reduction training",
      "Real-life conversation scenarios",
      "Interview & presentation skills",
    ],
  },
  {
    id: "school",
    icon: "🎓",
    title: "School English",
    subtitle: "Grade 1 – 13",
    description:
      "Curriculum support for local and international school syllabuses. Guaranteeing strong results in term tests and O/L, A/L exams with focused revision.",
    duration: "Ongoing",
    level: "Grades 1–13",
    highlights: [
      "Grammar & essay writing",
      "Literature & comprehension support",
      "Exam-focused revision",
      "Individual attention for weak areas",
      "Term test preparation",
    ],
  },
];

export default function CoursesPage() {
  return (
    <div className="pt-24">
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-royal-900 via-royal-500 to-royal-700 text-white py-20">
        <div className="container-custom text-center">
          <span className="inline-block bg-gold-500/20 text-gold-400 border border-gold-500/40 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Our Programs
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Master Your Language Goals
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Tailored courses for every age and objective — from school English
            to international exam preparation.
          </p>
        </div>
      </section>

      {/* ===== COURSES LIST ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {courses.map((course, index) => (
              <div
                key={course.id}
                id={course.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content side */}
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl">{course.icon}</span>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-royal-900">
                        {course.title}
                      </h2>
                      <p className="text-gold-600 font-semibold">
                        {course.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="bg-royal-50 text-royal-500 text-sm font-semibold px-4 py-2 rounded-full">
                      ⏱ {course.duration}
                    </span>
                    <span className="bg-gold-500/10 text-gold-600 text-sm font-semibold px-4 py-2 rounded-full">
                      📊 {course.level}
                    </span>
                  </div>

                  <Link href="/contact" className="btn-primary">
                    Enroll in {course.title} →
                  </Link>
                </div>

                {/* Highlights side */}
                <div
                  className={`bg-gradient-to-br from-royal-50 to-gray-50 p-8 rounded-2xl ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <h3 className="font-bold text-royal-900 mb-4 text-lg">
                    What You'll Learn:
                  </h3>
                  <ul className="space-y-3">
                    {course.highlights.map((point, i) => (
                      <li key={i} className="flex gap-3 text-gray-700">
                        <span className="text-gold-500 font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-gradient-to-r from-royal-900 to-royal-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Sure Which Course Is Right for You?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a free assessment and we'll recommend the perfect course for
            your goals.
          </p>
          <Link href="/contact" className="btn-gold text-lg">
            🎯 Book Free Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}