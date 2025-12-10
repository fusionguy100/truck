// app/components/ContactSection.tsx
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">Get a Freight Quote</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Tell us about your lanes, freight type, and schedule. We’ll respond
            with a custom quote.
          </p>
          <p className="text-sm mb-1">
            <span className="font-semibold">Phone:</span> (760) 555-1234
          </p>
          <p className="text-sm mb-1">
            <span className="font-semibold">Email:</span>{" "}
            info@sotobrotherstrucking.com
          </p>
          <p className="text-sm">
            <span className="font-semibold">Based in:</span> San Diego, CA
          </p>
        </div>

        <form className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold mb-1">Name</label>
            <input
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">
              Origin / Destination
            </label>
            <input
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., San Diego, CA → Phoenix, AZ"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Message</label>
            <textarea
              rows={4}
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Freight type, schedule, other details..."
            />
          </div>
          <button
            type="button"
            className="w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
