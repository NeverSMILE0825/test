export type GeoInfo = {
  ip: string
  city: string
  region: string
  country: string
  latitude: number | null
  longitude: number | null
}

export const UNKNOWN_GEO: GeoInfo = {
  ip: 'Unknown',
  city: 'Unknown',
  region: 'Unknown',
  country: 'Unknown',
  latitude: null,
  longitude: null,
}

async function fetchWithTimeout(
  url: string,
  ms = 4000,
): Promise<Response> {
  const controller = new AbortController()
  const timer = window.setTimeout(() => controller.abort(), ms)
  try {
    return await fetch(url, { cache: 'no-store', signal: controller.signal })
  } finally {
    window.clearTimeout(timer)
  }
}

export async function fetchGeoInfo(): Promise<GeoInfo> {
  try {
    const res = await fetchWithTimeout('https://ipapi.co/json/')
    if (!res.ok) throw new Error(`geo ${res.status}`)
    const data = (await res.json()) as Record<string, unknown>
    return {
      ip: String(data.ip ?? 'Unknown'),
      city: String(data.city ?? 'Unknown'),
      region: String(data.region ?? data.region_code ?? 'Unknown'),
      country: String(data.country_name ?? data.country ?? 'Unknown'),
      latitude: typeof data.latitude === 'number' ? data.latitude : null,
      longitude: typeof data.longitude === 'number' ? data.longitude : null,
    }
  } catch {
    try {
      const ipRes = await fetchWithTimeout('https://api.ipify.org?format=json')
      const ipData = (await ipRes.json()) as { ip?: string }
      return {
        ...UNKNOWN_GEO,
        ip: ipData.ip ?? 'Unknown',
      }
    } catch {
      return UNKNOWN_GEO
    }
  }
}
