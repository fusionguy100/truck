// app/components/Hero.tsx
export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 h-[80vh] flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-xl">
          Soto Brothers Trucking
        </h1>
        <p className="mt-5 text-lg md:text-xl text-gray-200 max-w-xl">
          Family-owned freight company delivering on-time, every time —
          throughout California and beyond.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg"
          >
            Get a Quote
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/20 hover:bg-white/30 text-white font-semibold border border-white/40 backdrop-blur"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
