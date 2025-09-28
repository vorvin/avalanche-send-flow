import { globalFontFace, globalStyle } from '@vanilla-extract/css'

globalFontFace('SFRounded', {
  src: 'url("/fonts/subset-SFRounded-Regular.woff2") format("woff2")',
  fontWeight: 400,
  fontStyle: 'normal',
  fontDisplay: 'block'
})

globalFontFace('SFRounded', {
  src: 'url("/fonts/subset-SFRounded-Medium.woff2") format("woff2")',
  fontWeight: 500,
  fontStyle: 'normal',
  fontDisplay: 'block'
})

globalFontFace('SFRounded', {
  src: 'url("/fonts/subset-SFRounded-Semibold.woff2") format("woff2")',
  fontWeight: 600,
  fontStyle: 'normal',
  fontDisplay: 'block'
})

globalFontFace('SFRounded', {
  src: 'url("/fonts/subset-SFRounded-Bold.woff2") format("woff2")',
  fontWeight: 700,
  fontStyle: 'normal',
  fontDisplay: 'block'
})

globalFontFace('SFRounded', {
  src: 'url("/fonts/subset-SFRounded-Heavy.woff2") format("woff2")',
  fontWeight: 800,
  fontStyle: 'normal',
  fontDisplay: 'block'
})

globalFontFace('SFMono', {
  src: 'url("/fonts/SFMono-semibold.woff2") format("woff2")',
  fontWeight: 600,
  fontStyle: 'normal',
  fontDisplay: 'block'
})

globalFontFace('SFMono', {
  src: 'url("/fonts/SFMono-Bold.woff2") format("woff2")',
  fontWeight: 700,
  fontStyle: 'normal',
  fontDisplay: 'block'
})

globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  fontFamily: 'SFRounded',
  WebkitFontSmoothing: 'antialiased',
  WebkitTapHighlightColor: 'transparent'
})

globalStyle('body', {
  backgroundColor: '#191A1C'
})

globalStyle('*::-webkit-scrollbar', {
  display: 'none'
})
