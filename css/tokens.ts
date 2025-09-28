export const globalColors = {
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

  cyan50: '#00E7F3'
}

export type ColorContext = 'light' | 'dark'

export type ContextualColorValue<Value> = {
  light: Value
  dark: Value
}

export type BackgroundColor =
  | 'transparent'
  | 'surfacePrimary'
  | 'surfacePrimaryElevated'
  | 'surfacePrimaryElevatedSecondary'
  | 'surfaceSecondary'
  | 'surfaceSecondaryElevated'
  | 'surfaceMenu'
  | 'fill'
  | 'fillHorizontal'
  | 'fillSecondary'
  | 'fillTertiary'
  | 'fillQuaternary'
  | 'white'
  | 'blue'
  | 'cyan'
  | 'green'
  | 'red'
  | 'purple'
  | 'pink'
  | 'orange'
  | 'yellow'
  | 'shadowNear'
  | 'shadowFar'
  | 'separator'
  | 'separatorSecondary'
  | 'separatorTertiary'
  | 'scrim'
  | 'scrimSecondary'
  | 'scrimTertiary'

export type ButtonVariant =
  | 'raised'
  | 'flat'
  | 'tinted'
  | 'stroked'
  | 'transparent'
  | 'transparentHover'
  | 'plain'
  | 'square'
  | 'disabled'
  | 'shadow'
  | 'transparentShadow'

export const backdropFilter = {
  'blur(10px)': 'blur(10px)',
  'blur(12px)': 'blur(12px)',
  'blur(20px)': 'blur(20px)',
  'blur(26px)': 'blur(26px)',
  'blur(80px)': 'blur(80px)',
  'opacity(80%)': 'opacity(80%)',
  'opacity(5%)': 'opacity(5%)',
  'opacity(30%)': 'opacity(30%)',
  'opacity(0%)': 'opacity(0%)'
} as const

export type BackdropFilter = keyof typeof backdropFilter

export type BackgroundColorValue = {
  color: string
  setColorContext: ColorContext
}

export const backgroundColors: Record<
  BackgroundColor,
  ContextualColorValue<BackgroundColorValue>
