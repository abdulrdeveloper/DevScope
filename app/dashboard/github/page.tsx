"use client";
import React from 'react'
import { useState } from "react";
import { Search, Users, BookOpen, Loader2 } from "lucide-react";

function githubStats() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState<any>(null);

  async function fetchGitHubStats() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "User not found!");
      }

      setUserData(data);
      console.log(data);
    } catch (error: any) {
      console.error("Error fetching GitHub stats: ", error.message);
      setError(error.message || "User not found!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              fetchGitHubStats();          
            }
          }}
        />

        <button onClick={fetchGitHubStats} className="flex items-center gap-2">
          {loading ? <><Loader2 size={20} className="animate-spin" /> Loading...</> : <><Search size={20} /> Fetch Stats</>}
        </button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.name} />

          <h2>Name: {userData.name}</h2>
          <h2>Username: {userData.login}</h2>
          <p>Bio: {userData.bio}</p>
          <p className="flex items-center gap-2"><Users size={20} /> Followers: {userData.followers}</p>
          <p className="flex items-center gap-2"><Users size={20} /> Following: {userData.following}</p>
          <p className="flex items-center gap-2"><BookOpen size={20} /> Public Repos: {userData.public_repos}</p>
          <p className="flex items-center gap-2"><BookOpen size={20} /> Blog: {userData.blog}</p>
        </div>
      )}
    </>
  )
}

export default githubStats
