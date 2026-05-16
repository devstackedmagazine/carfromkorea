import React from 'react';
import Dropdown from './Dropdown';

interface EngineTypeFilterProps {
  value: string;
  onChange: (engineType: string) => void;
}

export default function EngineTypeFilter({
  value,
  onChange,
}: EngineTypeFilterProps) {
  const types = [
    { value: 'all', label: 'Të gjithë motorët' },
    { value: 'electric', label: 'Elektrik (EV)' },
    { value: 'gasoline', label: 'Benzinë' },
    { value: 'hybrid', label: 'Hibrid' },
    { value: 'diesel', label: 'Naftë' },
  ];

  return (
    <div className="flex flex-col gap-2 w-full">
       <label className="text-xs font-semibold text-white/70 flex items-center gap-2 uppercase tracking-wide">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        LLOJI I MOTORIT
      </label>
      
      <Dropdown
        options={types}
        value={value}
        onChange={onChange}
        placeholder="Zgjidh llojin e motorit"
      />
    </div>
  );
}
