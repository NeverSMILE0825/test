import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, type Config } from 'wagmi'
import { createAppKit } from '@reown/appkit/react'
import { metadata, networks, projectId, wagmiAdapter } from './config/appkit'
import { ErrorBoundary } from './components/ErrorBoundary'
import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient()

try {
  createAppKit({
    adapters: [wagmiAdapter],
    networks,
    projectId,
    metadata,
    themeMode: 'light',
    allWallets: 'SHOW',
    featuredWalletIds: [
      'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
      'a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393',
      '18388be70fc66fb91f04393d0dc0831c9d464975c40dc0d31a05a5326971ccfd',
      '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
      'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3bfb96bc6f00f96',
    ],
    features: {
      analytics: false,
      email: false,
      socials: false,
      onramp: false,
      swaps: false,
    },
  })
} catch (error) {
  console.error('AppKit init failed', error)
}

const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('Root element #root not found')
}

createRoot(rootEl).render(
  <StrictMode>
    <ErrorBoundary>
      <WagmiProvider config={wagmiAdapter.wagmiConfig as Config}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </WagmiProvider>
    </ErrorBoundary>
  </StrictMode>,
)
