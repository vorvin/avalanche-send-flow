import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { avalancheFuji, mainnet } from 'wagmi/chains'

export const chains = [avalancheFuji, mainnet] as const

export const config = getDefaultConfig({
  appName: 'Avalanche Demo',
  projectId: 'YOUR_PROJECT_ID',
  chains,
  ssr: true
})
