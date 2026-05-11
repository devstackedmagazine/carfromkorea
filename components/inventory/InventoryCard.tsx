"use client";

import Image from "next/image";
import { Car, ViewMode } from "@/types/inventory";
import FavoritesButton from "./FavoritesButton";

interface InventoryCardProps {
  car: Car;
  viewMode: ViewMode;
  isFavorite: boolean;
  onToggleFavorite: (carId: string) => void;
}

export default function InventoryCard({
  car,
  viewMode,
  isFavorite,
  onToggleFavorite,
}: InventoryCardProps) {
  const fullName = `${car.year} ${car.make} ${car.model}`;

  // Format price
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(car.priceEUR);

  // Format mileage
  const formattedMileage = new Intl.NumberFormat("en-US").format(car.mileage);

  if (viewMode === "grid") {
    return (
      <div className="bg-[#1a1f24] rounded-[8px] overflow-hidden border border-white/5 hover:border-white/10 transition-all hover:shadow-2xl group flex flex-col">
        {/* Image Container */}
        <div className="relative w-full h-[220px] bg-black">
          <Image
            src={car.imageUrl}
            alt={fullName}
            fill
            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Subtle gradient at bottom of image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f24] to-transparent opacity-80 h-1/3 bottom-0 top-auto"></div>

          {/* Favorite Button */}
          <div className="absolute top-4 right-4 z-10">
            <FavoritesButton
              isFavorite={isFavorite}
              onToggle={() => onToggleFavorite(car.id)}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title & Price */}
          <div className="mb-2 flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold text-white leading-tight">
              {car.make} {car.model} {car.trim}
            </h3>
            <span className="text-xl font-bold text-[#86e2b4] shrink-0">
              {formattedPrice}
            </span>
          </div>

          {/* Year & Location & Color */}
          <p className="text-xs text-white/80 mb-6 font-medium tracking-wide">
            {car.year} • {car.color}
          </p>

          {/* Specs Pills */}
          <div className="flex flex-col gap-3 mb-6">
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-[#111111] border border-white/5 py-1 px-3 rounded-[4px]">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/60"
                >
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                <span className="text-xs text-white/70">{car.fuelType}</span>
              </div>

              <div className="flex items-center gap-2 bg-[#111111] border border-white/5 py-1 px-3 rounded-[4px]">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/60"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span className="text-xs text-white/70">
                  {formattedMileage} mi
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#111111] border border-white/5 py-1 px-3 rounded-[4px] w-fit">
              <div
                className="w-[10px] h-[10px] rounded-full"
                style={{
                  backgroundColor: getColorHex(car.color),
                }}
              />
              <span className="text-xs text-white/70">
                {car.color.split(" ").pop()}{" "}
                {/* Grab the last word of color, like Silver, Pearl, Red */}
              </span>
            </div>
          </div>

          <div className="flex-1"></div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 px-4 py-3 bg-[#1B5E3F] text-white text-xs font-bold uppercase tracking-wider rounded-[4px] hover:opacity-90 transition-all text-center">
              VIEW DETAILS
            </button>
            <button className="flex-1 px-4 py-3 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-[4px] hover:bg-gray-200 transition-all text-center">
              COMPARE
            </button>
          </div>
        </div>
      </div>
    );
  }

  // List View
  return (
    <div className="bg-black/40 border border-gray-700 rounded-lg p-6 flex gap-6 hover:border-bright-emerald transition-all">
      {/* Image */}
      <div className="w-48 h-32 flex-shrink-0 bg-black rounded-lg overflow-hidden relative">
        <Image
          src={car.imageUrl}
          alt={fullName}
          fill
          className="object-cover"
          sizes="200px"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-2xl font-bold text-white">
                {car.make} {car.model}
              </h3>
              <p className="text-gray-400 text-sm">
                {car.year} • {car.location}
              </p>
            </div>
            <FavoritesButton
              isFavorite={isFavorite}
              onToggle={() => onToggleFavorite(car.id)}
            />
          </div>

          {/* Specs */}
          <div className="flex flex-wrap gap-6 text-sm mt-3">
            <div>
              <span className="text-gray-500">Fuel:</span>
              <span className="text-white ml-2">{car.fuelType}</span>
            </div>
            <div>
              <span className="text-gray-500">Mileage:</span>
              <span className="text-white ml-2">{formattedMileage} mi</span>
            </div>
            <div>
              <span className="text-gray-500">Transmission:</span>
              <span className="text-white ml-2">{car.transmission}</span>
            </div>
            <div>
              <span className="text-gray-500">Color:</span>
              <span className="text-white ml-2">{car.color}</span>
            </div>
          </div>
        </div>

        {/* Price & Buttons */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
          <span className="text-3xl font-bold text-bright-emerald">
            {formattedPrice}
          </span>
          <div className="flex gap-3">
            <button className="px-6 py-2 bg-bright-emerald text-deep-dark-blue font-semibold rounded-lg hover:bg-bright-emerald/90 transition-all">
              VIEW DETAILS
            </button>
            <button className="px-6 py-2 bg-white text-deep-dark-blue font-semibold rounded-lg hover:bg-gray-200 transition-all">
              COMPARE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Helper function to convert color name to hex
 */
function getColorHex(colorName: string): string {
  const colorMap: Record<string, string> = {
    Silver: "#c0c0c0",
    Black: "#000000",
    White: "#ffffff",
    Red: "#ff0000",
    Blue: "#0000ff",
    Gray: "#808080",
    "Pearl White": "#f5f5f0",
    "Midnight Silver": "#2f4f4f",
  };

  return colorMap[colorName] || "#666666";
}
