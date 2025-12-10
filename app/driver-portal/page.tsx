// app/driver-portal/page.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DriverPortalPage() {
  const upcomingLoads = [
    {
      id: "SD-1024",
      date: "2025-11-27",
      route: "San Diego, CA → Phoenix, AZ",
      status: "Assigned",
    },
    {
      id: "SD-1031",
      date: "2025-11-29",
      route: "San Diego, CA → Las Vegas, NV",
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-24 flex-1 bg-gray-50 dark:bg-gray-900">
        <section className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-[2fr,1.2fr] gap-10">
          {/* Login / Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Driver Portal
            </h1>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
              View your upcoming loads, past trips, and messages from dispatch.
              (Demo UI only — hook this into your real backend later.)
            </p>

            <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-8">
              <h2 className="text-lg font-semibold mb-4">Sign In</h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Driver ID or Email
                  </label>
                  <input
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="driver@sotobrotherstrucking.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="••••••••"
                  />
                </div>
                <button className="w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2.5">
                  Sign In
                </button>
              </div>
            </div>
          </div>

          {/* Upcoming Loads */}
          <aside className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 rounded-xl p-6 h-fit">
            <h2 className="text-lg font-semibold mb-4">Upcoming Loads (Demo)</h2>
            <ul className="space-y-4 text-sm">
              {upcomingLoads.map((load) => (
                <li
                  key={load.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2"
                >
                  <p className="font-semibold text-blue-700 dark:text-blue-300">
                    {load.route}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Load #{load.id} • {load.date}
                  </p>
                  <p className="mt-1 text-xs">
                    Status:{" "}
                    <span className="font-semibold">{load.status}</span>
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
