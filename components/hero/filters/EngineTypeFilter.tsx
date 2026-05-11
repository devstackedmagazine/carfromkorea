import React from 'react';

interface EngineTypeFilterProps {
  value: string;
  onChange: (engineType: string) => void;
}

export default function EngineTypeFilter({
  value,
  onChange,
}: EngineTypeFilterProps) {
  const types = [
    { id: 'electric', label: 'ELECTRIC' },
    { id: 'gasoline', label: 'GASOLINE' },
  ];

  return (
    <div className="flex flex-col gap-2">
       <label className="text-xs font-semibold text-white/70 flex items-center gap-2 uppercase tracking-wide">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        ENGINE TYPE
      </label>
      
      <div className="flex bg-[#1e2329] p-1 rounded-[4px] border border-white/5 w-fit">
        {types.map((type) => (
          <button
            key={type.id}
            onClick={() => onChange(type.id)}
            className={`px-5 py-2 rounded-[2px] font-semibold text-xs tracking-wider transition-all ${
              value === type.id
                ? 'bg-[#86e2b4] text-[#111111]'
                : 'bg-transparent text-white/70 hover:text-white'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>
    </div>
  );
}
