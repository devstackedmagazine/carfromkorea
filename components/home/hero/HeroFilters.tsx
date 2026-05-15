import React from "react";
import { motion } from "framer-motion";
import BrandFilter from "./filters/BrandFilter";
import PriceRangeFilter from "./filters/PriceRangeFilter";
import EngineTypeFilter from "./filters/EngineTypeFilter";
import ModelFilter from "./filters/ModelFilter";
import YearFilter from "./filters/YearFilter";
import MileageFilter from "./filters/MileageFilter";
import FilterActions from "./filters/FilterActions";

const containerVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      ease: "easeOut"
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

interface HeroFiltersProps {
  filters: {
    brand: string;
    model: string;
    yearMin: number;
    yearMax: number;
    mileageMax: number;
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
      <motion.div 
        className="bg-[#1a1f24] border border-white/10 rounded-[8px] p-6 lg:p-8 shadow-2xl flex flex-col items-start md:flex-row gap-6 md:items-end flex-wrap justify-between w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex-1 min-w-[150px] w-full md:w-auto">
          <BrandFilter
            value={filters.brand}
            onChange={(brand) => setFilters({ ...filters, brand })}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex-1 min-w-[150px] w-full md:w-auto">
          <ModelFilter
            value={filters.model}
            onChange={(model) => setFilters({ ...filters, model })}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex-1 min-w-[200px] w-full md:w-auto">
          <YearFilter
            yearMin={filters.yearMin}
            yearMax={filters.yearMax}
            onChange={(yearMin, yearMax) =>
              setFilters({ ...filters, yearMin, yearMax })
            }
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex-1 min-w-[150px] w-full md:w-auto">
          <MileageFilter
            mileageMax={filters.mileageMax}
            onChange={(mileageMax) => setFilters({ ...filters, mileageMax })}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex-2 min-w-[250px] w-full md:w-auto">
          <PriceRangeFilter
            min={filters.priceMin}
            max={filters.priceMax}
            onChange={(min, max) =>
              setFilters({ ...filters, priceMin: min, priceMax: max })
            }
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex-1 min-w-[150px] w-full md:w-auto">
          <EngineTypeFilter
            value={filters.engineType}
            onChange={(engineType) => setFilters({ ...filters, engineType })}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex-none basis-full md:basis-auto mt-2 md:mt-0 flex justify-end w-full md:w-auto">
          <FilterActions onApply={onApply} onReset={onReset} />
        </motion.div>
      </motion.div>
    </div>
  );
}
