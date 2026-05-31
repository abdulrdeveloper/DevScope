"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        const url = "/api/v1/users/register";
        const data = {
            email: email,
            username: userName,
            password: password,
            role: "USER",
        };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error(
                    result.message ||
                    `Registration failed, HTTP response Status ${response.status}`,
                );
            }

            console.log(`Success: `, result);
            router.push("/login");

        } catch (error: any) {
            console.log(`Failed : `, error.message || error);
            setError(error.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950">
            <div className="bg-gray-900 p-8 rounded-xl w-full max-w-md">
                <h1 className="text-2xl font-bold text-white mb-6">Register</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none"
                        required
                    />
                    
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold cursor-pointer"
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                    {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
                </form>

                <p className="text-gray-400 text-sm text-center mt-4">
                    Already have an account?
                    <a href="/login" className="text-blue-400 ml-3">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}
