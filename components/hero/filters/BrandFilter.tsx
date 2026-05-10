import React from 'react';

interface BrandFilterProps {
  value: string;
  onChange: (brand: string) => void;
}

export default function BrandFilter({ value, onChange }: BrandFilterProps) {
  const brands = [
    'All Brands',
    'BMW',
    'Mercedes-Benz',
    'Audi',
    'Porsche',
    'Ferrari',
    'Lamborghini',
    'Rolls-Royce',
  ];

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold text-white/70 flex items-center gap-2 uppercase tracking-wide">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15h6"/><path d="M9 11h6"/></svg>
        CAR BRAND
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-3 bg-[#1e2329] border border-white/10 rounded-[4px] text-white text-sm focus:outline-none focus:border-[#86e2b4] transition-colors appearance-none cursor-pointer"
        style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}
      >
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
}
