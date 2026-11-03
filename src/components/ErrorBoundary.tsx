import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { error: Error | null }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('UI crash', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'grid',
            placeItems: 'center',
            background: '#9fc27e',
            padding: 24,
            fontFamily: 'Segoe UI, sans-serif',
          }}
        >
          <div
            style={{
              background: '#fff8e7',
              border: '4px solid #111',
              borderRadius: 18,
              padding: 24,
              maxWidth: 480,
              boxShadow: '8px 8px 0 #111',
            }}
          >
            <h1 style={{ marginTop: 0 }}>UI failed to render</h1>
            <p style={{ wordBreak: 'break-word' }}>{this.state.error.message}</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                border: '3px solid #111',
                borderRadius: 10,
                background: '#ffe566',
                fontWeight: 800,
                padding: '10px 16px',
                cursor: 'pointer',
              }}
            >
              Reload
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
