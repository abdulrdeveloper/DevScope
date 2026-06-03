"use client";

import { useState } from "react";
import devtools from "./devtools.json";
import {
  Monitor, Code, GitBranch, Cpu, PenTool, Database, Server,
  Bot, Ship, Calendar, Atom, Box, LineChart, Shield, BookOpen, ArrowRight, ExternalLink
} from "lucide-react";

const IconMap: Record<string, any> = {
  Monitor, Code, Github: Code, GitBranch, Cpu, PenTool, Database, Server,
  Bot, Ship, Calendar, Atom, Box, LineChart, Shield, BookOpen
};

export default function DevToolsPage() {
  const [current, setCurrent] = useState(0);

  function handleNext() {
    setCurrent(Math.floor(Math.random() * devtools.length));
  }

  const tool = devtools[current];
  const IconComponent = IconMap[tool.icon] || Cpu;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
<h1 className="text-4xl md:text-5xl font-black mb-3 bg-linear-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
  Developer Tools
</h1>          <p className="text-[#666] font-light text-lg">Discover the best tools and resources for modern software development.</p>
        </div>

        <div className="group relative mb-12">
          <div className="absolute -inset-px bg-linear-to-r from-amber-500/20 via-transparent to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
          <div className="bg-linear-to-br from-[#111] to-[#0a0a0a] border border-[#222] rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-linear-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:border-amber-500/50 group-hover:scale-110 transition-all duration-300">
                    <IconComponent size={32} className="text-amber-500" />
                  </div>
                  <div>
                    <p className="text-[#666] font-light text-sm uppercase tracking-wide mb-1">{tool.category}</p>
                    <h2 className="text-3xl font-black">{tool.name}</h2>
                  </div>
                </div>
                <p className="text-[#999] font-light text-lg leading-relaxed mb-8">{tool.description}</p>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-linear-to-r from-amber-500 to-amber-600 text-black font-black hover:from-amber-400 hover:to-amber-500 transition-all duration-300 group/btn"
                >
                  <ExternalLink size={18} />
                  <span>Visit Site</span>
                </a>
              </div>

              <div className="hidden md:flex items-center justify-center">
                <div className="relative w-full h-64">
                  <div className="absolute inset-0 bg-linear-to-br from-amber-500/10 to-transparent rounded-xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-linear-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center">
                      <IconComponent size={64} className="text-amber-500 opacity-50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleNext}
            className="px-8 py-3 cursor-pointer rounded-lg bg-amber-500 text-black font-black hover:bg-amber-400 transition-all duration-300 flex items-center gap-2 group/btn"
          >
            <span>Discover Another Tool</span>
            <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>

        </div>


      </div>
    </div>
  );
}