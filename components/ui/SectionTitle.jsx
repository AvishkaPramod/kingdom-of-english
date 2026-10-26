export default function SectionTitle({ subtitle, title, description }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <span className="inline-block text-gold-600 font-semibold text-sm uppercase tracking-wider mb-3">
        {subtitle}
      </span>
      <h2 className="section-title mb-4">{title}</h2>
      {description && (
        <p className="section-subtitle">{description}</p>
      )}
    </div>
  );
}