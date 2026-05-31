"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Plane, Sun, Code } from "lucide-react";

export default function Header() {
    const router = useRouter();

    function handleLogout() {
        localStorage.removeItem("token");
        router.push("/login");
    }

    return (
        <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800 bg-gray-950 text-white">
            <div className="flex items-center gap-2">
                <Image src="/logo.svg" alt="DevScope Logo" width={32} height={32} />
                <h1 className="text-xl font-bold text-blue-400">DevScope</h1>
            </div>
            <div className="flex gap-6">
                <a href="/dashboard/devtools" className="hover:text-blue-400 border border-gray-800 px-3 py-1 rounded-md flex items-center gap-2"><Plane size={20} /> DevTools</a>
                <a href="/dashboard/weather" className="hover:text-blue-400 border border-gray-800 px-3 py-1 rounded-md flex items-center gap-2"><Sun size={20} /> Weather</a>
                <a href="/dashboard/github" className="hover:text-blue-400 border border-gray-800 px-3 py-1 rounded-md flex items-center gap-2"><Code size={20} /> GitHub Stats</a>
            </div>
            <button onClick={handleLogout} className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm">Logout</button>
        </nav>
    );
}