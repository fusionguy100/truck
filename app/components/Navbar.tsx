// app/components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  // Simple dark mode toggle (class on html)
  if (typeof document !== "undefined") {
    document.documentElement.classList.toggle("dark", dark);
  }

  return (
    <nav className="fixed z-50 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200/60 dark:border-gray-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-soto.svg"
            width={140}
            height={40}
            alt="Soto Brothers Trucking"
          />
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-300">
            Home
          </Link>
          <Link href="/pricing" className="hover:text-blue-600 dark:hover:text-blue-300">
            Pricing
          </Link>
          <Link href="/jobs" className="hover:text-blue-600 dark:hover:text-blue-300">
            Jobs
          </Link>
          <Link href="/driver-portal" className="hover:text-blue-600 dark:hover:text-blue-300">
            Driver Portal
          </Link>
          <button
            onClick={() => setDark((d) => !d)}
            className="rounded-full bg-gray-200 dark:bg-gray-700 px-3 py-1 text-xs"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
