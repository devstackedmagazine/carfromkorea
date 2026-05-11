import { Car, InventoryResponse } from "@/types/inventory";

const API_BASE_URL = "/api";

const LOG = {
  info: (msg: string, data?: any) => console.log(`✅ [API] ${msg}`, data || ''),
  error: (msg: string, data?: any) => console.error(`❌ [API] ${msg}`, data || ''),
  debug: (msg: string, data?: any) => console.log(`🔍 [API] ${msg}`, data || ''),
};

export async function fetchInventory(
  limit: number = 6,
  sort: string = "newest",
): Promise<Car[]> {
  const requestId = Math.random().toString(36).substring(7);
  LOG.info(`[${requestId}] Starting inventory fetch`, { limit, sort });

  try {
    const url = `${API_BASE_URL}/inventory?limit=${limit}&sort=${sort}`;
    LOG.debug(`[${requestId}] Request URL: ${url}`);
    
    const startTime = Date.now();
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 },
    });
    
    LOG.info(`[${requestId}] Response received`, { status: response.status, duration: Date.now() - startTime });

    if (!response.ok) {
      let errText = await response.text().catch(() => "");
      LOG.error(`[${requestId}] HTTP Error`, errText);
      throw new Error(`API Error: ${response.status} ${errText}`);
    }

    const data: InventoryResponse = await response.json();

    if (!data.success) {
      LOG.error(`[${requestId}] API returned success=false`, data.message);
      throw new Error(data.message || "Failed to fetch inventory");
    }

    LOG.info(`[${requestId}] ✅ SUCCESS - Fetched ${data.data.length} cars`);
    return data.data;
  } catch (error) {
    LOG.error(`[${requestId}] ❌ CRITICAL ERROR:`, error);
    throw error;
  }
}

export async function fetchCarDetails(carId: string): Promise<Car> {
  const response = await fetch(`${API_BASE_URL}/inventory/${carId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch car details");
  }
  const data: InventoryResponse = await response.json();
  return data.data[0];
}