> = {
  transparent: {
    light: {
      color: 'rgba(0, 0, 0, 0)',
      setColorContext: 'light'
    },
    dark: {
      color: 'rgba(0, 0, 0, 0)',
      setColorContext: 'dark'
    }
  },
  surfacePrimary: {
    light: {
      color: globalColors.white100,
      setColorContext: 'light'
    },
    dark: {
      color: globalColors.grey100,
      setColorContext: 'dark'
    }
  },
  surfacePrimaryElevated: {
    light: {
      color: globalColors.white100,
      setColorContext: 'light'
    },
    dark: {
      color: '#191A1C',
      setColorContext: 'dark'
    }
  },
  surfacePrimaryElevatedSecondary: {
    light: {
      color: 'rgba(245, 245, 247, 0.68)',
      setColorContext: 'light'
    },
    dark: {
      color: 'rgba(36, 37, 41, 0.4)',
      setColorContext: 'dark'
    }
  },
  surfaceSecondary: {
    light: {
      color: globalColors.blueGrey10,
      setColorContext: 'light'
    },
    dark: {
      color: globalColors.white10,
      setColorContext: 'dark'
    }
  },
  surfaceSecondaryElevated: {
    light: {
      color: globalColors.white100,
      setColorContext: 'light'
    },
    dark: {
      color: globalColors.blueGrey100,
      setColorContext: 'dark'
    }
  },
  surfaceMenu: {
    light: {
      color: 'rgba(255, 255, 255, 0.8)',
      setColorContext: 'light'
    },
    dark: {
      color: 'rgba(53, 54, 58, 0.8)',
      setColorContext: 'dark'
    }
  },
  fill: {
    light: {
      color: globalColors.grey30,
      setColorContext: 'light'
    },
    dark: {
      color: globalColors.white30,
      setColorContext: 'dark'
    }
  },
  fillHorizontal: {
    light: {
      color:
        'radial-gradient(100% 100% at 0% 50%, rgba(9, 17, 31, 0.02) 0%, rgba(9, 17, 31, 0.05) 100%)',
      setColorContext: 'light'
    },
    dark: {
      color:
        'radial-gradient(100% 100% at 0% 50%, rgba(245, 248, 255, 0.02) 0%, rgba(245, 248, 255, 0.06) 100%)',
      setColorContext: 'dark'
    }
  },
  fillSecondary: {
    light: {
      color: globalColors.grey20,
      setColorContext: 'light'
    },
    dark: {
      color: globalColors.white20,
      setColorContext: 'dark'
    }
  },
  fillTertiary: {
    light: {
      color: globalColors.grey20,
      setColorContext: 'light'
    },
    dark: {
      color: 'rgba(245, 248, 255, 0.08)',
      setColorContext: 'dark'
    }
  },
  fillQuaternary: {
    light: {
      color: globalColors.grey10,
      setColorContext: 'light'
    },
    dark: {
      color: 'rgba(245, 248, 255, 0.04)',
      setColorContext: 'dark'
    }
  },
  white: {
    light: {
      color: globalColors.white100,
      setColorContext: 'light'
    },
    dark: {
      color: globalColors.white100,
      setColorContext: 'light'
    }
  },
  blue: {
    light: {
      color: globalColors.blue60,
      setColorContext: 'dark'
    },
    dark: {
      color: globalColors.blue50,
      setColorContext: 'dark'
    }
  },
  cyan: {
    light: {
      color: globalColors.cyan50,
      setColorContext: 'dark'
    },
    dark: {
      color: globalColors.cyan50,
      setColorContext: 'dark'
    }
  },
  green: {
    light: {
      color: globalColors.green60,
      setColorContext: 'dark'
    },
    dark: {
      color: globalColors.green50,
      setColorContext: 'dark'
    }
  },
  red: {
    light: {
      color: globalColors.red60,
      setColorContext: 'dark'
    },
    dark: {
      color: globalColors.red50,
      setColorContext: 'dark'
    }
  },
  purple: {
    light: {
      color: globalColors.purple60,
      setColorContext: 'dark'
    },
    dark: {
      color: globalColors.purple50,
      setColorContext: 'dark'
    }
  },
  pink: {
    light: {
      color: globalColors.pink60,
      setColorContext: 'dark'
    },
    dark: {
      color: globalColors.pink50,
      setColorContext: 'dark'
    }
  },
  orange: {
    light: {
      color: globalColors.orange60,
      setColorContext: 'dark'
    },
    dark: {
      color: globalColors.orange50,
      setColorContext: 'dark'
    }
  },
  yellow: {
    light: {
      color: globalColors.yellow60,
      setColorContext: 'light'
    },
    dark: {
      color: globalColors.yellow50,
      setColorContext: 'light'
    }
  },
  shadowNear: {
    dark: { color: globalColors.grey100, setColorContext: 'dark' },
    light: { color: globalColors.grey100, setColorContext: 'dark' }
  },
  shadowFar: {
    dark: { color: globalColors.grey100, setColorContext: 'dark' },
    light: { color: '#25292E', setColorContext: 'dark' }
  },
  separator: {
    light: { color: globalColors.grey20, setColorContext: 'light' },
    dark: { color: globalColors.white20, setColorContext: 'dark' }
  },
  separatorSecondary: {
    light: { color: globalColors.grey20, setColorContext: 'light' },
    dark: { color: 'rgba(245, 248, 255, 0.06)', setColorContext: 'dark' }
  },
  separatorTertiary: {
    light: { color: 'rgba(9, 17, 31, 0.02)', setColorContext: 'light' },
    dark: { color: 'rgba(245, 248, 255, 0.02)', setColorContext: 'dark' }
  },
  scrim: {
    light: {
      color: 'rgba(0, 0, 0, 0.2)',
      setColorContext: 'light'
    },
    dark: { color: 'rgba(0, 0, 0, 0.4)', setColorContext: 'dark' }
  },
  scrimSecondary: {
    light: {
      color: 'rgba(0, 0, 0, 0.4)',
      setColorContext: 'light'
    },
    dark: { color: 'rgba(0, 0, 0, 0.6)', setColorContext: 'dark' }
  },
  scrimTertiary: {
    light: {
      color: 'rgba(0, 0, 0, 0.6)',
      setColorContext: 'light'
    },
    dark: { color: 'rgba(0, 0, 0, 0.8)', setColorContext: 'dark' }
  }
}

type Cursor = 'copy' | 'default' | 'pointer' | 'text'
export const cursorOpts: Cursor[] = ['copy', 'default', 'pointer', 'text']

type UserSelect = 'all' | 'none' | 'text'
export const userSelectOpts: UserSelect[] = ['all', 'none', 'text']

