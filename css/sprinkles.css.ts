import type { RequiredConditionalValue } from '@vanilla-extract/sprinkles'
import {
  createMapValueFn,
  createNormalizeValueFn,
  createSprinkles,
  defineProperties
} from '@vanilla-extract/sprinkles'

import {
  borderStyle,
  borderWidth,
  dimensions,
  flexAlignment,
  fontFamily,
  fontSizes,
  fontWeights,
  positions,
  radii,
  textAlignments,
  textTransform
} from './tokens'

export const themeContractValues = {
  colors: {
    greenA10: 'rgba(29, 184, 71, 0.1)',
    green10: '#EAFCE8',
    green20: '#CDFACD',
    green30: '#A6F5AC',
    green40: '#74E082',
    green50: '#4BD166',
    green60: '#1DB847',
    green70: '#189943',
    green80: '#09752D',
    green90: '#005723',
    green100: '#003816',

    blueA10: 'rgba(14, 118, 253, 0.1)',
    blue10: '#EDF9FF',
    blue20: '#D1EDFF',
    blue30: '#A3D7FF',
    blue40: '#6BBFFF',
    blue50: '#3898FF',
    blue60: '#0E76FD',
    blue70: '#1761E0',
    blue80: '#0B4AB8',
    blue90: '#053085',
    blue100: '#001E59',

    purpleA10: 'rgba(95, 90, 250, 0.1)',
    purple10: '#F7F5FF',
    purple20: '#E7E0FF',
    purple30: '#C6B8FF',
    purple40: '#9E8FFF',
    purple50: '#7A70FF',
    purple60: '#5F5AFA',
    purple70: '#5248E0',
    purple80: '#4936C2',
    purple90: '#38228F',
    purple100: '#2C0D6B',

    pinkA10: 'rgba(255, 92, 160, 0.1)',
    pink10: '#FFF0FA',
    pink20: '#FFD6F1',
    pink30: '#FFB8E2',
    pink40: '#FF99CF',
    pink50: '#FF7AB8',
    pink60: '#FF5CA0',
    pink70: '#E04887',
    pink80: '#CC3976',
    pink90: '#851B53',
    pink100: '#570040',

    redA10: 'rgba(250, 66, 60, 0.1)',
    red10: '#FFF0F0',
    red20: '#FFD4D1',
    red30: '#FFACA3',
    red40: '#FF887A',
    red50: '#FF6257',
    red60: '#FA423C',
    red70: '#D13732',
    red80: '#B22824',
    red90: '#7A1714',
    red100: '#520907',

    orangeA10: 'rgba(255, 128, 31, 0.1)',
    orange10: '#FFF6EB',
    orange20: '#FFE7CC',
    orange30: '#FFCF99',
    orange40: '#FFB266',
    orange50: '#FF983D',
    orange60: '#FF801F',
    orange70: '#E06E16',
    orange80: '#AD530E',
    orange90: '#703B12',
    orange100: '#3D1E0A',

    yellowA10: 'rgba(250, 203, 15, 0.1)',
    yellow10: '#FFFBE0',
    yellow20: '#FFF5C2',
    yellow30: '#FFEE99',
    yellow40: '#FFE566',
    yellow50: '#FFDF3D',
    yellow60: '#FFD014',
    yellow70: '#EBAF09',
    yellow80: '#B88700',
    yellow90: '#7A600A',
    yellow100: '#42320B',

    grey10: '#F7F7F7',
    grey20: 'rgba(9, 17, 31, 0.05)',
    grey30: 'rgba(16, 21, 31, 0.1)',
    grey40: 'rgba(16, 21, 31, 0.16)',
    grey50: 'rgba(22, 25, 31, 0.24)',
    grey60: 'rgba(26, 28, 31, 0.36)',
    grey70: 'rgba(27, 29, 31, 0.5)',
    grey80: 'rgba(27, 29, 31, 0.7)',
    grey90: 'rgba(27, 29, 31, 0.88)',
    grey100: '#000',

    white10: '#1B1C1E',
    white20: 'rgba(245, 248, 255, 0.12)',
    white30: 'rgba(245, 248, 255, 0.16)',
    white40: 'rgba(245, 248, 255, 0.2)',
    white50: 'rgba(245, 248, 255, 0.28)',
    white60: 'rgba(245, 248, 255, 0.4)',
    white70: 'rgba(245, 248, 255, 0.56)',
    white80: 'rgba(245, 248, 255, 0.76)',
    white90: 'rgba(247, 250, 255, 0.92)',
    white100: '#FFFFFF',

    blueGrey10: '#F5F5F7',
    blueGrey20: '#E6E9F0',
    blueGrey30: '#DADEE5',
    blueGrey40: '#CAD0D9',
    blueGrey50: '#AFB9C7',
    blueGrey60: '#929EAD',
    blueGrey70: '#78828F',
    blueGrey80: '#5F6670',
    blueGrey90: '#3C4047',
    blueGrey100: '#242529',

    cyan50: '#00E7F3',

    surfacePrimaryElevatedSecondary: 'rgba(36, 37, 41, 0.4)',
    tokenRowHoverColor: '#2A1E25',
    tokenActionRowButtonBackground: '#2A1E25',
    tokenActionRowStrokeColor: 'rgba(255, 255, 255, 0.03)',
    paymentWidgetBackground: '#1B1C1E',
    seperatorTertiaryBackground: 'rgba(245, 248, 255, 0.02)',
    fillQuaternary: 'rgba(245, 248, 255, 0.04)',
    surfaceMenu: 'rgba(53, 54, 58, 0.8)',
    tokenListHoverColor: '#333438',

    transparent: 'transparent'
  },
  shadows: {
    dropdownMenu: '0px 7px 17px rgba(0, 0, 0, 0.4)',
    menu: 'rgba(0, 0, 0, 0.2) 0px 10px 30px',
    dialog: '0px 8px 32px rgba(0, 0, 0, 0.32)',
    avatar: '0px 6px 18px rgba(0, 0, 0, 0.24), 0px 2px 6px rgba(0, 0, 0, 0.02)',
    tokenSwapButton: '0 4px 12px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.02)',
    tokenImage: '0 8px 24px rgba(0, 0, 0, 0.32), 0 2px 6px rgba(0, 0, 0, 0.02)'
  },
  blurs: {
    modalOverlay: 'blur(20px)'
  }
}

