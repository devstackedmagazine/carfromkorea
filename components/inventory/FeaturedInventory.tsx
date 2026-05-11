'use client';

import { useState } from 'react';
import { useInventory } from './hooks/useInventory';
import InventoryHeader from './InventoryHeader';
import InventoryControls from './InventoryControls';
import InventoryGrid from './InventoryGrid';
import { ViewMode, SortOption } from '@/types/inventory';

export default function FeaturedInventory() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  
  const {
    cars,
    loading,
    error,
    sort,
    setSort,
    favorites,
    toggleFavorite,
    isFavorite,
  } = useInventory({ limit: 6, initialSort: 'newest' });

  return (
    <section className="bg-[#111111] py-20 px-8 sm:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Bar: Header + Controls */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 gap-6">
          <InventoryHeader />

          {/* Controls: View Toggle + Sort */}
          <InventoryControls
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            sort={sort}
            onSortChange={(newSort: SortOption) => setSort(newSort)}
            totalCars={cars.length}
          />
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin">
              <div className="h-12 w-12 border-4 border-bright-emerald border-t-transparent rounded-full" />
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 text-red-400 text-center">
            <p className="font-semibold">Failed to load inventory</p>
            <p className="text-sm mt-2">{error}</p>
          </div>
        )}

        {/* Grid/List View */}
        {!loading && !error && cars.length > 0 && (
          <InventoryGrid
            cars={cars}
            viewMode={viewMode}
            isFavorite={isFavorite}
            onToggleFavorite={toggleFavorite}
          />
        )}

        {/* Empty State */}
        {!loading && !error && cars.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white text-lg">No vehicles found</p>
          </div>
        )}

        {/* View Full Inventory CTA */}
        <div className="flex justify-center mt-16">
          <button className="px-8 py-[18px] border border-[#86e2b4] text-white text-xs font-bold uppercase tracking-wider rounded-[4px] hover:bg-[#86e2b4] hover:text-[#111111] transition-all">
            VIEW FULL INVENTORY
          </button>
        </div>
      </div>
    </section>
  );
}