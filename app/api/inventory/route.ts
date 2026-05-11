import { NextResponse } from "next/server";

const DEFAULT_IMAGE_URL = "/images/mock-car.jpg";

function mapTransmissionType(t: string) {
  if (!t) return "Automatic";
  return t.toLowerCase().includes("man") ? "Manual" : "Automatic";
}

function mapFuelType(f?: string) {
  if (!f) return "Gasoline";
  return f;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit") || "50";
  const sort = searchParams.get("sort") || "newest";

  const apiKey = process.env.CARS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { success: false, message: "API Key is missing" },
      { status: 401 },
    );
  }

  try {
    const params = new URLSearchParams();
    params.append("page_size", limit);
    // You could map 'sort' to the Carapis equivalent if available

    const url = `https://api.carapis.com/apix/catalog_private/vehicles/?${params.toString()}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      console.error(`Carapis API error: ${response.status}`);
      return NextResponse.json({
        success: false,
        data: [],
        pagination: { total: 0, page: 1, limit: Number(limit), pages: 1 },
      });
    }

    const apiData = await response.json();
    console.log("Fetched Cars Data:");
    console.log(JSON.stringify(apiData, null, 2));

    // Transform Carapis response to our internal format
    const vehicles = (apiData.results || []).map(
      (v: Record<string, unknown>) => {
        const vBrand = v.brand as Record<string, string> | string;
        const vModel = v.model as Record<string, string> | string;
        return {
          id: String(v.id || Math.random()),
          make:
            (typeof vBrand === "object" ? vBrand?.name : vBrand) || "Unknown",
          model:
            (typeof vModel === "object" ? vModel?.name : vModel) || "Unknown",
          trim: String(v.trim || ""),
          year: Number(v.year || 2023),
          mileage: Number(v.mileage || 0),
          priceKRW: parseFloat(String(v.price)) || 0,
          priceEUR:
            Math.round((parseFloat(String(v.price)) || 0) / 1445) ||
            (v.price_usd ? Math.round(Number(v.price_usd) * 0.92) : 0),
          imageUrl: String(v.main_photo_url || DEFAULT_IMAGE_URL),
          location: String(v.region || "Seoul"),
          transmission: mapTransmissionType(String(v.transmission || "")),
          fuelType: mapFuelType(v.fuel_type as string | undefined),
          color: String(v.color || ""),
          engine: v.engine_cc ? `${v.engine_cc}cc` : "",
          bodyType: String(v.body_type || "Sedan"),
          encarId: `ENC-${String(v.id).split("-")[0]}`,
          encarUrl: String(v.public_url || ""),
          seller: String(v.seller_type || ""),
        };
      },
    );

    return NextResponse.json({
      success: true,
      data: vehicles,
      pagination: {
        total: apiData.count || vehicles.length,
        page: apiData.page || 1,
        limit: apiData.page_size || Number(limit),
        pages: apiData.pages || 1,
      },
    });
  } catch (error) {
    console.error("Error fetching inventory:", error);
    return NextResponse.json(
      { success: false, data: [], message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
