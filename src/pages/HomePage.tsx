import { useAppKitAccount } from '@reown/appkit/react'
import { ConnectButton } from '../components/ConnectButton'
import { useVisitorTracker } from '../hooks/useVisitorTracker'
import '../App.css'

export function HomePage() {
  const { address, isConnected } = useAppKitAccount()
  useVisitorTracker()

  return (
    <div className="page">
      <header className="nav">
        <nav className="nav-links">
          <a href="#presale">Join Presale</a>
          <a href="#referral">Referral</a>
          <a href="#stake">Stake</a>
        </nav>

        <div className="brand" aria-label="Brand">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">APEING</span>
        </div>

        <div className="nav-right">
          <a href="#wars">Ape Wars</a>
          <a href="#docs">Whitepaper</a>
          <ConnectButton />
        </div>
      </header>

      <main className="hero-section" id="presale">
        <div className="presale-card">
          <p className="eyebrow">Presale is Live</p>
          <h1>We're DEGENS, We're Not Thinking, We're APEING!</h1>

          <div className="timer" aria-label="Countdown">
            {['Days', 'Hours', 'Minutes', 'Seconds'].map((label) => (
              <div key={label} className="timer-cell">
                <strong>00</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="buy-panel">
            <p className="buy-label">Buy With</p>
            <div className="token-row">
              {['ETH', 'BSC', 'USDT', 'USDC'].map((token) => (
                <button key={token} type="button" className="token-chip">
                  {token}
                </button>
              ))}
            </div>

            <div className="wallet-status">
              {isConnected ? (
                <>
                  <p className="status-ok">Wallet connected</p>
                  <code>{address}</code>
                </>
              ) : (
                <>
                  <p>Connect a wallet to buy $APEING</p>
                  <ConnectButton />
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
