"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { ArrowLeft, KeyRound, UserRound, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const url = "/api/v1/users/login";
    const data = { username, password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || `Login failed, HTTP response Status ${response.status}`);
      }

      console.log(`Success: `, result);
      document.cookie = "isLoggedIn=true; path=/; max-age=86400";
      router.push('/dashboard');

    } catch (error: any) {
      console.log(`Failed : `, error.message || error);
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] p-4 relative overflow-hidden">

      <div className="absolute top-0 w-full h-125 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute top-4 left-4 z-10">
        <Link href="/" className="text-gray-400 hover:text-amber-500 transition-colors flex items-center gap-2 text-sm">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>

      <div className="bg-[#111] border border-[#222] p-8 rounded-3xl w-full max-w-md relative z-10 shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Welcome Back</h1>
          <p className="text-gray-400">Sign in to continue to your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 block">Username</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <UserRound size={18} />
              </div>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-[#333] text-white pl-10 p-3 rounded-xl focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50 outline-none transition-all placeholder:text-gray-600"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-400">Password</label>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <KeyRound size={18} />
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-[#333] text-white pl-10 p-3 rounded-xl focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50 outline-none transition-all placeholder:text-gray-600"
                required
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-xl text-sm text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer bg-amber-500 hover:bg-amber-400 text-black py-3.5 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p className="text-gray-500 text-sm text-center mt-6">
          Don't have an account?{" "}
          <Link href="/register" className="text-amber-500 hover:text-amber-400 font-medium transition-colors">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
