export type MaskInputOptions = {
  value: string
  decimals?: number
  integers?: number
}

const DECIMAL_POINT = '.'

export const maskInput = ({ value, decimals, integers }: MaskInputOptions) => {
  value = value.replace(',', '.')

  if (value === DECIMAL_POINT) {
    return `0${DECIMAL_POINT}`
  }

  const [integerPart = '', decimalsPart] = value
    .split(DECIMAL_POINT)
    .map(p => p.replace(/[^0-9]/gu, ''))

  const limitedInteger = integers ? integerPart.substring(0, integers) : integerPart

  const cleanIntegerPart =
    limitedInteger.length === 2 ? String(Number(limitedInteger)) : limitedInteger
  const cleanDecimalsPart =
    typeof decimals === 'number' ? decimalsPart?.substring(0, decimals) : decimalsPart

  const canIncludeDecimals = typeof decimals !== 'number' || decimals > 0

  const maskValue =
    typeof cleanDecimalsPart === 'string' && canIncludeDecimals
      ? [cleanIntegerPart, cleanDecimalsPart].join(DECIMAL_POINT)
      : cleanIntegerPart

  return maskValue ?? ''
}
