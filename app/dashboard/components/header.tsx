"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, Terminal, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    function handleLogout() {
        localStorage.removeItem("user");
        document.cookie = "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        router.push('/');
        router.refresh();
    }

    return (
        <>
            <nav className="sticky top-0 z-50 border-b border-[#222] bg-[#0a0a0a] text-white">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center text-black font-bold">
                            <Terminal size={20} />
                        </div>
                        <h1 className="text-xl font-bold">DevScope</h1>
                    </Link>

                    <div className="hidden md:flex gap-8">
                        <Link href="/dashboard" className={pathname === "/dashboard" ? "text-amber-500 font-medium" : "text-zinc-400 hover:text-white"}>Dashboard</Link>
                        <Link href="/dashboard/tools" className={pathname === "/dashboard/tools" ? "text-amber-500 font-medium" : "text-zinc-400 hover:text-white"}>Tools</Link>
                        <Link href="/dashboard/github" className={pathname === "/dashboard/github" ? "text-amber-500 font-medium" : "text-zinc-400 hover:text-white"}>GitHub</Link>
                        <Link href="/dashboard/weather" className={pathname === "/dashboard/weather" ? "text-amber-500 font-medium" : "text-zinc-400 hover:text-white"}>Weather</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <button onClick={handleLogout} className="px-4 py-2 cursor-pointer rounded-lg bg-red-600/20 border border-red-500/30 text-red-400 hover:bg-red-600/40 text-sm font-medium">
                            <LogOut size={18} />
                        </button>
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <>
                    <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
                    <div className="fixed top-16 left-0 right-0 bg-[#0a0a0a] border-b border-[#222] z-40 md:hidden">
                        <div className="flex flex-col gap-2 px-6 py-4">
                            <Link href="/dashboard" className={pathname === "/dashboard" ? "text-amber-500 font-medium py-2" : "text-zinc-400 hover:text-white py-2"} onClick={() => setIsMobileMenuOpen(false)}>Dashboard</Link>
                            <Link href="/dashboard/tools" className={pathname === "/dashboard/tools" ? "text-amber-500 font-medium py-2" : "text-zinc-400 hover:text-white py-2"} onClick={() => setIsMobileMenuOpen(false)}>Tools</Link>
                            <Link href="/dashboard/github" className={pathname === "/dashboard/github" ? "text-amber-500 font-medium py-2" : "text-zinc-400 hover:text-white py-2"} onClick={() => setIsMobileMenuOpen(false)}>GitHub</Link>
                            <Link href="/dashboard/weather" className={pathname === "/dashboard/weather" ? "text-amber-500 font-medium py-2" : "text-zinc-400 hover:text-white py-2"} onClick={() => setIsMobileMenuOpen(false)}>Weather</Link>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
