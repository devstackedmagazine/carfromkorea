/**
 * Car Inventory Data Type
 * Matches API response structure
 */
export interface Car {
  id: string;
  make: string;
  model: string;
  trim: string;
  year: number;
  mileage: number;
  priceKRW: number;
  priceEUR: number;
  imageUrl: string;
  location: string;
  transmission: string;
  fuelType: string;
  color: string;
  engine: string;
  bodyType: string;
}

export interface InventoryResponse {
  success: boolean;
  data: Car[];
  total: number;
  message?: string;
}

export type ViewMode = 'grid' | 'list';
export type SortOption = 'newest' | 'price-low' | 'price-high' | 'mileage-low';