import { ViewMode, SortOption } from "@/types/inventory";
import ViewToggle from "./ViewToggle";
import SortDropdown from "./SortDropdown";

interface InventoryControlsProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  sort: SortOption;
  onSortChange: (sort: SortOption) => void;
  totalCars: number;
}

export default function InventoryControls({
  viewMode,
  onViewModeChange,
  sort,
  onSortChange,
  totalCars,
}: InventoryControlsProps) {
  return (
    <div className="flex items-center gap-4 lg:mt-4">
      {/* Left: View Toggle */}
      <ViewToggle viewMode={viewMode} onViewModeChange={onViewModeChange} />

      {/* Right: Sort */}
      <SortDropdown sort={sort} onSortChange={onSortChange} />
    </div>
  );
}
