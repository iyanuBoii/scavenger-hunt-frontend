# Scavenger Hunt — Frontend

The web interface for the StarkNet-powered scavenger hunt game, built with **Next.js** and **Tailwind CSS**. Players can browse ecosystems (StarkNet, Stellar, Web3, Worldcoin), tackle challenges, track their progress, earn NFTs, and manage their profile — all from a single web experience.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + custom fonts (Orbitron, Space Grotesk, Geist)
- **Wallet Integration:** MetaMask, Coinbase Wallet, Trust Wallet
- **Language:** JavaScript / TypeScript

## Features

- **Homepage** — Hero, featured challenges, how it works, ecosystem spotlight, FAQ, testimonials
- **Challenges** — Browse and filter challenges, view individual challenge details
- **Dashboard** — Personal stats, ongoing challenges, NFT gallery, ecosystem overview, notifications, settings
- **Auth** — Sign-up / sign-in with email or Google; wallet connect flow
- **NFT Gallery** — View earned NFT rewards
- **Ecosystems** — StarkNet, Stellar, Web3, Worldcoin support
- **Multi-wallet Support** — MetaMask, Coinbase Wallet, Trust Wallet connections

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
```

### Environment Setup

```bash
cp .env.example .env
```

### Running the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── (auth)/              # Sign-in & sign-up pages
├── (root)/              # Public pages (home, challenges, about, contact)
└── dashboard/           # Protected dashboard (challenges, NFTs, ecosystems, settings)

components/
├── homepage/            # Landing page sections (Hero, FAQ, Features, etc.)
├── challenges/          # Challenge cards, progress, steps
├── dashboard/           # Sidebar, navbar, NFT showcase
├── wallet/              # Wallet connection UI
└── ui/                  # Reusable UI components

lib/                     # Utilities, mock data, types, wallet hooks
public/
├── images/              # App graphics and icons
├── ecosystems/          # Ecosystem logos (StarkNet, Stellar, Web3, Worldcoin)
└── nfts/                # NFT preview images
```

## Related Repositories

- [scavenger-hunt-backend](https://github.com/LadderMine/scavenger-hunt-backend) — NestJS API server
- [scavenger-hunt-contract](https://github.com/LadderMine/scavenger-hunt-contract) — Cairo smart contracts on StarkNet

## License

MIT