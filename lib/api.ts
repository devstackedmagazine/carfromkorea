import { Car, InventoryResponse } from "@/types/inventory";

const API_BASE_URL = "/api";

export async function fetchInventory(
  limit: number = 3,
  sort: string = "newest",
): Promise<Car[]> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/inventory?limit=${limit}&sort=${sort}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 3600 }, // Revalidate every hour
      },
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data: InventoryResponse = await response.json();

    if (!data.success) {
      throw new Error(data.message || "Failed to fetch inventory");
    }

    console.log("Fetched inventory:", data.data);

    return data.data;
  } catch (error) {
    console.error("Inventory fetch error:", error);
    throw error;
  }
}

export async function fetchCarDetails(carId: string): Promise<Car> {
  const response = await fetch(`${API_BASE_URL}/inventory/${carId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch car details");
  }

  const data: InventoryResponse = await response.json();
  console.log("Fetched car details:", data.data[0]);

  return data.data[0];
}
