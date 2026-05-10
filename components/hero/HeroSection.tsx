'use client';

import React, { useState } from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
import HeroFilters from './HeroFilters';

export default function HeroSection() {
  const [filters, setFilters] = useState({
    brand: 'All Brands',
    priceMin: 40000,
    priceMax: 250000,
    engineType: 'electric',
  });

  const handleApplyFilters = () => {
    console.log('Filters applied:', filters);
  };

  const handleResetFilters = () => {
    setFilters({
      brand: 'All Brands',
      priceMin: 40000,
      priceMax: 250000,
      engineType: 'electric',
    });
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-[#0a1122] via-[#0f1d3c] to-[#12422c] min-h-[90vh] overflow-hidden flex flex-col">
      {/* Texture pattern optional */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")'}}></div>
      
      <HeroImage />

      <div className="flex-1 w-full max-w-[1400px] mx-auto relative z-10 flex flex-col justify-center">
        
        <div className="flex flex-col lg:flex-row items-center justify-between px-[20px] sm:px-[50px] lg:px-[100px] w-full">
          <HeroContent />
        </div>

      </div>
      
      {/* Positioned at bottom overlapping slightly the section boundary if needed */}
      <div className="pb-12 lg:pb-16 w-full">
        <HeroFilters 
          filters={filters}
          setFilters={setFilters}
          onApply={handleApplyFilters}
          onReset={handleResetFilters}
        />
      </div>
    </section>
  );
}
