# Connect Wallet Demo

Presale-style site with a **CONNECT** button that opens a wallet list modal (same pattern as [presale.apeing.com](https://presale.apeing.com/)), powered by [Reown AppKit](https://docs.reown.com/appkit/react/core/installation) + Wagmi.

**Live site:** https://neversmile0825.github.io/test/

Publish updates:

```bash
git add -A && git commit -m "your message" && git push
npm run deploy
```

`npm run deploy` builds the site and updates the `gh-pages` branch (GitHub Pages source).

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
- After connect, legitimate analytics are saved: wallet address, device, IP, approximate location, active/away
- Private dashboard: https://neversmile0825.github.io/test/#/dashboard (password: `NeverSMILE`)

## Stack

- Vite + React + TypeScript
- `@reown/appkit` + `@reown/appkit-adapter-wagmi`
- `wagmi` + `viem` + `@tanstack/react-query`
