// app/pricing/page.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const tiers = [
  {
    name: "Local / Same-Day",
    price: "Custom per mile",
    desc: "Short-haul, local city and nearby region.",
    bullets: [
      "Same-day pick-up (when available)",
      "Ideal for 1–250 mile runs",
      "Flexible appointment windows",
    ],
  },
  {
    name: "Regional Lanes",
    price: "Contract rates",
    desc: "Dedicated routes across CA, AZ, NV.",
    bullets: [
      "Consistent capacity",
      "Multi-stop options",
      "Detention & layover terms",
    ],
  },
  {
    name: "Long-Haul Freight",
    price: "Lane-based pricing",
    desc: "West Coast and select nationwide lanes.",
    bullets: [
      "Full truckload (FTL)",
      "Drop & hook options",
      "Priority tracking and updates",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-24 flex-1 bg-gray-50 dark:bg-gray-900">
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h1>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-10 max-w-2xl">
            Every lane and load is different, so we price based on distance,
            equipment, freight type, and schedule. These ranges give a feel for
            how we structure contracts.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((t) => (
              <div
                key={t.name}
                className="rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold mb-1">{t.name}</h2>
                <p className="text-blue-600 dark:text-blue-300 font-bold mb-2">
                  {t.price}
                </p>
                <p className="text-xs text-gray-700 dark:text-gray-300 mb-4">
                  {t.desc}
                </p>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  {t.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