function selectBackgroundColors<SelectedColors extends readonly BackgroundColor[]>(
  ...colors: SelectedColors
): SelectedColors {
  return colors
}

function selectBackgroundAsForeground(
  backgroundName: BackgroundColor
): ContextualColorValue<string> {
  const bg = backgroundColors[backgroundName]

  return {
    dark: bg.dark.color,
    light: bg.light.color
  }
}

export const buttonColors = [
  'accent',
  ...selectBackgroundColors(
    'fill',
    'fillSecondary',
    'fillTertiary',
    'surfacePrimaryElevated',
    'surfacePrimaryElevatedSecondary',
    'surfaceSecondaryElevated',
    'blue',
    'green',
    'orange',
    'pink',
    'purple',
    'red',
    'yellow'
  )
] as const
export type ButtonColor = (typeof buttonColors)[number]

export const shadowColors = [
  'accent',
  ...selectBackgroundColors(
    'fill',
    'fillSecondary',
    'fillTertiary',
    'surfacePrimaryElevated',
    'surfacePrimaryElevatedSecondary',
    'surfaceSecondaryElevated',
    'blue',
    'green',
    'orange',
    'pink',
    'purple',
    'red',
    'yellow'
  )
] as const
export type ShadowColor = (typeof shadowColors)[number]

export type ForegroundColor =
  | 'label'
  | 'labelSecondary'
  | 'labelTertiary'
  | 'labelQuaternary'
  | 'labelWhite'
  | 'transparent'
  | 'blue'
  | 'cyan'
  | 'green'
  | 'red'
  | 'purple'
  | 'pink'
  | 'orange'
  | 'yellow'
  | 'fill'
  | 'fillSecondary'
  | 'fillTertiary'
  | 'fillQuaternary'
  | 'scrim'
  | 'scrimSecondary'
  | 'scrimTertiary'
  | 'separator'
  | 'separatorSecondary'
  | 'separatorTertiary'
  | 'buttonStroke'
  | 'buttonStrokeSecondary'
  | 'mainnet'
  | 'arbitrum'
  | 'optimism'
  | 'polygon'
  | 'base'
  | 'zora'
  | 'bsc'
  | 'avalanche'
  | 'ink'

export const foregroundColors: Record<ForegroundColor, ContextualColorValue<string>> = {
  label: {
    light: globalColors.grey100,
    dark: globalColors.white100
  },
  labelSecondary: {
    light: globalColors.grey80,
    dark: globalColors.white80
  },
  labelTertiary: {
    light: globalColors.grey70,
    dark: globalColors.white70
  },
  labelQuaternary: {
    light: globalColors.grey60,
    dark: globalColors.white60
  },
  labelWhite: {
    light: globalColors.white100,
    dark: globalColors.white100
  },
  transparent: selectBackgroundAsForeground('transparent'),
  blue: selectBackgroundAsForeground('blue'),
  cyan: selectBackgroundAsForeground('cyan'),
  green: selectBackgroundAsForeground('green'),
  red: selectBackgroundAsForeground('red'),
  purple: selectBackgroundAsForeground('purple'),
  pink: selectBackgroundAsForeground('pink'),
  orange: selectBackgroundAsForeground('orange'),
  yellow: selectBackgroundAsForeground('yellow'),
  fill: selectBackgroundAsForeground('fill'),
  fillSecondary: selectBackgroundAsForeground('fillSecondary'),
  fillTertiary: selectBackgroundAsForeground('fillTertiary'),
  fillQuaternary: selectBackgroundAsForeground('fillQuaternary'),
  separator: selectBackgroundAsForeground('separator'),
  separatorSecondary: selectBackgroundAsForeground('separatorSecondary'),
  separatorTertiary: selectBackgroundAsForeground('separatorTertiary'),
  scrim: {
    light: 'rgba(0, 0, 0, 0.2)',
    dark: 'rgba(0, 0, 0, 0.4)'
  },
  scrimSecondary: {
    light: 'rgba(0, 0, 0, 0.4)',
    dark: 'rgba(0, 0, 0, 0.6)'
  },
  scrimTertiary: {
    light: 'rgba(0, 0, 0, 0.6)',
    dark: 'rgba(0, 0, 0, 0.8)'
  },
  buttonStroke: {
    light: 'rgba(0, 0, 0, 0.05)',
    dark: 'rgba(255, 255, 255, 0.03)'
  },
  buttonStrokeSecondary: {
    light: globalColors.white20,
    dark: globalColors.white20
  },
  mainnet: {
    light: '#6D6D6D',
    dark: '#999BA1'
  },
  arbitrum: {
    light: '#1690E4',
    dark: '#52B8FF'
  },
  optimism: {
    light: '#FF4040',
    dark: '#FF8A8A'
  },
  polygon: {
    light: '#8247E5',
    dark: '#BE97FF'
  },
  base: {
    light: '#0052FF',
    dark: '#3979FF'
  },
  zora: {
    light: '#2B5DF0',
    dark: '#6183F0'
  },
  bsc: {
    light: '#EBAF09',
    dark: '#FFDA66'
  },
  avalanche: {
    light: '#EBAF09',
    dark: '#FF5D5E'
  },
  ink: {
    light: '#7132F5',
    dark: '#864DFF'
  }
}

