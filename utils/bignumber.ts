import { Big } from 'big.js'

export const isSufficientBalance = (
  balance: string | number | bigint,
  amount: string | number | bigint
) => {
  try {
    return Big(balance.toString()).gte(Big(amount.toString()))
  } catch {
    return false
  }
}

export const toBigNumber = (amount: string | number) => {
  try {
    return Big(amount)
  } catch {
    return Big(0)
  }
}

export const toWei = (amount: string | number, decimals: number) => {
  return Big(amount).mul(Big(10).pow(decimals))
}
