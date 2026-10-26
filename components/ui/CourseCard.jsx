export default function CourseCard({ course }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
      {/* Image placeholder with gradient */}
      <div className="h-40 bg-gradient-to-br from-royal-500 to-royal-700 flex items-center justify-center">
        <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
          {course.icon}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display font-bold text-xl text-royal-900 mb-1">
          {course.title}
        </h3>
        <p className="text-gold-600 text-sm font-semibold mb-3">
          {course.subtitle}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {course.description}
        </p>
        <span className="inline-block bg-royal-50 text-royal-500 text-xs font-semibold px-3 py-1 rounded-full">
          ⏱ {course.duration}
        </span>
      </div>
    </div>
  );
}