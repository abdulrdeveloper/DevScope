"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800 sticky top-0 bg-gray-950 z-10">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="DevScope Logo" width={40} height={40} />
          <h1 className="text-xl font-bold text-blue-400">DevScope</h1>
        </div>
        <div className="flex gap-3">
          <a href="https://github.com/abdulrdeveloper/DevScope" target="_blank" className="px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 text-sm">Star on GitHub</a>
          <Link href="/login" className="px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 text-sm">Login</Link>
          <Link href="/register" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-sm">Sign Up</Link>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <span className="text-sm text-blue-400 border border-blue-800 px-4 py-1 rounded-full mb-6">Developer Dashboard</span>
        <h2 className="text-6xl font-bold mb-6 leading-tight">Everything a dev needs<br />in one place</h2>
        <p className="text-gray-400 text-xl max-w-xl mb-10">Explore dev tools, check live weather, and view GitHub stats — all from a single dashboard.</p>
        <div className="flex gap-4">
          <Link href="/register" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold">Get Started →</Link>
          <Link href="/login" className="px-6 py-3 border border-gray-700 hover:bg-gray-800 rounded-xl text-lg">Login</Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 px-8 py-20 border-t border-gray-800">
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-4">Dev Tools Explorer</h3>
          <p className="text-gray-400 text-lg">Discover the best developer tools, libraries, and resources. Browse curated tools and find what fits your stack.</p>
        </div>
        <div className="flex-1 flex justify-center">
          <svg width="280" height="200" viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="280" height="200" rx="12" fill="#1e293b"/>
            <rect x="20" y="20" width="240" height="30" rx="6" fill="#334155"/>
            <rect x="30" y="30" width="80" height="10" rx="3" fill="#60a5fa"/>
            <rect x="20" y="65" width="110" height="50" rx="6" fill="#334155"/>
            <rect x="30" y="75" width="50" height="8" rx="3" fill="#94a3b8"/>
            <rect x="30" y="90" width="80" height="6" rx="3" fill="#475569"/>
            <rect x="30" y="102" width="60" height="6" rx="3" fill="#475569"/>
            <rect x="145" y="65" width="115" height="50" rx="6" fill="#334155"/>
            <rect x="155" y="75" width="50" height="8" rx="3" fill="#94a3b8"/>
            <rect x="155" y="90" width="80" height="6" rx="3" fill="#475569"/>
            <rect x="155" y="102" width="60" height="6" rx="3" fill="#475569"/>
            <rect x="20" y="130" width="110" height="50" rx="6" fill="#334155"/>
            <rect x="30" y="140" width="50" height="8" rx="3" fill="#94a3b8"/>
            <rect x="30" y="155" width="80" height="6" rx="3" fill="#475569"/>
            <rect x="30" y="167" width="60" height="6" rx="3" fill="#475569"/>
            <rect x="145" y="130" width="115" height="50" rx="6" fill="#334155"/>
            <rect x="155" y="140" width="50" height="8" rx="3" fill="#94a3b8"/>
            <rect x="155" y="155" width="80" height="6" rx="3" fill="#475569"/>
            <rect x="155" y="167" width="60" height="6" rx="3" fill="#475569"/>
          </svg>
        </div>
      </section>

      <section className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16 px-8 py-20 border-t border-gray-800">
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-4">Live Weather App</h3>
          <p className="text-gray-400 text-lg">Enter any city and get real-time weather data. Temperature, humidity, wind speed — all in one clean view.</p>
        </div>
        <div className="flex-1 flex justify-center">
          <svg width="280" height="200" viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="280" height="200" rx="12" fill="#1e293b"/>
            <circle cx="140" cy="75" r="40" fill="#334155"/>
            <circle cx="140" cy="75" r="28" fill="#fbbf24" opacity="0.9"/>
            <rect x="60" y="120" width="160" height="16" rx="8" fill="#334155"/>
            <rect x="80" y="148" width="120" height="12" rx="6" fill="#334155"/>
            <rect x="20" y="30" width="60" height="10" rx="3" fill="#334155"/>
            <rect x="200" y="30" width="60" height="10" rx="3" fill="#334155"/>
            <rect x="30" y="165" width="60" height="8" rx="3" fill="#334155"/>
            <rect x="110" y="165" width="60" height="8" rx="3" fill="#334155"/>
            <rect x="190" y="165" width="60" height="8" rx="3" fill="#334155"/>
          </svg>
        </div>
      </section>

      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 px-8 py-20 border-t border-gray-800">
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-4">GitHub Stats</h3>
          <p className="text-gray-400 text-lg">Enter any GitHub username and instantly view public repos, followers, following, and full profile details.</p>
        </div>
        <div className="flex-1 flex justify-center">
          <svg width="280" height="200" viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="280" height="200" rx="12" fill="#1e293b"/>
            <circle cx="70" cy="70" r="35" fill="#334155"/>
            <circle cx="70" cy="60" r="18" fill="#475569"/>
            <path d="M30 110 Q70 90 110 110" fill="#475569"/>
            <rect x="125" y="40" width="130" height="10" rx="3" fill="#60a5fa"/>
            <rect x="125" y="60" width="90" height="8" rx="3" fill="#475569"/>
            <rect x="125" y="78" width="110" height="8" rx="3" fill="#475569"/>
            <rect x="20" y="130" width="70" height="40" rx="6" fill="#334155"/>
            <rect x="30" y="140" width="40" height="8" rx="3" fill="#94a3b8"/>
            <rect x="30" y="154" width="30" height="8" rx="3" fill="#60a5fa"/>
            <rect x="105" y="130" width="70" height="40" rx="6" fill="#334155"/>
            <rect x="115" y="140" width="40" height="8" rx="3" fill="#94a3b8"/>
            <rect x="115" y="154" width="30" height="8" rx="3" fill="#60a5fa"/>
            <rect x="190" y="130" width="70" height="40" rx="6" fill="#334155"/>
            <rect x="200" y="140" width="40" height="8" rx="3" fill="#94a3b8"/>
            <rect x="200" y="154" width="30" height="8" rx="3" fill="#60a5fa"/>
          </svg>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        <p>Built by <a href="https://abdulrdeveloper.me" className="text-blue-400 hover:underline" target="_blank">Abdul Rahman</a> · DevScope © 2026</p>
      </footer>

    </div>
  );
}