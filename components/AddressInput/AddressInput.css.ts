import { style } from '@vanilla-extract/css'

export const input = style({
  transition: 'transform 0.125s ease, border 250ms ease',

  '::placeholder': {
    color: 'rgba(255, 255, 255, 0.6)'
  }
})
