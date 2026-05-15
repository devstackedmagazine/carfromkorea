import React from 'react';

interface FilterActionsProps {
  onApply: () => void;
  onReset: () => void;
}

export default function FilterActions({
  onApply,
  onReset,
}: FilterActionsProps) {
  return (
    <div className="flex flex-row items-end gap-6 mb-1">
      <button
        onClick={onApply}
        className="px-6 py-3 bg-[#86e2b4] text-[#111111] text-xs font-bold uppercase tracking-wider rounded-[4px] hover:opacity-90 transition-opacity whitespace-nowrap h-[42px]"
      >
        APLIKO FILTRAT
      </button>
      
      <button
        onClick={onReset}
        className="px-2 py-3 bg-transparent text-white text-xs font-bold uppercase tracking-wider hover:text-white/80 transition-colors whitespace-nowrap h-[42px]"
      >
        RIVENDOS
      </button>
    </div>
  );
}
