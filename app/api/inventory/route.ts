import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const LOG = {
  info: (msg: string, data?: any) =>
    console.log(`✅ [ROUTE] ${msg}`, data || ""),
  error: (msg: string, data?: any) =>
    console.error(`❌ [ROUTE] ${msg}`, data || ""),
  debug: (msg: string, data?: any) =>
    console.log(`🔍 [ROUTE] ${msg}`, data || ""),
};

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
  const requestId = Math.random().toString(36).substring(7);
  LOG.info(`[${requestId}] 🚀 Next.js API route called`);

  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit") || "6";
  const sort = searchParams.get("sort") || "newest";

  const apiKey = process.env.CARS_API_KEY;

  if (!apiKey) {
    LOG.error(`[${requestId}] MISSING: CARS_API_KEY in environment variables!`);
    return NextResponse.json(
      {
        success: false,
        message: "API Key is missing. Add CARS_API_KEY to Vercel and Redeploy.",
      },
      { status: 401 },
    );
  }

  LOG.debug(`[${requestId}] Environment variables OK`, {
    keyPrefix: apiKey.substring(0, 10) + "...",
  });

  try {
    const params = new URLSearchParams();
    params.append("page_size", limit);

    const url = `https://api.carapis.com/apix/catalog_private/vehicles/?${params.toString()}`;
    LOG.info(`[${requestId}] Calling external API`, { url });

    const startTime = Date.now();
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "CarFromKoreaa-API/1.0 (NextJS-Backend)",
        Accept: "application/json",
      },
    });

    LOG.info(`[${requestId}] External API response`, {
      status: response.status,
      duration: Date.now() - startTime,
    });

    if (!response.ok) {
      const errText = await response.text();
      LOG.error(`[${requestId}] External API error`, errText);
      return NextResponse.json(
        {
          success: false,
          message: `External API failed: ${response.status}`,
          data: [],
        },
        { status: response.status },
      );
    }

    const apiData = await response.json();
    LOG.debug(`[${requestId}] JSON parsed successfully`);

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

    LOG.info(
      `[${requestId}] ✅ SUCCESS: Fetched ${vehicles.length} cars globally`,
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
    LOG.error(`[${requestId}] ❌ UNHANDLED ERROR`, error);
    return NextResponse.json(
      { success: false, data: [], message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
