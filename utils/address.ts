import { Address, checksumAddress, isAddress as isAddress_viem } from 'viem'
import { normalize } from 'viem/ens'

export function toChecksumAddress(address: Address) {
  return checksumAddress(address.toLowerCase() as Address)
}

export function isAddress(address?: string) {
  try {
    if (!address) {
      return false
    }

    return isAddress_viem(address.toLowerCase())
  } catch {
    return false
  }
}

export const noramlizeEnsName = (ensName?: string) => {
  try {
    if (!ensName) {
      return undefined
    }

    return normalize(ensName)
  } catch {
    /* ignore */
  }
}

export const isENSAddress = (name?: string) => {
  if (!name) {
    return false
  }

  const lowercasedName = name.toLowerCase()
  if (!lowercasedName) return false
  const tld = lowercasedName.split('.').at(-1)
  if (!tld || tld === lowercasedName) return false
  return tld === 'eth'
}
