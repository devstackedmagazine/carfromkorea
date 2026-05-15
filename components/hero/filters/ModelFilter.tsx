import React from 'react';

interface ModelFilterProps {
  value: string;
  onChange: (model: string) => void;
}

export default function ModelFilter({ value, onChange }: ModelFilterProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-xs font-semibold text-white/70 flex items-center gap-2 uppercase tracking-wide">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M12 18v-6"/><path d="M9 15h6"/></svg>
        MODELI I MAKINËS
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Shkruaj modelin"
        className="px-4 py-3 bg-[#1e2329] border border-white/10 rounded-[4px] text-white text-sm focus:outline-none focus:border-[#86e2b4] transition-colors w-full"
      />
    </div>
  );
}
