import { useEffect, useRef } from 'react'
import { useAppKitAccount } from '@reown/appkit/react'
import { getDeviceInfo } from '../lib/device'
import { UNKNOWN_GEO, fetchGeoInfo } from '../lib/geo'
import { markInactive, upsertVisitor } from '../lib/visitorStore'

const HEARTBEAT_MS = 10_000

export function useVisitorTracker() {
  const { address, isConnected } = useAppKitAccount()
  const trackedWallet = useRef<string | null>(null)
  const geoReady = useRef<Awaited<ReturnType<typeof fetchGeoInfo>> | null>(
    null,
  )

  useEffect(() => {
    let cancelled = false

    function saveNow(
      wallet: string,
      active: boolean,
      geo: typeof UNKNOWN_GEO = geoReady.current ?? UNKNOWN_GEO,
    ) {
      upsertVisitor({
        walletAddress: wallet,
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
      trackedWallet.current = wallet
    }

    async function enrichGeo(wallet: string, active: boolean) {
      try {
        if (!geoReady.current) {
          geoReady.current = await fetchGeoInfo()
        }
        if (cancelled) return
        saveNow(wallet, active, geoReady.current)
      } catch {
        if (!cancelled) saveNow(wallet, active, UNKNOWN_GEO)
      }
    }

    if (!isConnected || !address) {
      if (trackedWallet.current) {
        markInactive(trackedWallet.current)
        trackedWallet.current = null
      }
      return
    }

    const active = document.visibilityState === 'visible'
    // Persist immediately so dashboard sees the visitor even if geo is slow/blocked
    saveNow(address, active)
    void enrichGeo(address, active)

    const heartbeat = window.setInterval(() => {
      if (!address) return
      const isActive =
        document.visibilityState === 'visible' && isConnected && !!address
      saveNow(address, isActive, geoReady.current ?? UNKNOWN_GEO)
      void enrichGeo(address, isActive)
    }, HEARTBEAT_MS)

    const onVisibility = () => {
      if (!address) return
      const isActive = document.visibilityState === 'visible'
      saveNow(address, isActive, geoReady.current ?? UNKNOWN_GEO)
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelled = true
      window.clearInterval(heartbeat)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [address, isConnected])
}
