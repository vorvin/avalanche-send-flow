import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { coinbaseWallet } from '@rainbow-me/rainbowkit/wallets'
import { avalancheFuji, mainnet } from 'wagmi/chains'

export const chains = [avalancheFuji, mainnet] as const

export const config = getDefaultConfig({
  appName: 'Avalanche Demo',
  projectId: 'YOUR_PROJECT_ID',
  chains,
  wallets: [
    {
      groupName: 'Recommended',
      wallets: [coinbaseWallet]
    }
  ],
  ssr: true
})
