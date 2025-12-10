// app/jobs/page.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const positions = [
  {
    title: "CDL Class A Driver – Regional (West Coast)",
    type: "Full-time",
    location: "Based out of San Diego, CA",
    bullets: [
      "2+ years CDL Class A experience preferred",
      "Clean driving record and strong safety focus",
      "Home most weekends, predictable regional routes",
    ],
  },
  {
    title: "Dispatcher / Load Planner",
    type: "Full-time",
    location: "Hybrid – San Diego, CA",
    bullets: [
      "Experience coordinating trucks, drivers, and appointments",
      "Familiar with ELDs and routing tools",
      "Strong communication with shippers & receivers",
    ],
  },
];

export default function JobsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-24 flex-1 bg-gray-50 dark:bg-gray-900">
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Join the Team</h1>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
            We’re proud to be a family-owned company that treats drivers and
            staff with respect. If you’re reliable, safety-focused, and
            professional, we’d love to hear from you.
          </p>

          <div className="space-y-6">
            {positions.map((p) => (
              <div
                key={p.title}
                className="rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 p-6"
              >
                <h2 className="text-xl font-semibold mb-1">{p.title}</h2>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                  {p.type} • {p.location}
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 mb-4 space-y-1">
                  {p.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
                <button className="text-sm font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
