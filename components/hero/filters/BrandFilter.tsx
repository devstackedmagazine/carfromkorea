import React from "react";
import Dropdown from "./Dropdown";

interface BrandFilterProps {
  value: string;
  onChange: (brand: string) => void;
}

export default function BrandFilter({ value, onChange }: BrandFilterProps) {
  const brands = [
    { label: "All Brands", value: "All Brands" },
    { label: "BMW", value: "BMW" },
    { label: "Mercedes-Benz", value: "Mercedes-Benz" },
    { label: "Audi", value: "Audi" },
    { label: "Porsche", value: "Porsche" },
    { label: "Ferrari", value: "Ferrari" },
    { label: "Lamborghini", value: "Lamborghini" },
    { label: "Rolls-Royce", value: "Rolls-Royce" },
  ];

  return (
    <div className="flex flex-col gap-2 relative z-20">
      <label className="text-xs font-semibold text-white/70 flex items-center gap-2 uppercase tracking-wide">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M9 15h6" />
          <path d="M9 11h6" />
        </svg>
        CAR BRAND
      </label>
      <Dropdown
        options={brands}
        value={value}
        onChange={onChange}
        placeholder="Select brand"
      />
    </div>
  );
}
