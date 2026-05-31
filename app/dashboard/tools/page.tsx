"use client";

import { useState } from "react";
import devtools from "./devtools.json";
import { 
  Monitor, Code, GitBranch, Cpu, PenTool, Database, Server, 
  Bot, Ship, Calendar, Atom, Box, LineChart, Shield, BookOpen, ArrowRight 
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
    <div>
      <span><IconComponent size={20} /></span>
      <h2>{tool.name}</h2>
      <p>{tool.category}</p>
      <p>{tool.description}</p>
      <a href={tool.link} target="_blank">Visit Site</a>
      <button onClick={handleNext} className="flex items-center gap-2">Next <ArrowRight size={20} /></button>
    </div>
  );
}