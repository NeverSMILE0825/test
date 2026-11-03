import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, bsc, base, arbitrum } from '@reown/appkit/networks'
import type { AppKitNetwork } from '@reown/appkit/networks'

// Get a free Project ID at https://dashboard.reown.com
export const projectId =
  import.meta.env.VITE_PROJECT_ID || '8bd967a149ecc56b43d9725e728d7153'

export const metadata = {
  name: 'Apeing Presale',
  description: 'Connect wallet to join the presale',
  url: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5173',
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
}

export const networks = [mainnet, bsc, base, arbitrum] as [
  AppKitNetwork,
  ...AppKitNetwork[],
]

export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
})
