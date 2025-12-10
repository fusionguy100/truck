// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Soto Brothers Trucking",
  description: "Family-owned trucking company providing reliable freight services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
        {children}
      </body>
    </html>
  );
}
