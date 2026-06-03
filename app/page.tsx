"use client";

import Link from "next/link";
import { ArrowRight, Copyright, Sparkles, Terminal, CloudSun, Code, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-amber-500/30">

      <nav className="flex items-center justify-between px-4 sm:px-6 py-6 md:px-12 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center text-black font-bold">
            <Terminal size={20} />
          </div>
          <h1 className="text-xl font-bold tracking-tight">DevScope</h1>
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link href="/login" className="text-sm font-medium text-gray-400 hover:text-white transition-colors hidden sm:block">Login</Link>
          <Link href="/register" className="px-4 py-2 sm:px-5 sm:py-2.5 bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold rounded flex items-center gap-2 transition-transform hover:-translate-y-0.5">
            <span className="hidden sm:inline">Get Started</span>
            <span className="sm:hidden">Start</span>
            <ArrowRight size={16} strokeWidth={3} />
          </Link>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center pt-16 sm:pt-20 pb-20 sm:pb-24 px-4 sm:px-6 text-center">
        <div className="flex items-center gap-2 text-amber-500 border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 sm:px-4 rounded-full mb-6 sm:mb-8 text-[10px] sm:text-xs font-semibold uppercase tracking-wide">
          <Sparkles size={14} className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Professional Developer Dashboard
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 tracking-tight max-w-4xl leading-[1.1] md:leading-[1.05]">
          Everything You Need in <br className="hidden sm:block" />
          <span className="text-amber-500">One Developer Place</span>
        </h2>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-10 leading-relaxed font-light px-2 sm:px-0">
          150+ curated dev tools. Real-time global weather. Instant GitHub analytics. Access everything from a single, deeply integrated dashboard without bloat.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a href="https://github.com/abdulrdeveloper/DevScope" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-3.5 bg-[#111] hover:bg-[#1a1a1a] border border-[#333] hover:border-amber-500/50 text-white font-bold rounded-md flex justify-center items-center gap-2 text-sm sm:text-base transition-all hover:-translate-y-1">
            <Code size={18} strokeWidth={2.5} className="w-5 h-5" /> Star on GitHub
          </a>
          <Link href="/register" className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold rounded-md flex justify-center items-center gap-2 text-sm sm:text-base transition-all hover:-translate-y-1 shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_-10px_rgba(245,158,11,0.5)]">
            <Terminal size={18} strokeWidth={2.5} className="w-5 h-5" /> Start Exploring — It's Free
          </Link>
        </div>
      </main>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-24 sm:mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {[
            { label: "DEV TOOLS", value: "150+" },
            { label: "WEATHER", value: "Live" },
            { label: "GITHUB PROFILES", value: "Deep" },
            { label: "RENDER SPEED", value: "<1s" },
          ].map((stat, index) => (
            <div key={index} className="bg-[#111] border border-[#222] rounded-xl p-6 flex flex-col justify-center items-center text-center hover:border-amber-500/30 transition-colors">
              <span className="text-3xl font-extrabold text-amber-500 mb-2">{stat.value}</span>
              <span className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24 sm:mb-32 flex flex-col gap-24 md:gap-32 pb-10">

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222] bg-[#111] text-xs font-bold text-gray-400 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
              // feature 01
            </div>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] uppercase">
              <span className="text-white">ACCESS OVER </span>
              <span className="text-amber-500">200+ DEVELOPER TOOLS</span>
              <span className="text-white"> AT YOUR FINGERTIPS.</span>
            </h3>
            <p className="text-gray-400 text-base md:text-xl leading-relaxed font-light">
              Discover the absolute best developer tools, libraries, and resources across multiple distinct categories, from code editors to cloud infrastructure, carefully maintained.
            </p>
            <ul className="space-y-4 pt-2">
              {[
                "Organized and deeply categorized tools",
                "Pre-vetted, highly rated resources",
                "Instant search and filter options",
                "Direct links to official documentation"
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80"></span>
                  <span className="text-gray-300 text-sm md:text-base font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 w-full relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-amber-500/20 to-transparent rounded-3xl blur-xl opacity-100 transition duration-700"></div>
            <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-2xl h-90 md:h-100 flex items-center justify-center">
              <div className="absolute top-0 w-full h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent"></div>

              <div className="w-full max-w-sm space-y-4">
                <div className="flex items-center gap-3 bg-[#111] border border-[#333] rounded-lg p-3">
                  <Terminal className="text-amber-500" size={18} />
                  <div className="h-3 rounded-full bg-[#222] w-1/3"></div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#111] border border-[#222] hover:border-amber-500/50 rounded-lg p-4 h-24 flex flex-col justify-between transition-all duration-300 animate-pulse hover:animate-none hover:scale-102">
                    <Code size={18} className="text-amber-500/50 hover:text-amber-500 transition-colors" />
                    <div className="space-y-2">
                      <div className="h-2 rounded-full bg-[#333] w-1/2"></div>
                      <div className="h-2 rounded-full bg-[#222] w-3/4"></div>
                    </div>
                  </div>
                  <div className="bg-[#111] border border-amber-500/50 rounded-lg p-4 h-24 flex flex-col justify-between transition-colors delay-75">
                    <Terminal size={18} className="text-amber-500 transition-colors" />
                    <div className="space-y-2">
                      <div className="h-2 rounded-full bg-[#333] w-2/3"></div>
                      <div className="h-2 rounded-full bg-[#222] w-1/2"></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center my-2">
                  <div className="w-0.5 h-8 md:h-12 bg-linear-to-b from-[#333] to-amber-500/50 relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,1)]"></div>
                  </div>
                </div>
                <div className="bg-[#111] border border-amber-500/30 rounded-lg p-3 flex items-center justify-between">
                  <span className="text-xs text-amber-500 font-mono tracking-widest">200 OK • application/json</span>
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#333]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#333]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#333]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222] bg-[#111] text-xs font-bold text-gray-400 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
              // feature 02
            </div>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] uppercase">
              <span className="text-amber-500">REAL-TIME</span>
              <span className="text-white"> GLOBAL WEATHER TRACKING.</span>
            </h3>
            <p className="text-gray-400 text-base md:text-xl leading-relaxed font-light">
              Get comprehensive and precise atmospheric conditions instantly. Monitor global humidity, wind speeds, and temperature logs fully integrated into your dashboard.
            </p>
            <ul className="space-y-4 pt-2">
              {[
                "Instant global geographical data",
                "Live temperature & humidity metrics",
                "Fluid animated weather layouts",
                "Zero-latency API fetching"
              ].map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80"></span>
                  <span className="text-gray-300 text-sm md:text-base font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 w-full relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-amber-500/20 to-transparent rounded-3xl blur-xl opacity-100 transition duration-700"></div>
            <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-2xl h-90 md:h-100 flex items-center justify-center">
              <div className="absolute top-0 w-full h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent"></div>

              <div className="w-full max-w-sm">
                <div className="flex justify-between items-end mb-6 md:mb-10 border-b border-amber-500/30 pb-6 md:pb-10 transition-colors duration-500">
                  <div>
                    <div className="text-gray-500 text-xs font-mono mb-2 tracking-widest">CURRENT DATA</div>
                    <div className="text-5xl md:text-6xl font-black text-white flex items-start">
                      72<span className="text-2xl text-amber-500 mt-2">°F</span>
                    </div>
                  </div>
                  <CloudSun size={56} className="text-amber-500 scale-110 transition-all duration-500" />
                </div>
                <div className="space-y-4">
                  {[{ l: 'MON', w: 40 }, { l: 'TUE', w: 65 }, { l: 'WED', w: 30 }].map((stat, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-8 text-xs text-gray-500 font-mono">{stat.l}</div>
                      <div className="flex-1 h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden relative">
                        <div className="absolute top-0 left-0 h-full bg-amber-500 rounded-full animate-[slide_3s_ease-in-out_infinite]" style={{ width: `${stat.w}%`, animationDelay: `${index * 0.5}s` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222] bg-[#111] text-xs font-bold text-gray-400 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
              // feature 03
            </div>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] uppercase">
              <span className="text-white">DEEP </span>
              <span className="text-amber-500">GITHUB PROFILE</span>
              <span className="text-white"> ANALYTICS.</span>
            </h3>
            <p className="text-gray-400 text-base md:text-xl leading-relaxed font-light">
              Enter any GitHub username and instantly scrape public repos, social metrics, bio data, and external links rendered dynamically without leaving your workflow.
            </p>
            <ul className="space-y-4 pt-2">
              {[
                "Read full commit histories & repos",
                "Analyze following vs followers metrics",
                "Instant JSON payload parsing",
                "Dark & sleek minimal aesthetic"
              ].map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80"></span>
                  <span className="text-gray-300 text-sm md:text-base font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 w-full relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-amber-500/20 to-transparent rounded-3xl blur-xl opacity-100 transition duration-700"></div>
            <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-2xl h-90 md:h-100 flex items-center justify-center">
              <div className="absolute top-0 w-full h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent"></div>

              <div className="w-full max-w-sm space-y-6">
                <div className="flex gap-4 items-center">
                  <div className="w-14 h-14 rounded-full bg-linear-to-br animate-bounce from-[#1a1a1a] to-[#0a0a0a] border border-amber-500/50 flex items-center justify-center transition-colors">
                    <ShieldCheck size={24} className="text-amber-500 transition-colors" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="h-3 w-1/2 bg-[#222] rounded-full"></div>
                    <div className="h-2 w-1/3 bg-[#1a1a1a] rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 py-6 border-y border-[#222]">
                  {["Repos", "Followers", "Following"].map((label, index) => (
                    <div key={index} className="text-center transition-transform hover:-translate-y-1">
                      <div className="text-xl font-bold text-amber-500 mb-1 transition-colors delay-100">{["42", "1.2k", "38"][index]}</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-mono tracking-wider">
                    <ArrowRight size={12} className="text-amber-500" />
                    <span>FETCH /users/:username</span>
                  </div>
                  <div className="h-24 bg-[#111] border border-amber-500/30 rounded-xl p-4 relative overflow-hidden font-mono text-[11px] text-gray-400 leading-relaxed transition-colors">
                    <span className="text-amber-500">{`{`}</span><br />
                    <span className="pl-4">"login": <span className="text-blue-400">"abdulrdeveloper"</span>,</span><br />
                    <span className="pl-4">"id": <span className="text-[#a78bfa]">1</span>,</span><br />
                    <span className="text-amber-500">{`}`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222] bg-[#111] text-xs font-bold text-gray-400 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
              // feature 04
            </div>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] uppercase">
              <span className="text-amber-500">100% PRIVATE</span>
              <span className="text-white"> AND SECURE FLOW.</span>
            </h3>
            <p className="text-gray-400 text-base md:text-xl leading-relaxed font-light">
              Middleware-powered validation with Zod schemas securing your data. Start tracking tools independently with absolute confidence. Your data stays entirely within your protected scope.
            </p>
            <ul className="space-y-4 pt-2">
              {[
                "Smart Zod validation schemas",
                "Client-side middleware protection",
                "Real-time form validation feedback",
                "Your dashboard lives on your terms"
              ].map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80"></span>
                  <span className="text-gray-300 text-sm md:text-base font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 w-full relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-amber-500/20 to-transparent rounded-3xl blur-xl opacity-100 transition duration-700"></div>
            <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-2xl h-90 md:h-100 flex items-center justify-center">
              <div className="absolute top-0 w-full h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent"></div>

              <div className="w-full max-w-sm flex flex-col items-center justify-center space-y-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full"></div>
                  <div className="w-24 h-24 rounded-2xl bg-[#111] border border-amber-500/50 flex items-center justify-center relative z-10 -translate-y-2 transition-all duration-500 shadow-2xl">
                    <ShieldCheck size={40} className="text-amber-500" />
                  </div>
                </div>

                <div className="w-full space-y-3">
                  <div className="h-10 bg-[#111] border border-[#222] rounded-lg p-2 flex items-center px-4 overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full w-1 bg-amber-500"></div>
                    <span className="text-[10px] text-gray-500 font-mono">Header</span>
                    <span className="text-[#a78bfa] text-xs font-mono ml-auto">eyJhbGci...</span>
                  </div>
                  <div className="h-10 bg-[#111] border border-[#222] rounded-lg p-2 flex items-center px-4 overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full w-1 bg-blue-500"></div>
                    <span className="text-[10px] text-gray-500 font-mono">Payload</span>
                    <span className="text-blue-400 text-xs font-mono ml-auto">eyJzdWIi...</span>
                  </div>
                  <div className="h-10 bg-[#111] border border-amber-500/30 rounded-lg p-2 flex items-center px-4 overflow-hidden relative transition-colors delay-150">
                    <div className="absolute top-0 left-0 h-full w-1 bg-rose-500"></div>
                    <span className="text-[10px] text-gray-500 font-mono">Signature</span>
                    <span className="text-rose-400 text-xs font-mono ml-auto">SflKxwRJ...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-24 sm:mb-32">
        <div className="bg-[#111] border border-[#222] rounded-3xl p-8 sm:p-10 md:p-16">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-center mb-8 sm:mb-12">Everything You Need</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 sm:gap-y-6 gap-x-12">
            {[
              "150+ premium developer tools",
              "Real-time API integrations",
              "Instant live search functionality",
              "Dark mode by default",
              "Clean, minimal aesthetic",
              "Robust JWT authentication",
              "External website routing",
              "No unnecessary bloat or cookies",
              "Blazing fast performance",
              "Always mobile responsive",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-amber-500 shrink-0" />
                <span className="text-gray-300 text-sm tracking-wide">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center mb-24 sm:mb-32 px-4 sm:px-6">
        <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">Ready to Create?</h3>
        <p className="text-gray-400 mb-8 max-w-md mx-auto text-base sm:text-lg font-light">Start generating insights and access premium tools instantly.</p>
        <Link href="/register" className="inline-flex justify-center items-center gap-2 sm:gap-3 px-6 py-3.5 sm:px-8 sm:py-4 bg-amber-500 hover:bg-amber-400 text-black font-extrabold rounded-md text-sm sm:text-lg transition-transform hover:-translate-y-1 shadow-[0_0_30px_-10px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_-10px_rgba(245,158,11,0.5)]">
          <Terminal size={20} strokeWidth={2.5} className="w-5 h-5 sm:w-6 sm:h-6" /> Launch DevScope
        </Link>
      </section>

      <footer className="border-t border-[#222] py-8 text-center text-gray-500 text-xs font-medium tracking-wider">
        <p className="flex items-center justify-center gap-1.5 opacity-60">
          <Copyright size={12} /> 2026 DevScope. Built with precision.
        </p>
      </footer>

    </div>
  );
}