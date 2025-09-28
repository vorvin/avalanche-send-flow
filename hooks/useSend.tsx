import { useState } from 'react'

import { useConnectModal } from '@rainbow-me/rainbowkit'
import { Address, Chain, formatUnits, isAddress, parseUnits } from 'viem'
import { useAccount, useReadContract, useSwitchChain, useWriteContract } from 'wagmi'
import { isSufficientBalance, toBigNumber } from '~/utils/bignumber'
import { Token } from '~/utils/types'

interface UseSendProps {
  token: Token
  chain: Chain
  onSend?: (hash: Address) => void
}

type SendState = {
  onClick?: () => void
  isLoading?: boolean
  disabled?: boolean
  children?: string
}

export function useSend({ token, chain, onSend }: UseSendProps) {
  const [tokenInputValue, setTokenInputValue] = useState('')
  const [addressInputValue, setAddressInputValue] = useState('')

  const { address, isConnected, chainId } = useAccount()
  const { switchChain, isPending: isSwitchingChain } = useSwitchChain()
  const { openConnectModal, connectModalOpen } = useConnectModal()

  const { data: balance = BigInt(0) } = useReadContract({
    abi: token.abi,
    address: token.address,
    functionName: 'balanceOf',
    args: [address!],
    query: {
      enabled: Boolean(address)
    },
    chainId: chain.id
  })

  const { writeContract, isPending: isSending } = useWriteContract({
    mutation: {
      onSuccess: hash => {
        onSend?.(hash)
      }
    }
  })

  const state: SendState = {}

  const etherBalance = formatUnits(balance as bigint, token.decimals)

  if (!isConnected) {
    state.onClick = () => openConnectModal?.()
    state.isLoading = connectModalOpen
    state.disabled = connectModalOpen
    state.children = connectModalOpen ? 'Connecting...' : 'Connect Wallet'
  } else if (chainId !== chain.id) {
    state.onClick = () => switchChain({ chainId: chain.id })
    state.isLoading = isSwitchingChain
    state.disabled = isSwitchingChain
    state.children = isSwitchingChain ? 'Switching...' : 'Switch Network'
  } else if (!tokenInputValue) {
    state.disabled = true
    state.children = 'Enter valid amount'
  } else if (!addressInputValue || !isAddress(addressInputValue)) {
    state.disabled = true
    state.children = 'Enter valid address'
  } else if (
    toBigNumber(tokenInputValue).eq(0) ||
    !isSufficientBalance(etherBalance, tokenInputValue)
  ) {
    state.disabled = true
    state.children = 'Insufficient balance'
  } else {
    state.onClick = () => {
      writeContract({
        abi: token.abi,
        address: token.address,
        functionName: 'transfer',
        chain,
        args: [addressInputValue, parseUnits(tokenInputValue, token.decimals)]
      })
    }
    state.isLoading = isSending
    state.disabled = isSending
    state.children = isSending ? 'Sending...' : 'Send'
  }

  return {
    isLoading: state.isLoading,
    disabled: state.disabled,
    children: state.children,
    tokenInputValue,
    addressInputValue,
    onClick: state.onClick,
    setTokenInputValue,
    setAddressInputValue
  }
}
