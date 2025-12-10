// app/components/Services.tsx
const services = [
  {
    title: "Long-Haul Freight",
    desc: "Consistent, on-time deliveries across the West Coast and select nationwide routes.",
  },
  {
    title: "Regional & Local",
    desc: "Dedicated lanes and local distribution for ports, warehouses, and businesses.",
  },
  {
    title: "Logistics & Scheduling",
    desc: "Route planning, appointment scheduling, and load coordination for shippers.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-gray-200/80 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-6 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
