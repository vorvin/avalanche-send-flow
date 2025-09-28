import { ChangeEvent } from 'react'

import clsx from 'clsx'
import { touchableStyles } from '~/css/touchableStyles'

import { Avatar } from '../Avatar/Avatar'
import { Box } from '../Box/Box'
import * as styles from './AddressInput.css'

interface AddressInputProps {
  value: string
  disabled?: boolean
  onChange?: (value: string) => void
}

export function AddressInput({ value, disabled, onChange }: AddressInputProps) {
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
          <Avatar addressOrEnsName={value} />
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
            placeholder="Enter wallet address"
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (onChange) {
                onChange(e.target.value)
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
