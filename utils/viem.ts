import { Chain } from 'viem'

export function getChainExplorer(chain: Chain) {
  return chain.blockExplorers?.default.url
}
