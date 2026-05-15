import React from "react";
import Dropdown from "./Dropdown";

interface YearFilterProps {
  yearMin: number;
  yearMax: number;
  onChange: (min: number, max: number) => void;
}

const options = [
  { label: "Nga 2025", value: 2025 },
  { label: "Nga 2024", value: 2024 },
  { label: "Nga 2023", value: 2023 },
  { label: "Nga 2022", value: 2022 },
  { label: "Nga 2021", value: 2021 },
  { label: "Nga 2020", value: 2020 },
  { label: "Nga 2019", value: 2019 },
  { label: "Nga 2018", value: 2018 },
  { label: "Nga 2017", value: 2017 },
  { label: "Nga 2016", value: 2016 },
  { label: "Nga 2015", value: 2015 },
  { label: "Nga 2010", value: 2010 },
];

export default function YearFilter({
  yearMin,
  yearMax,
  onChange,
}: YearFilterProps) {
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
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        VITI I PRODHIMIT
      </label>
      <Dropdown
        options={options}
        value={yearMin}
        onChange={(val) => onChange(val, yearMax)}
        placeholder="Zgjidh vitin"
      />
    </div>
  );
}
