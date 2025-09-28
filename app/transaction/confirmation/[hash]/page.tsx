import { avalancheFuji } from 'viem/chains'
import { Box } from '~/components/Box/Box'
import { Navbar } from '~/components/Navbar/Navbar'
import { TransactionConfirmation } from '~/components/TransactionConfirmation/TransactionConfirmation'

interface PageProps {
  params: {
    hash: string
  }
}

export default function TransactionConfirmationPage({ params }: PageProps) {
  const { hash } = params

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
          <TransactionConfirmation hash={hash as string} chain={avalancheFuji} />
        </Box>
      </Box>
    </Box>
  )
}
