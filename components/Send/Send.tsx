'use client'

import React, { useMemo, useState } from 'react'

import { useConnectModal } from '@rainbow-me/rainbowkit'
import { Chain } from 'viem'
import { useAccount, useReadContract, useSwitchChain } from 'wagmi'
import { touchableStyles } from '~/css/touchableStyles'
import { isAddress } from '~/utils/address'
import { isSufficientBalance } from '~/utils/bignumber'
import { sendButtonStyles } from '~/utils/styles'
import { Token } from '~/utils/types'

import { AddressInput } from '../AddressInput/AddressInput'
import { Box } from '../Box/Box'
import { Button } from '../Button/Button'
import { TokenInput } from '../TokenInput/TokenInput'
import { Close } from '../icons/Close'

interface SendProps {
  token: Token
  chain: Chain
}

export function Send({ token, chain }: SendProps) {
  const [tokenInputValue, setTokenInputValue] = useState('')
  const [addressInputValue, setAddressInputValue] = useState('')

  const { address, isConnected, chainId } = useAccount()
  const { switchChain, isPending } = useSwitchChain()
  const { openConnectModal, connectModalOpen } = useConnectModal()

  const { data: balance = BigInt(0) } = useReadContract({
    abi: token.abi,
    address: token.address,
    functionName: 'balanceOf',
    args: [address!],
    query: {
      enabled: Boolean(address)
    }
  })

  const {
    onClick: onClickSendButton,
    isLoading: isLoadingSendButton,
    disabled: disabledSendButton,
    children: childrenSendButton
  } = useMemo(() => {
    if (!isConnected) {
      return {
        onClick: openConnectModal,
        isLoading: connectModalOpen,
        disabled: connectModalOpen,
        children: connectModalOpen ? 'Connecting...' : 'Connect Wallet'
      }
    }

    if (chainId !== chain.id) {
      return {
        onClick: () => switchChain({ chainId: chain.id }),
        isLoading: isPending,
        disabled: isPending,
        children: isPending ? 'Switching...' : 'Switch Network'
      }
    }

    if (!tokenInputValue) {
      return {
        disabled: true,
        children: 'Enter valid amount'
      }
    }

    if (!addressInputValue || !isAddress(addressInputValue)) {
      return {
        disabled: true,
        children: 'Enter valid address'
      }
    }

    if (!isSufficientBalance((balance as bigint).toString(), tokenInputValue)) {
      return {
        disabled: true,
        children: 'Insufficient balance'
      }
    }

    return {
      onClick: () => {},
      isLoading: false,
      disabled: false,
      children: 'Send'
    }
  }, [
    isConnected,
    chainId,
    chain.id,
    tokenInputValue,
    addressInputValue,
    balance,
    openConnectModal,
    connectModalOpen,
    isPending,
    switchChain
  ])

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
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white80"
          background="blueGrey100"
          borderWidth="1"
          borderColor="blueGrey90"
          borderStyle="solid"
          transition="transform"
          className={touchableStyles({ active: 'shrinkLg', hover: 'growLg' })}
          borderRadius="full"
          height="36"
          width="36"
        >
          <Close height={12} width={12} />
        </Box>

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