function selectForegroundColors<SelectedColors extends readonly ForegroundColor[]>(
  ...colors: SelectedColors
): SelectedColors {
  return colors
}

export const genericColors = selectForegroundColors(
  'blue',
  'green',
  'orange',
  'pink',
  'purple',
  'red',
  'yellow',
  'cyan'
)
export type GenericColor = (typeof genericColors)[number]

export const scrimColors = selectForegroundColors('scrim', 'scrimSecondary', 'scrimTertiary')
export type ScrimColor = (typeof scrimColors)[number]

export const strokeColors = selectForegroundColors('buttonStroke', 'buttonStrokeSecondary')
export type StrokeColor = (typeof strokeColors)[number]

export const separatorColors = selectForegroundColors(
  'separator',
  'separatorSecondary',
  'separatorTertiary'
)
export type SeparatorColor = (typeof separatorColors)[number]

export const textColors = selectForegroundColors(
  'label',
  'transparent',
  'labelSecondary',
  'labelTertiary',
  'labelQuaternary',
  'labelWhite',
  'mainnet',
  'arbitrum',
  'optimism',
  'polygon',
  'base',
  'zora',
  'bsc',
  'avalanche',
  'ink',
  ...genericColors
)

export const dimensions = {
  '-500': '-500px',
  '-400': '-400px',
  '-300': '-300px',
  '-200': '-200px',
  '-150': '-150px',
  '-100': '-100px',
  '-96': '-96px',
  '-80': '-80px',
  '-64': '-64px',
  '-48': '-48px',
  '-40': '-40px',
  '-32': '-32px',
  '-24': '-24px',
  '-20': '-20px',
  '-16': '-16px',
  '-12': '-12px',
  '-8': '-8px',
  '-6': '-6px',
  '-4': '-4px',
  '-2': '-2px',
  '-1': '-1px',
  '0': '0px',
  '1': '1px',
  '2': '2px',
  '4': '4px',
  '6': '6px',
  '8': '8px',
  '10': '10px',
  '12': '12px',
  '14': '14px',
  '16': '16px',
  '18': '18px',
  '20': '20px',
  '22': '22px',
  '24': '24px',
  '26': '26px',
  '28': '28px',
  '30': '30px',
  '32': '32px',
  '34': '34px',
  '36': '36px',
  '38': '38px',
  '40': '40px',
  '42': '42px',
  '44': '44px',
  '45': '45px',
  '46': '46px',
  '48': '48px',
  '50': '50px',
  '52': '52px',
  '54': '54px',
  '56': '56px',
  '58': '58px',
  '60': '60px',
  '62': '62px',
  '64': '64px',
  '68': '68px',
  '72': '72px',
  '76': '76px',
  '80': '80px',
  '84': '84px',
  '88': '88px',
  '92': '92px',
  '96': '96px',
  '100': '100px',
  '104': '104px',
  '108': '108px',
  '112': '112px',
  '116': '116px',
  '120': '120px',
  '124': '124px',
  '128': '128px',
  '132': '132px',
  '136': '136px',
  '140': '140px',
  '144': '144px',
  '148': '148px',
  '152': '152px',
  '156': '156px',
  '160': '160px',
  '164': '164px',
  '168': '168px',
  '172': '172px',
  '176': '176px',
  '180': '180px',
  '184': '184px',
  '188': '188px',
  '192': '192px',
  '196': '196px',
  '200': '200px',
  '220': '220px',
  '240': '240px',
  '260': '260px',
  '280': '280px',
  '300': '300px',
  '320': '320px',
  '340': '340px',
  '360': '360px',
  '380': '380px',
  '400': '400px',
  '420': '420px',
  '440': '440px',
  '450': '450px',
  '460': '460px',
  '480': '480px',
  '500': '500px',
  '700': '700px',
  '1100': '1100px',
  full: '100%',
  fit: 'fit-content'
}

