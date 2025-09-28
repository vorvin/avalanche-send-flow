import React, { ReactNode } from 'react'

import clsx from 'clsx'
import {
  TouchableStylesOptions,
  touchableStyles as touchableStylesCss
} from '~/css/touchableStyles'

import { Box, BoxProps } from '../Box/Box'
import { Spinner } from '../Spinner'

interface ButtonProps extends BoxProps {
  isLoading?: boolean
  touchableStyles?: TouchableStylesOptions
  children: ReactNode
}

export function Button({ children, isLoading, touchableStyles, ...props }: ButtonProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap="12"
      as="button"
      className={clsx(touchableStyles && touchableStylesCss(touchableStyles))}
      {...props}
    >
      {isLoading && <Spinner />}
      {children}
    </Box>
  )
}
