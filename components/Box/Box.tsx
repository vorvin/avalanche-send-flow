import { type AllHTMLAttributes, type ElementType, createElement, forwardRef } from 'react'

import type * as Polymorphic from '@radix-ui/react-polymorphic'
import type { ClassValue } from 'clsx'
import clsx from 'clsx'
import type { Atoms } from '~/css/atoms'
import { atoms } from '~/css/atoms'
import { sprinkles } from '~/css/sprinkles.css'

type HTMLProperties = Omit<AllHTMLAttributes<HTMLElement>, 'as' | 'className'>

type Props = Atoms &
  HTMLProperties & {
    as?: ElementType
    className?: ClassValue
  }

type PolymorphicProps = Polymorphic.ForwardRefComponent<ElementType, Props>

export const Box = forwardRef(({ as = 'div', className, ...props }: Props, ref) => {
  const atomProps: Record<string, unknown> = {}
  const nativeProps: Record<string, unknown> = {}

  for (const key in props) {
    if (sprinkles.properties.has(key as keyof Omit<Atoms, 'reset'>)) {
      atomProps[key] = props[key as keyof typeof props]
    } else {
      nativeProps[key] = props[key as keyof typeof props]
    }
  }

  const atomicClasses = atoms({
    reset: typeof as === 'string' ? (as as Atoms['reset']) : 'div',
    ...atomProps
  })

  return createElement(as, {
    className: clsx(atomicClasses, className),
    ...nativeProps,
    ref
  })
}) as PolymorphicProps

export type BoxProps = Parameters<typeof Box>[0]

Box.displayName = 'Box'
