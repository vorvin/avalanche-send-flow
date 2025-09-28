import { erc20Abi } from 'viem'
import { avalancheFuji } from 'viem/chains'
import { Box } from '~/components/Box/Box'
import { Navbar } from '~/components/Navbar/Navbar'
import { Send } from '~/components/Send/Send'

const USDC_TOKEN = {
  address: '0x5425890298aed601595a70AB815c96711a31Bc65',
  name: 'USD Coin',
  symbol: 'USDC',
  decimals: 6,
  logo: '/usdc.png',
  abi: erc20Abi
} as const

export default function SendPage() {
  return (
    <Box minHeight="screen" display="flex" flexDirection="column" alignItems="center" flex="1">
      <Navbar />

      <Box
        display="flex"
        flexDirection="column"
        width="full"
        maxWidth="500"
        flex="1"
        justifyContent="center"
        padding="20"
      >
        <Box display="flex" flexDirection="column" flex="1" maxHeight="700">
          <Send token={USDC_TOKEN} chain={avalancheFuji} />
        </Box>
      </Box>
    </Box>
  )
}
