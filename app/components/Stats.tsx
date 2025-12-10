// app/components/Stats.tsx
const stats = [
  { label: "Loads Delivered", value: "25,000+" },
  { label: "On-Time Rate", value: "98%" },
  { label: "Years Experience", value: "15+" },
];

export default function Stats() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-3xl md:text-4xl font-extrabold">{s.value}</p>
            <p className="mt-1 text-sm uppercase tracking-wide opacity-80">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
