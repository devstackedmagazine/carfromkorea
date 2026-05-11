import React from 'react';
import BrandFilter from './filters/BrandFilter';
import PriceRangeFilter from './filters/PriceRangeFilter';
import EngineTypeFilter from './filters/EngineTypeFilter';
import FilterActions from './filters/FilterActions';

interface HeroFiltersProps {
  filters: {
    brand: string;
    priceMin: number;
    priceMax: number;
    engineType: string;
  };
  setFilters: (filters: any) => void;
  onApply: () => void;
  onReset: () => void;
}

export default function HeroFilters({
  filters,
  setFilters,
  onApply,
  onReset,
}: HeroFiltersProps) {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-[20px] sm:px-[50px] lg:px-[100px] mt-[-40px] relative z-20">
      <div className="bg-[#1a1f24] border border-white/10 rounded-[8px] p-6 lg:p-8 shadow-2xl flex flex-col md:flex-row gap-8 items-end flex-wrap justify-between w-full">
        
        <div className="flex-1 min-w-[200px] max-w-[250px]">
           <BrandFilter 
            value={filters.brand}
            onChange={(brand) => setFilters({ ...filters, brand })}
          />
        </div>
          
        <div className="flex-1 min-w-[200px] max-w-[280px]">
          <PriceRangeFilter
            min={filters.priceMin}
            max={filters.priceMax}
            onChange={(min, max) => setFilters({ ...filters, priceMin: min, priceMax: max })}
          />
        </div>

        <div className="flex-1 min-w-[200px] max-w-[250px]">
          <EngineTypeFilter
            value={filters.engineType}
            onChange={(engineType) => setFilters({ ...filters, engineType })}
          />
        </div>

        <div className="flex-none">
          <FilterActions 
            onApply={onApply}
            onReset={onReset}
          />
        </div>
        
      </div>
    </div>
  );
}
