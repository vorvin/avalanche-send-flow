'use client'

import React from 'react'

import { useRouter } from 'next/navigation'
import { Chain } from 'viem'
import { useSend } from '~/hooks/useSend'
import { sendButtonStyles } from '~/utils/styles'
import { Token } from '~/utils/types'

import { AddressInput } from '../AddressInput/AddressInput'
import { Box } from '../Box/Box'
import { Button } from '../Button/Button'
import { TokenInput } from '../TokenInput/TokenInput'

interface SendProps {
  token: Token
  chain: Chain
}

export function Send({ token, chain }: SendProps) {
  const router = useRouter()
  const {
    isLoading: isLoadingSendButton,
    disabled: disabledSendButton,
    children: childrenSendButton,
    onClick: onClickSendButton,
    tokenInputValue,
    addressInputValue,
    setTokenInputValue,
    setAddressInputValue
  } = useSend({
    token,
    chain,
    onSend: hash => {
      router.push(`/transaction/confirmation/${hash}`)
    }
  })

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="20"
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
          Send
        </Box>

        <Box width="40" height="40" />
      </Box>

      <Box display="flex" flexDirection="column" gap="16" flex="1">
        <TokenInput
          token={token}
          value={tokenInputValue}
          onChange={value => setTokenInputValue(value)}
        />

        <AddressInput value={addressInputValue} onChange={value => setAddressInputValue(value)} />
      </Box>

      <Button
        onClick={onClickSendButton}
        isLoading={isLoadingSendButton}
        disabled={disabledSendButton}
        {...sendButtonStyles({ isDisabled: disabledSendButton })}
      >
        {childrenSendButton}
      </Button>
    </Box>
  )
}
