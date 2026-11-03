export type VisitorRecord = {
  id: string
  walletAddress: string
  connectedAt: string
  lastSeen: string
  isActive: boolean
  ip: string
  location: {
    city: string
    region: string
    country: string
    latitude: number | null
    longitude: number | null
  }
  device: {
    type: string
    os: string
    browser: string
    vendor: string
  }
  userAgent: string
}
