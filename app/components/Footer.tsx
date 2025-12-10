// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-blue-700 dark:bg-blue-900 text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>© {new Date().getFullYear()} Soto Brothers Trucking. All rights reserved.</p>
        <p className="opacity-80">
          Reliable • Family-Owned • West Coast & Nationwide
        </p>
      </div>
    </footer>
  );
}
