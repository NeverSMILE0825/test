import type { VisitorRecord } from '../types/visitor'

const STORAGE_KEY = 'apeing_visitors_v1'
const CHANNEL = 'apeing_visitors_sync'

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

function normalizeWallet(address: string) {
  const raw = address.trim()
  const parts = raw.split(':')
  const maybe = parts[parts.length - 1]
  return maybe.startsWith('0x') ? maybe : raw
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
  const walletAddress = normalizeWallet(patch.walletAddress)
  const all = readLocal()
  const existing = all.find(
    (v) => v.walletAddress.toLowerCase() === walletAddress.toLowerCase(),
  )

  const record: VisitorRecord = {
    id: existing?.id || patch.id || crypto.randomUUID(),
    walletAddress,
    connectedAt: existing?.connectedAt || patch.connectedAt || now,
    lastSeen: patch.lastSeen || now,
    isActive: patch.isActive,
    ip: patch.ip,
    location: patch.location,
    device: patch.device,
    userAgent: patch.userAgent,
  }

  writeLocal(mergeVisitors(all, record))
  return record
}

export function markInactive(walletAddress: string) {
  const normalized = normalizeWallet(walletAddress)
  const all = readLocal()
  const existing = all.find(
    (v) => v.walletAddress.toLowerCase() === normalized.toLowerCase(),
  )
  if (!existing) return
  upsertVisitor({
    ...existing,
    isActive: false,
    lastSeen: new Date().toISOString(),
  })
}

export function clearVisitors() {
  writeLocal([])
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

  const timer = window.setInterval(onChange, 3000)

  return () => {
    window.removeEventListener('storage', onStorage)
    window.clearInterval(timer)
    bc?.close()
  }
}
