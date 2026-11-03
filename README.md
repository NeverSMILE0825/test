# Connect Wallet Demo

Presale-style site with a **CONNECT** button that opens a wallet list modal (same pattern as [presale.apeing.com](https://presale.apeing.com/)), powered by [Reown AppKit](https://docs.reown.com/appkit/react/core/installation) + Wagmi.

**Live site:** https://neversmile0825.github.io/test/

Pushes to `main` auto-deploy via GitHub Actions → GitHub Pages.

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

In [Reown Dashboard](https://dashboard.reown.com), allow origin `https://neversmile0825.github.io` for your Project ID.

## How it works

- Click **CONNECT** → AppKit modal lists WalletConnect, MetaMask, Rabby, Phantom, Trust, Coinbase/Base, and more
- Installed browser extensions show an **INSTALLED** badge
- Selecting a wallet connects it via Wagmi

## Stack

- Vite + React + TypeScript
- `@reown/appkit` + `@reown/appkit-adapter-wagmi`
- `wagmi` + `viem` + `@tanstack/react-query`
