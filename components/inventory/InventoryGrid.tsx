import { Car, ViewMode } from "@/types/inventory";
import InventoryCard from "./InventoryCard";

interface InventoryGridProps {
  cars: Car[];
  viewMode: ViewMode;
  isFavorite: (carId: string) => boolean;
  onToggleFavorite: (carId: string) => void;
}

export default function InventoryGrid({
  cars,
  viewMode,
  isFavorite,
  onToggleFavorite,
}: InventoryGridProps) {
  return (
    <div
      className={
        viewMode === "grid"
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          : "flex flex-col gap-4"
      }
    >
      {cars.map((car) => (
        <InventoryCard
          key={car.id}
          car={car}
          viewMode={viewMode}
          isFavorite={isFavorite(car.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
