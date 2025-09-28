import { style } from '@vanilla-extract/css'

const appearance = style({
  appearance: 'none'
})

const field = style([
  appearance,
  {
    '::placeholder': {
      opacity: 0.7,
      color: '#fff'
    },
    WebkitAppearance: 'none',
    outline: 'none',
    border: 'none'
  }
])

const button = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  background: 'none',
  appearance: 'none',
  cursor: 'pointer',
  outline: 'none',
  border: 'none',
  selectors: {
    '&:disabled': {
      cursor: 'default'
    }
  }
})

const a = style({
  color: 'inherit',
  textDecoration: 'none'
})

const input = style([field])

const textarea = style([field])

export const element = {
  input,
  a,
  button,
  textarea
}
