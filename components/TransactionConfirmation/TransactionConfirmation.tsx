'use client'

import React, { useMemo } from 'react'

import { useParams, useRouter } from 'next/navigation'
import { Address, Chain, TransactionReceipt } from 'viem'
import { useWaitForTransactionReceipt } from 'wagmi'
import { Box } from '~/components/Box/Box'
import { getChainExplorer } from '~/utils/viem'

import { TransactionStatus } from './TransactionStatus'

interface TransactionConfirmationProps {
  hash: string
  chain: Chain
}

export function TransactionConfirmation({ hash, chain }: TransactionConfirmationProps) {
  const router = useRouter()
  const params = useParams()

  const { data: transactionReceipt = {} } = useWaitForTransactionReceipt({
    hash: params.hash as Address,
    chainId: chain.id
  })

  const status = useMemo(() => {
    const { status } = transactionReceipt as TransactionReceipt

    if (status === 'success') {
      return 'success'
    }

    if (status === 'reverted') {
      return 'failed'
    }

    return 'pending'
  }, [transactionReceipt])

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="64"
      width="full"
      background="paymentWidgetBackground"
      borderWidth="1"
      borderColor="blueGrey90"
      borderStyle="solid"
      borderRadius="32"
      padding="20"
      flex="1"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="12"
        minHeight="40"
      >
        <Box width="40" height="40" />

        <Box as="p" fontSize="20" fontWeight="heavy" fontFamily="rounded" color="white100">
          Confirmation
        </Box>

        <Box width="40" height="40" />
      </Box>

      <TransactionStatus
        status={status}
        onViewOnExplorer={() => {
          const chainExplorer = getChainExplorer(chain)

          if (chainExplorer) {
            window.open(`${chainExplorer}/tx/${hash}`, '_blank')
          }
        }}
        onGoBack={() => {
          router.push('/')
        }}
      />
    </Box>
  )
}
