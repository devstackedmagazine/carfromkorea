import React from 'react';

interface PriceRangeFilterProps {
  min: number;
  max: number;
  onChange: (min: number, max: number) => void;
}

export default function PriceRangeFilter({
  min,
  max,
  onChange,
}: PriceRangeFilterProps) {
  const minLimit = 5000;
  const maxLimit = 250000;

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    onChange(val, max);
  };

  const percent = ((min - minLimit) / (maxLimit - minLimit)) * 100;

  return (
    <div className="flex flex-col justify-between gap-1 w-full h-full max-w-[240px]">
      <div className="flex justify-between items-center w-full">
        <label className="text-xs font-semibold text-white/70 flex items-center gap-2 uppercase tracking-wide">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M12 12h.01"/><path d="M17 12h.01"/><path d="M7 12h.01"/></svg>
          PRICE RANGE:
        </label>
        <span className="text-[#86e2b4] text-sm font-semibold">${(min/1000).toFixed(0)}K</span>
      </div>
      
      <div className="relative pt-2 pb-1 w-full">
        <div className="h-1 bg-[#2C333A] rounded-full w-full relative">
            <div className="absolute h-1 bg-[#86e2b4] rounded-full" style={{ left: '0%', right: `${100 - percent}%` }}></div>
            {/* Thumb mock */}
            <div className="absolute w-4 h-4 rounded-full bg-[#86e2b4] top-1/2 -mt-2 shadow pointer-events-none" style={{ left: `${percent}%`, transform: 'translateX(-50%)' }}></div>
        </div>
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          step="5000"
          value={min}
          onChange={handleRangeChange}
          className="absolute top-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>

      <div className="flex justify-between text-xs text-white/80 font-medium">
        <span>$5,000</span>
        <span>$250,000+</span>
      </div>
    </div>
  );
}