export const radii = {
  '1': '1px',
  '4': '4px',
  '6': '6px',
  '8': '8px',
  '10': '10px',
  '13': '13px',
  '12': '12px',
  '16': '16px',
  '20': '20px',
  '24': '24px',
  '30': '30px',
  '32': '32px',
  '25%': '25%',
  full: '9999px'
} as const

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  heavy: 800
} as const

export const fontSizes = {
  '12': { fontSize: '12px', lineHeight: '16px' },
  '13': { fontSize: '13px', lineHeight: '17px' },
  '14': { fontSize: '14px', lineHeight: '18px' },
  '15': { fontSize: '15px', lineHeight: '19px' },
  '16': { fontSize: '16px', lineHeight: '20px' },
  '18': { fontSize: '18px', lineHeight: '22px' },
  '19': { fontSize: '19px', lineHeight: '23px' },
  '20': { fontSize: '20px', lineHeight: '24px' },
  '23': { fontSize: '23px', lineHeight: '27px' },
  '24': { fontSize: '24px', lineHeight: '28px' },
  '26': { fontSize: '26px', lineHeight: '30px' },
  '28': { fontSize: '28px', lineHeight: '32px' },
  '30': { fontSize: '30px', lineHeight: '34px' },
  '32': { fontSize: '32px', lineHeight: '36px' },
  '34': { fontSize: '34px', lineHeight: '38px' },
  '40': { fontSize: '40px', lineHeight: '44px' },
  '48': { fontSize: '48px', lineHeight: '52px' },
  '52': { fontSize: '52px', lineHeight: '56px' },
  '64': { fontSize: '64px', lineHeight: '68px' },
  '66': { fontSize: '70px', lineHeight: '74px' },
  '90': { fontSize: '90px', lineHeight: '94px' },
  '120': { fontSize: '120px', lineHeight: '124px' }
} as const

export const transformScales = {
  '1.04': 1.04,
  '0.96': 0.96
} as const

export const transitions = {
  bounce: { type: 'spring', mass: 0.1, stiffness: 500, damping: 20 }
} as const

export const strokeWeights = {
  '0': '0px',
  '0.5': '0.5px',
  '1': '1px',
  '1.5': '1.5px',
  '2': '2px',
  '3': '3px'
} as const

export const textTransform = ['uppercase', 'capitalize'] as const

export const flexAlignment = ['flex-start', 'flex-end', 'center', 'stretch'] as const

export const textAlignments = ['left', 'right', 'center', 'inherit'] as const

export const positions = ['absolute', 'fixed', 'relative', 'sticky'] as const

export const transitionDuration = {
  '75': '75ms',
  '100': '100ms',
  '150': '150ms',
  '200': '200ms',
  '300': '300ms',
  '500': '500ms',
  '700': '700ms',
  '1000': '1000ms'
} as const

export const transitionTimingFunction = {
  linear: 'linear',
  ease: 'ease',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.42, 0, 0.58, 1)'
}

export const borderWidth = {
  '0': '0px',
  '1': '1px',
  '2': '2px',
  '4': '4px'
}

export const borderStyle = {
  solid: 'solid'
} as const

export const fontFamily = {
  rounded: 'SFRounded',
  mono: 'SFMono'
} as const

export type Radius = keyof typeof radii
export type Dimension = keyof typeof dimensions
export type FontSize = keyof typeof fontSizes
export type TransformScale = keyof typeof transformScales
export type Transition = keyof typeof transitions
export type FontWeight = keyof typeof fontWeights
export type TextColor = (typeof textColors)[number]
export type StrokeWeight = keyof typeof strokeWeights
export type TextTransform = (typeof textTransform)[number]
export type FlexAlignment = (typeof flexAlignment)[number]
export type TextAlignment = (typeof textAlignments)[number]
export type Position = (typeof positions)[number]
export type TransitionDuration = keyof typeof transitionDuration
export type TransitionTimingFunction = keyof typeof transitionTimingFunction
export type BorderWidth = keyof typeof borderWidth
export type BorderStyle = keyof typeof borderStyle
export type FontFamily = keyof typeof fontFamily
