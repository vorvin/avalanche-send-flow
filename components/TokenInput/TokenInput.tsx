import { ChangeEvent } from 'react'

import clsx from 'clsx'
import { touchableStyles } from '~/css/touchableStyles'
import { maskInput } from '~/utils/input'
import { Token as TokenType } from '~/utils/types'

import { Box } from '../Box/Box'
import { Token } from '../Token/Token'
import * as styles from './TokenInput.css'

interface TokenInputProps {
  value: string
  disabled?: boolean
  onChange?: (value: string) => void
  token: TokenType
}

export function TokenInput({ token, value, disabled, onChange }: TokenInputProps) {
  return (
    <Box height="76" display="flex" flexDirection="column" position="relative">
      <Box
        background="blueGrey100"
        borderWidth="1"
        borderStyle="solid"
        borderColor="tokenActionRowStrokeColor"
        borderRadius="24"
        padding="16"
      >
        <Box display="flex" alignItems="center" gap="12" width="full">
          <Token token={token} />
          <Box
            width="full"
            as="input"
            height="45"
            fontWeight="semibold"
            fontSize="26"
            className={clsx(styles.input, touchableStyles({ active: 'shrinkLg' }))}
            background="transparent"
            color="white100"
            willChange="transform"
            placeholder="0.00"
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (onChange) {
                onChange(maskInput({ value: e.target.value }))
              }
            }}
            disabled={disabled}
            userSelect="none"
          />
        </Box>
      </Box>
    </Box>
  )
}
