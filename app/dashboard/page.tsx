"use client";

import React from 'react'
import { useEffect, useState } from "react";

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
        console.log(data.data);
        console.log(data.data.username);

        setUser(data.data)
      } catch (error) {
        console.error(`Error : `, error)
      }
    }
    currentUser();
  }, [])

   if (!user) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">

        <div className="bg-gray-900 rounded-xl p-6 flex items-center gap-6 mb-8">
          <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold">
            {user.username.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-xl font-bold">{user.username}</h2>
            <p className="text-gray-400">{user.email}</p>
            <p className="text-gray-400">{user.isEmailVerified ? 'Email Verified' : 'Email Not Verified'}</p>
            <span className="text-xs text-blue-400 border border-blue-800 px-2 py-0.5 rounded-full">{user.role}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a href="/dashboard/devtools" className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800">
            <h3 className="text-lg font-semibold mb-2">Dev Tools</h3>
            <p className="text-gray-400 text-sm">Explore developer tools and resources.</p>
          </a>
          <a href="/dashboard/weather" className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800">
            <h3 className="text-lg font-semibold mb-2">Weather</h3>
            <p className="text-gray-400 text-sm">Check live weather for any city.</p>
          </a>
          <a href="/dashboard/github-stats" className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800">
            <h3 className="text-lg font-semibold mb-2">GitHub Stats</h3>
            <p className="text-gray-400 text-sm">View any GitHub profile and stats.</p>
          </a>
        </div>

      </div>
    </div>
    </>
  )
}

export default Dashboard
