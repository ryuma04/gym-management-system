import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premium Gym Management",
  description: "Advanced Gym Management Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-900 text-slate-50`}>
        {/* Top Navbar */}
        <nav className="glass sticky top-0 z-50 flex items-center justify-between px-8 py-4 mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-500/50">
              G
            </div>
            <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors">
              GymCore Pro
            </Link>
          </div>
          
          <div className="flex space-x-6 overflow-x-auto text-sm font-medium">
            <Link href="/" className="px-3 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-md transition-all">
              Dashboard
            </Link>
            <Link href="/gyms" className="px-3 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-md transition-all">
              Gyms
            </Link>
            <Link href="/members" className="px-3 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-md transition-all">
              Members
            </Link>
            <Link href="/equipment" className="px-3 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-md transition-all">
              Equipment
            </Link>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {children}
        </main>
      </body>
    </html>
  );
}
