import { Address } from 'viem'
import { mainnet } from 'viem/chains'
import { useEnsAvatar, useEnsName } from 'wagmi'
import { isAddress, isENSAddress, noramlizeEnsName, toChecksumAddress } from '~/utils/address'

interface UseAvatarProps {
  addressOrEnsName?: string
}

export function useAvatar({ addressOrEnsName }: UseAvatarProps) {
  const { data: ensName, isLoading: isEnsNameLoading } = useEnsName({
    address: toChecksumAddress(addressOrEnsName as Address),
    query: {
      enabled: isAddress(addressOrEnsName)
    },
    chainId: mainnet.id
  })

  const { data: ensAvatar, isLoading: isEnsAvatarLoading } = useEnsAvatar({
    name: noramlizeEnsName(ensName || addressOrEnsName),
    query: {
      enabled: !!ensName || isENSAddress(addressOrEnsName)
    },
    chainId: mainnet.id
  })

  return { data: ensAvatar, isLoading: isEnsAvatarLoading || isEnsNameLoading }
}