export type ThemeVars = typeof themeContractValues

export const breakpoints = {
  tablet: 768,
  desktop: 1024
} as const

const responsiveProperties = defineProperties({
  conditions: {
    desktop: {},
    tablet: {
      '@media': `screen and (max-width: ${breakpoints.desktop}px)`
    },
    mobile: {
      '@media': `screen and (max-width: ${breakpoints.tablet}px)`
    }
  },
  defaultCondition: 'desktop',
  properties: {
    alignItems: flexAlignment,
    display: ['none', 'inline-block', 'block', 'inline-flex', 'flex', 'inline', 'grid'],
    fontSize: fontSizes,
    fontWeight: fontWeights,
    fontFamily: fontFamily,
    textAlign: textAlignments,
    textTransform: textTransform,
    padding: dimensions,
    paddingTop: dimensions,
    paddingBottom: dimensions,
    paddingLeft: dimensions,
    paddingRight: dimensions,
    margin: { ...dimensions, auto: 'auto' },
    marginTop: { ...dimensions, auto: 'auto' },
    marginBottom: { ...dimensions, auto: 'auto' },
    marginLeft: { ...dimensions, auto: 'auto' },
    marginRight: { ...dimensions, auto: 'auto' },
    bottom: { ...dimensions, '50%': '50%' },
    top: { ...dimensions, '50%': '50%' },
    left: { ...dimensions, '50%': '50%' },
    right: { ...dimensions, '50%': '50%' },
    width: { ...dimensions, screen: '100vw' },
    height: { ...dimensions, screen: '100vh' } as const,
    minWidth: {
      ...dimensions,
      screen: '100vw'
    },
    minHeight: {
      ...dimensions,
      screen: '100vh'
    },
    maxHeight: {
      ...dimensions,
      screen: '100vh'
    },
    maxWidth: dimensions,
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    justifyContent: [
      'flex-start',
      'center',
      'flex-end',
      'space-between',
      'space-around',
      'space-evenly'
    ],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    gap: dimensions,
    columnGap: dimensions,
    rowGap: dimensions
  },
  shorthands: {
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom']
  }
})

