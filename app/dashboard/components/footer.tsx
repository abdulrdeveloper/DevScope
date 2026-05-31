import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-center py-6 border-t border-gray-800 text-gray-500 mt-auto bg-gray-950">
      <p className="flex items-center justify-center gap-2">DevScope <Copyright size={16} /> 2026</p>
    </footer>
  );
}