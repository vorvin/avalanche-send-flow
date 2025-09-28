import { createVar, style, styleVariants } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'

import { sprinkles } from './sprinkles.css'

const hoverScaleValues = {
  growSm: 1.01,
  grow: 1.025,
  growMd: 1.05,
  growLg: 1.1
} as const

const activeScaleValues = {
  shrinkSm: 0.9,
  shrink: 0.95,
  shrinkMd: 0.975,
  shrinkLg: 0.98,
  reverseShrink: 1.1
} as const

const hoverScaleVar = createVar()
const activeScaleVar = createVar()

export const base = style([
  sprinkles({
    position: 'relative'
  }),
  {
    willChange: 'transform',
    selectors: {
      '&,&::after': {
        vars: {
          [hoverScaleVar]: '1',
          [activeScaleVar]: '1'
        }
      },
      '&:hover': {
        transform: `scale(${hoverScaleVar})`
      },
      '&:active': {
        transform: `scale(${activeScaleVar})`
      },
      '&:active::after': {
        bottom: -1,
        content: '""',
        display: 'block',
        left: -1,
        position: 'absolute',
        pointerEvents: 'none',
        userSelect: 'none',
        right: -1,
        top: -1,
        transform: `scale(${calc(1).divide(activeScaleVar).multiply(hoverScaleVar).toString()})`
      }
    }
  }
])

export const hover = styleVariants(hoverScaleValues, scale => ({
  selectors: {
    '&,&::after': {
      vars: { [hoverScaleVar]: String(scale) }
    }
  }
}))

export const active = styleVariants(activeScaleValues, scale => ({
  selectors: {
    '&,&::after': {
      vars: { [activeScaleVar]: String(scale) }
    }
  }
}))
