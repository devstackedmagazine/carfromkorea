"use client";
import { useState, useEffect } from "react";
import { Car, SortOption } from "@/types/inventory";
import { fetchInventory } from "@/lib/api";

interface UseInventoryOptions {
  limit?: number;
  initialSort?: SortOption;
}

export function useInventory({
  limit = 6,
  initialSort = "newest",
}: UseInventoryOptions = {}) {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sort, setSort] = useState<SortOption>(initialSort);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  useEffect(() => {
    const loadInventory = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchInventory(limit, sort);
        setCars(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        setError(message);
        console.error("Failed to load inventory:", message);
      } finally {
        setLoading(false);
      }
    };

    loadInventory();
  }, [limit, sort]);

  const toggleFavorite = (carId: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(carId)) {
        newFavorites.delete(carId);
      } else {
        newFavorites.add(carId);
      }

      // Optional: Persist to localStorage
      localStorage.setItem(
        "favoriteCars",
        JSON.stringify(Array.from(newFavorites)),
      );

      return newFavorites;
    });
  };

  /**
   * Load favorites from localStorage on mount
   */
  useEffect(() => {
    const saved = localStorage.getItem("favoriteCars");
    if (saved) {
      setFavorites(new Set(JSON.parse(saved)));
    }
  }, []);

  return {
    cars,
    loading,
    error,
    sort,
    setSort,
    favorites,
    toggleFavorite,
    isFavorite: (carId: string) => favorites.has(carId),
  };
}
