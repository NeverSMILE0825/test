export type GeoInfo = {
  ip: string
  city: string
  region: string
  country: string
  latitude: number | null
  longitude: number | null
}

export async function fetchGeoInfo(): Promise<GeoInfo> {
  try {
    const res = await fetch('https://ipapi.co/json/', { cache: 'no-store' })
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
      const ipRes = await fetch('https://api.ipify.org?format=json', {
        cache: 'no-store',
      })
      const ipData = (await ipRes.json()) as { ip?: string }
      return {
        ip: ipData.ip ?? 'Unknown',
        city: 'Unknown',
        region: 'Unknown',
        country: 'Unknown',
        latitude: null,
        longitude: null,
      }
    } catch {
      return {
        ip: 'Unknown',
        city: 'Unknown',
        region: 'Unknown',
        country: 'Unknown',
        latitude: null,
        longitude: null,
      }
    }
  }
}
