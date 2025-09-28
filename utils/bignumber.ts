import { Big } from 'big.js'

export const isSufficientBalance = (balance: string | number, amount: string | number) => {
  try {
    return Big(balance).gte(Big(amount))
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
