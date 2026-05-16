import { SortOption } from '@/types/inventory';

interface SortDropdownProps {
  sort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'newest', label: 'Më të Rejat' },
  { value: 'price-low', label: 'Çmimi: Nga më i ulëti' },
  { value: 'price-high', label: 'Çmimi: Nga më i larti' },
  { value: 'mileage-low', label: 'Kilometrazhi më i ulët' },
];

export default function SortDropdown({
  sort,
  onSortChange,
}: SortDropdownProps) {
  return (
    <div className="relative">
      <select
        value={sort}
        onChange={(e) => onSortChange(e.target.value as SortOption)}
        className="pl-4 pr-10 py-[10px] bg-[#1a1f24] border border-white/10 text-white text-sm font-medium rounded-[4px] focus:outline-none focus:border-[#86e2b4] transition-colors appearance-none cursor-pointer h-[42px]"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value} className="bg-deep-dark-blue">
            Rendit: {option.label}
          </option>
        ))}
      </select>
      
      {/* Custom dropdown arrow */}
      <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </div>
    </div>
  );
}