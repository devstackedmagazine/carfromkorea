"use client";

import { Search } from "lucide-react";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Kërko artikuj..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[#1A1F2E] text-white placeholder-gray-500 rounded-lg pl-4 pr-12 py-3 border border-gray-700 focus:border-light-emerald focus:outline-none transition-colors"
        aria-label="Kërko artikuj"
      />
      <Search
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        size={18}
      />
    </div>
  );
}
