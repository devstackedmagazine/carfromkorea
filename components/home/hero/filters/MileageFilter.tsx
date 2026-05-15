import React from "react";
import Dropdown from "./Dropdown";

interface MileageFilterProps {
  mileageMax: number;
  onChange: (max: number) => void;
}

export default function MileageFilter({
  mileageMax,
  onChange,
}: MileageFilterProps) {
  const options = [
    { label: "Çdo (Pa maksimum)", value: 0 },
    { label: "Nën 10,000 km", value: 10000 },
    { label: "Nën 25,000 km", value: 25000 },
    { label: "Nën 50,000 km", value: 50000 },
    { label: "Nën 100,000 km", value: 100000 },
    { label: "Nën 150,000 km", value: 150000 },
    { label: "Nën 200,000 km", value: 200000 },
  ];

  return (
    <div className="flex flex-col gap-2 w-full">
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
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
        KILOMETRAZHI MAKSIMAL (km)
      </label>
      <Dropdown
        options={options}
        value={mileageMax}
        onChange={onChange}
        placeholder="Zgjidh kilometrazhin maksimal"
      />
    </div>
  );
}
