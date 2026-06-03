"use client";

import React from 'react'
import { useEffect, useState } from "react";
import { Wrench, Cloud, Code, ArrowRight, User } from "lucide-react";
import Link from "next/link";

function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function currentUser() {
      try {
        const res = await fetch("/api/v1/users/current-user", {
          credentials: "include"
        });

        if (!res.ok) {
          throw new Error(`HTTP error : ${res.status}`);
        }

        const data = await res.json()
        setUser(data.data)
      } catch (error) {
        console.error(`Error : `, error)
      }
    }
    currentUser();
  }, [])

   if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 mx-auto mb-4 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-transparent border-t-amber-500 animate-spin"></div>
          </div>
          <p className="text-[#666] font-light">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-3">Welcome Back, <span className="bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">{user.username}</span></h1>
          <p className="text-[#666] font-light text-lg">Your development dashboard is ready. Explore tools, check weather, and track GitHub stats.</p>
        </div>

        <div className="group mb-12 rounded-2xl border border-[#222] overflow-hidden hover:border-amber-500/30 transition-all duration-300">
          <div className="absolute -inset-px bg-linear-to-r from-amber-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
          <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6 flex-1">
              <div className="w-20 h-20 rounded-full bg-linear-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:border-amber-500/50 transition-all duration-300">
                <User size={32} className="text-amber-500" />
              </div>
              <div>
                <h2 className="text-2xl font-black mb-2">{user.username}</h2>
                <p className="text-[#999] font-light mb-3">{user.email}</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${user.isEmailVerified ? 'border-green-500/30 bg-green-500/10 text-green-400' : 'border-red-900/50 bg-red-950/30 text-red-400'}`}>
                    {user.isEmailVerified ? '✓ Email Verified' : '! Email Not Verified'}
                  </span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 uppercase">
                    {user.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-black mb-6">Explore DevScope Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/dashboard/tools" className="group relative">
              <div className="absolute -inset-px bg-linear-to-r from-amber-500/20 to-transparent rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
              <div className="bg-[#111] border border-[#222] rounded-xl p-8 h-full hover:border-amber-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-linear-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center mb-4 group-hover:border-amber-500/50 group-hover:scale-110 transition-all duration-300">
                  <Wrench size={24} className="text-amber-500" />
                </div>
                <h3 className="text-xl font-black mb-2">Developer Tools</h3>
                <p className="text-[#666] font-light text-sm mb-6">Explore the world's best developer tools and resources for modern software development.</p>
                <div className="flex items-center gap-2 text-amber-500 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                  Explore Tools <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            <Link href="/dashboard/weather" className="group relative">
              <div className="absolute -inset-px bg-linear-to-r from-amber-500/20 to-transparent rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
              <div className="bg-[#111] border border-[#222] rounded-xl p-8 h-full hover:border-amber-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-linear-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center mb-4 group-hover:border-amber-500/50 group-hover:scale-110 transition-all duration-300">
                  <Cloud size={24} className="text-amber-500" />
                </div>
                <h3 className="text-xl font-black mb-2">Weather Tracker</h3>
                <p className="text-[#666] font-light text-sm mb-6">Get real-time weather data and forecasts for any city around the world instantly.</p>
                <div className="flex items-center gap-2 text-amber-500 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                  Check Weather <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            <Link href="/dashboard/github" className="group relative">
              <div className="absolute -inset-px bg-linear-to-r from-amber-500/20 to-transparent rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
              <div className="bg-[#111] border border-[#222] rounded-xl p-8 h-full hover:border-amber-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-linear-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center mb-4 group-hover:border-amber-500/50 group-hover:scale-110 transition-all duration-300">
                  <Code size={24} className="text-amber-500" />
                </div>
                <h3 className="text-xl font-black mb-2">GitHub Stats</h3>
                <p className="text-[#666] font-light text-sm mb-6">View detailed GitHub profiles, repositories, contributions, and analytics for any user.</p>
                <div className="flex items-center gap-2 text-amber-500 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                  View Profiles <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
