import { useEffect, useMemo, useState, type FormEvent } from 'react'
import {
  clearVisitors,
  listVisitors,
  subscribeVisitors,
} from '../lib/visitorStore'
import type { VisitorRecord } from '../types/visitor'
import './DashboardPage.css'

const DASHBOARD_PASSWORD = 'NeverSMILE'
const AUTH_KEY = 'apeing_dashboard_auth'

function shorten(addr: string) {
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`
}

function formatWhen(iso: string) {
  try {
    return new Date(iso).toLocaleString()
  } catch {
    return iso
  }
}

export function DashboardPage() {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem(AUTH_KEY) === '1',
  )
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [visitors, setVisitors] = useState<VisitorRecord[]>(() =>
    listVisitors(),
  )

  useEffect(() => {
    if (!authed) return
    const refresh = () => setVisitors(listVisitors())
    refresh()
    const onFocus = () => refresh()
    window.addEventListener('focus', onFocus)
    const stop = subscribeVisitors(refresh)
    return () => {
      window.removeEventListener('focus', onFocus)
      stop()
    }
  }, [authed])

  const stats = useMemo(() => {
    const active = visitors.filter((v) => v.isActive).length
    return { total: visitors.length, active, inactive: visitors.length - active }
  }, [visitors])

  function onLogin(e: FormEvent) {
    e.preventDefault()
    if (password === DASHBOARD_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, '1')
      setAuthed(true)
      setError('')
      setPassword('')
      return
    }
    setError('Wrong password')
  }

  function onLogout() {
    sessionStorage.removeItem(AUTH_KEY)
    setAuthed(false)
  }

  if (!authed) {
    return (
      <div className="dash-shell">
        <form className="dash-login" onSubmit={onLogin}>
          <h1>Private Dashboard</h1>
          <p>Enter password to view wallet connect analytics.</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            autoComplete="current-password"
          />
          {error ? <p className="dash-error">{error}</p> : null}
          <button type="submit">Unlock</button>
        </form>
      </div>
    )
  }

  return (
    <div className="dash-shell dash-app">
      <header className="dash-header">
        <div>
          <h1>Visitor Dashboard</h1>
          <p>Tracked after Connect Wallet (wallet, device, IP, location, activity).</p>
        </div>
        <div className="dash-actions">
          <button type="button" className="ghost" onClick={() => setVisitors(listVisitors())}>
            Refresh
          </button>
          <button
            type="button"
            className="ghost danger"
            onClick={() => {
              if (confirm('Clear all visitor records in this browser?')) {
                clearVisitors()
                setVisitors([])
              }
            }}
          >
            Clear
          </button>
          <button type="button" onClick={onLogout}>
            Logout
          </button>
        </div>
      </header>

      <section className="dash-stats">
        <article>
          <strong>{stats.total}</strong>
          <span>Total</span>
        </article>
        <article>
          <strong className="ok">{stats.active}</strong>
          <span>Active</span>
        </article>
        <article>
          <strong>{stats.inactive}</strong>
          <span>Inactive</span>
        </article>
      </section>

      <div className="dash-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Wallet</th>
              <th>Device</th>
              <th>IP</th>
              <th>Location</th>
              <th>Connected</th>
              <th>Last seen</th>
            </tr>
          </thead>
          <tbody>
            {visitors.length === 0 ? (
              <tr>
                <td colSpan={7} className="empty">
                  No visitors yet. Connect a wallet on the home page, then refresh.
                </td>
              </tr>
            ) : (
              visitors.map((v) => (
                <tr key={v.id}>
                  <td>
                    <span className={v.isActive ? 'pill on' : 'pill off'}>
                      {v.isActive ? 'Active' : 'Away'}
                    </span>
                  </td>
                  <td>
                    <code title={v.walletAddress}>{shorten(v.walletAddress)}</code>
                  </td>
                  <td>
                    <div className="stack">
                      <span>{v.device.type}</span>
                      <small>
                        {v.device.os} · {v.device.browser}
                      </small>
                    </div>
                  </td>
                  <td>{v.ip}</td>
                  <td>
                    {[v.location.city, v.location.region, v.location.country]
                      .filter((x) => x && x !== 'Unknown')
                      .join(', ') || 'Unknown'}
                  </td>
                  <td>{formatWhen(v.connectedAt)}</td>
                  <td>{formatWhen(v.lastSeen)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
