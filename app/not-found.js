import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 pt-24">
      <div className="text-center px-4">
        <h1 className="font-display text-7xl font-bold text-royal-900 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-royal-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link href="/" className="btn-primary">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}