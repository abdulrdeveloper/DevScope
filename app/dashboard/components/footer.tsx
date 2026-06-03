import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#222] bg-[#0a0a0a] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-center">
        <div className="flex items-center gap-2 text-sm text-[#666] font-light">
          <Copyright size={14} className="text-amber-500/50" />
          <span>{new Date().getFullYear()} DevScope. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}