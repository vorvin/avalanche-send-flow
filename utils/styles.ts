import clsx from 'clsx'
import { BoxProps } from '~/components/Box/Box'
import { touchableStyles } from '~/css/touchableStyles'

interface SendButtonStylesProps {
  isDisabled?: boolean
}

export const sendButtonStyles = (params: SendButtonStylesProps = {}): BoxProps => {
  const { isDisabled } = params

  return {
    as: 'button',
    fontFamily: 'rounded',
    background: { base: 'blue60', disabled: 'white20' },
    transition: 'transform',
    paddingX: '24',
    weight: 'bold',
    borderRadius: 'full',
    height: '46',
    fontSize: '18',
    fontWeight: 'bold',
    color: 'white100',
    disabled: isDisabled,
    className: clsx(!isDisabled && touchableStyles({ active: 'shrink', hover: 'grow' }))
  }
}
