import { Abi, Address } from 'viem'

export type Token = {
  address: Address
  abi: Abi
  name: string
  symbol: string
  decimals: number
  logo: string
}
