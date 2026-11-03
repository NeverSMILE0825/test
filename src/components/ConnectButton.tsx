import { useAppKit, useAppKitAccount } from '@reown/appkit/react'

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function ConnectButton() {
  const { open } = useAppKit()
  const { address, isConnected } = useAppKitAccount()

  return (
    <button
      type="button"
      className="connect-btn"
      onClick={() => open({ view: isConnected ? 'Account' : 'Connect' })}
    >
      {isConnected && address ? shortenAddress(address) : 'CONNECT'}
    </button>
  )
}