export type ResponsiveValue<Value extends string | number> = RequiredConditionalValue<
  typeof responsiveProperties,
  Value
>

export const mapResponsiveValue = createMapValueFn(responsiveProperties)
export const normalizeResponsiveValue = createNormalizeValueFn(responsiveProperties)

const unresponsiveProperties = defineProperties({
  properties: {
    alignSelf: flexAlignment,
    backgroundSize: ['cover'] as const,
    flex: ['1', '0.5'],
    opacity: ['0', '1', '0.7', '0.5'],
    listStyle: ['none', 'inside'],
    borderRadius: radii,
    borderTopRightRadius: radii,
    borderBottomRightRadius: radii,
    borderBottomLeftRadius: radii,
    borderTopLeftRadius: radii,
    objectFit: ['cover'],
    objectPosition: ['center', 'top'],
    backgroundClip: ['text'],
    WebkitBackgroundClip: ['text'],
    WebkitTextFillColor: ['transparent'],
    borderStyle,
    borderTopStyle: borderStyle,
    borderRightStyle: borderStyle,
    borderBottomStyle: borderStyle,
    borderLeftStyle: borderStyle,
    borderWidth: borderWidth,
    borderTopWidth: borderWidth,
    borderRightWidth: borderWidth,
    borderLeftWidth: borderWidth,
    borderBottomWidth: borderWidth,
    borderTop: borderWidth,
    borderRight: borderWidth,
    borderBottom: borderWidth,
    borderLeft: borderWidth,
    cursor: ['pointer', 'none'],
    pointerEvents: ['none', 'all'],
    textDecoration: ['underline'],
    flexDirection: ['row', 'column'],
    flexShrink: ['0', '1'],
    flexGrow: ['0', '1'],
    flexBasis: ['0', '1'],
    zIndex: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] as const,
    fontStyle: ['italic'],
    visibility: ['hidden', 'visible'] as const,
    whiteSpace: ['nowrap', 'pre-wrap'],
    textOverflow: ['ellipsis'],
    wordBreak: ['break-word'],
    overflow: ['hidden'] as const,
    overflowX: ['hidden', 'auto', 'scroll', 'visible', 'clip'] as const,
    overflowY: ['hidden', 'auto', 'scroll', 'visible', 'clip'] as const,
    position: positions,
    WebkitUserSelect: ['none'],
    border: ['none'],
    outlineWidth: ['0'],
    willChange: ['transform'],
    transform: {
      center: 'translate(-50%, -50%)'
    },
    transition: {
      default: '0.125s ease',
      transform: 'transform 0.125s ease',
      color: 'color 200ms ease-out, text-shadow 1s ease',
      backgroundWithColor: 'background 0.1s ease, color 0.03s ease'
    },
    userSelect: ['none', 'auto'] as const,
    backdropFilter: themeContractValues.blurs,
    WebkitBackdropFilter: themeContractValues.blurs,
    fontFamily
  } as const
})

const colorProperties = defineProperties({
  conditions: {
    base: {},
    hover: { selector: '&:hover' },
    active: { selector: '&:active' }
  },
  defaultCondition: 'base',
  properties: {
    background: themeContractValues.colors,
    borderColor: themeContractValues.colors,
    boxShadow: themeContractValues.shadows,
    color: themeContractValues.colors
  }
})

export const sprinkles = createSprinkles(
  colorProperties,
  responsiveProperties,
  unresponsiveProperties
)

export type Sprinkles = Parameters<typeof sprinkles>[0]
