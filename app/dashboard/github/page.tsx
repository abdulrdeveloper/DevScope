"use client";
import React from 'react'
import { useState } from "react";
import { Search, Users, BookOpen, Loader2, Globe, MapPin, Link as LinkIcon, Code } from "lucide-react";

export default function GithubStats() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState<any>(null);

  async function fetchGitHubStats() {
    if (!username.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "User not found!");
      }

      setUserData(data);
    } catch (error: any) {
      setError(error.message || "User not found!");
      setUserData(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-3 bg-linear-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Code Stats</h1>
          <p className="text-[#666] font-light text-lg">Discover detailed Code profiles, repositories, and contributions.</p>
        </div>

        <div className="group relative mb-12">
          <div className="absolute -inset-px bg-linear-to-r from-amber-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
          <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Code className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666]" size={20} />
                <input
                  type="text"
                  placeholder="Enter Code username..."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === "Enter") {
                      fetchGitHubStats();          
                    }
                  }}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#111] border border-[#222] text-white placeholder-[#666] font-light focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                />
              </div>
              <button 
                onClick={fetchGitHubStats}
                disabled={loading}
                className="px-6 py-3 cursor-pointer rounded-lg bg-linear-to-r from-amber-500 to-amber-600 text-black font-black hover:from-amber-400 hover:to-amber-500 disabled:opacity-50 transition-all duration-300 flex items-center gap-2 whitespace-nowrap justify-center"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <Search size={20} />
                    <span>Search</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-8 text-red-400 font-light">
            {error}
          </div>
        )}

        {userData && (
          <div className="space-y-8">
            <div className="group relative">
              <div className="absolute -inset-px bg-linear-to-r from-amber-500/20 via-transparent to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
              <div className="bg-linear-to-br from-[#111] to-[#0a0a0a] border border-[#222] rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-6 mb-8">
                      {userData.avatar_url && (
                        <img 
                          src={userData.avatar_url} 
                          alt={userData.name} 
                          className="w-24 h-24 md:w-32 md:h-32 rounded-xl border border-amber-500/30 object-cover"
                        />
                      )}
                      <div>
                        <h2 className="text-3xl md:text-4xl font-black mb-2">{userData.name || userData.login}</h2>
                        <p className="text-[#666] font-light text-lg mb-4">@{userData.login}</p>
                        {userData.bio && (
                          <p className="text-[#999] font-light mb-4">{userData.bio}</p>
                        )}
                        <div className="flex flex-wrap gap-3">
                          {userData.location && (
                            <div className="flex items-center gap-2 text-[#666] font-light text-sm">
                              <MapPin size={16} className="text-amber-500" />
                              {userData.location}
                            </div>
                          )}
                          {userData.blog && (
                            <a 
                              href={userData.blog}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-amber-500 font-light text-sm hover:text-amber-400 transition-colors"
                            >
                              <LinkIcon size={16} />
                              Website
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-[#666] font-light text-sm uppercase tracking-wide mb-2">Code Profile</p>
                      <a 
                        href={userData.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-amber-500 to-amber-600 text-black font-black hover:from-amber-400 hover:to-amber-500 transition-all duration-300"
                      >
                        <Code size={18} />
                        <span>View Profile</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative">
                <div className="absolute -inset-px bg-linear-to-r from-amber-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                <div className="bg-[#111] border border-[#222] rounded-lg p-6 hover:border-amber-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="text-amber-500" size={24} />
                    <p className="text-[#666] font-light text-sm">Repositories</p>
                  </div>
                  <p className="text-4xl font-black text-white">{userData.public_repos}</p>
                  <p className="text-[#666] font-light text-xs mt-2">Public repositories</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-px bg-linear-to-r from-amber-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                <div className="bg-[#111] border border-[#222] rounded-lg p-6 hover:border-amber-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="text-amber-500" size={24} />
                    <p className="text-[#666] font-light text-sm">Followers</p>
                  </div>
                  <p className="text-4xl font-black text-white">{userData.followers.toLocaleString()}</p>
                  <p className="text-[#666] font-light text-xs mt-2">Total followers</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-px bg-linear-to-r from-amber-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                <div className="bg-[#111] border border-[#222] rounded-lg p-6 hover:border-amber-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="text-amber-500" size={24} />
                    <p className="text-[#666] font-light text-sm">Following</p>
                  </div>
                  <p className="text-4xl font-black text-white">{userData.following.toLocaleString()}</p>
                  <p className="text-[#666] font-light text-xs mt-2">Users followed</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-px bg-linear-to-r from-amber-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                <div className="bg-[#111] border border-[#222] rounded-lg p-6 hover:border-amber-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="text-amber-500" size={24} />
                    <p className="text-[#666] font-light text-sm">Profile Created</p>
                  </div>
                  <p className="text-lg font-black text-white">{new Date(userData.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</p>
                  <p className="text-[#666] font-light text-xs mt-2">Member since</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {!userData && !error && (
          <div className="text-center py-20">
            <Code size={64} className="text-[#333] mx-auto mb-6" />
            <p className="text-[#666] font-light text-lg">Search for a Code user to view their profile</p>
          </div>
        )}
      </div>
    </div>
  )
}

