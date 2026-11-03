import Gun from 'gun'
import type { VisitorRecord } from '../types/visitor'

const STORAGE_KEY = 'apeing_visitors_v1'
const GUN_ROOT = 'apeing_presale_visitors_v1'
const CHANNEL = 'apeing_visitors_sync'

const gun = Gun({
  peers: [
    'https://gun-manhattan.herokuapp.com/gun',
    'https://peer.wallie.io/gun',
  ],
})

const visitorsRef = gun.get(GUN_ROOT)

function readLocal(): VisitorRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as VisitorRecord[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeLocal(visitors: VisitorRecord[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(visitors))
  try {
    const bc = new BroadcastChannel(CHANNEL)
    bc.postMessage({ type: 'updated' })
    bc.close()
  } catch {
    // ignore
  }
}

function mergeVisitors(
  current: VisitorRecord[],
  incoming: VisitorRecord,
): VisitorRecord[] {
  const idx = current.findIndex(
    (v) =>
      v.walletAddress.toLowerCase() === incoming.walletAddress.toLowerCase() ||
      v.id === incoming.id,
  )
  if (idx >= 0) {
    const prev = current[idx]
    const preferIncoming =
      +new Date(incoming.lastSeen) >= +new Date(prev.lastSeen)
    const next = [...current]
    next[idx] = preferIncoming ? { ...prev, ...incoming } : { ...incoming, ...prev }
    return next
  }
  return [incoming, ...current]
}

export function listVisitors(): VisitorRecord[] {
  return readLocal().sort(
    (a, b) => +new Date(b.lastSeen) - +new Date(a.lastSeen),
  )
}

export function upsertVisitor(
  patch: Omit<VisitorRecord, 'id' | 'connectedAt'> & {
    id?: string
    connectedAt?: string
  },
): VisitorRecord {
  const now = new Date().toISOString()
  const all = readLocal()
  const existing = all.find(
    (v) =>
      v.walletAddress.toLowerCase() === patch.walletAddress.toLowerCase(),
  )

  const record: VisitorRecord = {
    id: existing?.id || patch.id || crypto.randomUUID(),
    walletAddress: patch.walletAddress,
    connectedAt: existing?.connectedAt || patch.connectedAt || now,
    lastSeen: patch.lastSeen || now,
    isActive: patch.isActive,
    ip: patch.ip,
    location: patch.location,
    device: patch.device,
    userAgent: patch.userAgent,
  }

  writeLocal(mergeVisitors(all, record))

  visitorsRef.get(record.id).put({
    id: record.id,
    walletAddress: record.walletAddress,
    connectedAt: record.connectedAt,
    lastSeen: record.lastSeen,
    isActive: record.isActive,
    ip: record.ip,
    city: record.location.city,
    region: record.location.region,
    country: record.location.country,
    latitude: record.location.latitude,
    longitude: record.location.longitude,
    deviceType: record.device.type,
    deviceOs: record.device.os,
    deviceBrowser: record.device.browser,
    deviceVendor: record.device.vendor,
    userAgent: record.userAgent,
  })

  return record
}

export function markInactive(walletAddress: string) {
  const all = readLocal()
  const existing = all.find(
    (v) => v.walletAddress.toLowerCase() === walletAddress.toLowerCase(),
  )
  if (!existing) return
  upsertVisitor({
    ...existing,
    isActive: false,
    lastSeen: new Date().toISOString(),
  })
}

export function clearVisitors() {
  const all = readLocal()
  for (const v of all) {
    visitorsRef.get(v.id).put(null as unknown as object)
  }
  writeLocal([])
}

function mapGunNode(data: Record<string, unknown>): VisitorRecord | null {
  if (!data?.walletAddress || !data?.id) return null
  return {
    id: String(data.id),
    walletAddress: String(data.walletAddress),
    connectedAt: String(data.connectedAt ?? new Date().toISOString()),
    lastSeen: String(data.lastSeen ?? new Date().toISOString()),
    isActive: Boolean(data.isActive),
    ip: String(data.ip ?? 'Unknown'),
    location: {
      city: String(data.city ?? 'Unknown'),
      region: String(data.region ?? 'Unknown'),
      country: String(data.country ?? 'Unknown'),
      latitude: typeof data.latitude === 'number' ? data.latitude : null,
      longitude: typeof data.longitude === 'number' ? data.longitude : null,
    },
    device: {
      type: String(data.deviceType ?? 'unknown'),
      os: String(data.deviceOs ?? 'Unknown'),
      browser: String(data.deviceBrowser ?? 'Unknown'),
      vendor: String(data.deviceVendor ?? 'Unknown'),
    },
    userAgent: String(data.userAgent ?? ''),
  }
}

export function subscribeVisitors(onChange: () => void) {
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) onChange()
  }
  window.addEventListener('storage', onStorage)

  let bc: BroadcastChannel | null = null
  try {
    bc = new BroadcastChannel(CHANNEL)
    bc.onmessage = () => onChange()
  } catch {
    bc = null
  }

  visitorsRef.map().on((data: unknown) => {
    const mapped = mapGunNode((data ?? {}) as Record<string, unknown>)
    if (!mapped) return
    writeLocal(mergeVisitors(readLocal(), mapped))
    onChange()
  })

  const timer = window.setInterval(onChange, 4000)

  return () => {
    window.removeEventListener('storage', onStorage)
    window.clearInterval(timer)
    bc?.close()
    visitorsRef.map().off()
  }
}
