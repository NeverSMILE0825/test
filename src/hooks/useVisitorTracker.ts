import { useEffect, useRef } from 'react'
import { useAppKitAccount } from '@reown/appkit/react'
import { getDeviceInfo } from '../lib/device'
import { fetchGeoInfo } from '../lib/geo'
import { markInactive, upsertVisitor } from '../lib/visitorStore'

const HEARTBEAT_MS = 15_000

export function useVisitorTracker() {
  const { address, isConnected } = useAppKitAccount()
  const trackedWallet = useRef<string | null>(null)
  const geoReady = useRef<Awaited<ReturnType<typeof fetchGeoInfo>> | null>(
    null,
  )

  useEffect(() => {
    let cancelled = false

    async function ensureGeo() {
      if (geoReady.current) return geoReady.current
      const geo = await fetchGeoInfo()
      if (!cancelled) geoReady.current = geo
      return geo
    }

    async function record(active: boolean) {
      if (!address) return
      const geo = await ensureGeo()
      if (cancelled) return
      upsertVisitor({
        walletAddress: address,
        lastSeen: new Date().toISOString(),
        isActive: active,
        ip: geo.ip,
        location: {
          city: geo.city,
          region: geo.region,
          country: geo.country,
          latitude: geo.latitude,
          longitude: geo.longitude,
        },
        device: getDeviceInfo(),
        userAgent: navigator.userAgent,
      })
      trackedWallet.current = address
    }

    if (!isConnected || !address) {
      if (trackedWallet.current) {
        markInactive(trackedWallet.current)
        trackedWallet.current = null
      }
      return
    }

    void record(document.visibilityState === 'visible')

    const heartbeat = window.setInterval(() => {
      const active =
        document.visibilityState === 'visible' && isConnected && !!address
      void record(active)
    }, HEARTBEAT_MS)

    const onVisibility = () => {
      void record(document.visibilityState === 'visible')
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelled = true
      window.clearInterval(heartbeat)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [address, isConnected])
}
