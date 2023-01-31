import { PinceauTheme, PropertyValue } from 'pinceau'

export const stateColors = (value: any) => {
  return {
    color: `{elements.state.${value}.color.primary}`,
    backgroundColor: `{elements.state.${value}.backgroundColor.primary}`,
    borderColor: `{elements.state.${value}.borderColor.primary}`,
    ':deep(p code)': {
      color: `{elements.state.${value}.color.secondary}`,
      backgroundColor: `{elements.state.${value}.backgroundColor.secondary}`
    },
    ':deep(a)': {
      borderColor: 'currentColor',
      '&:hover': {
        color: `{elements.state.${value}.color.secondary}`,
        borderColor: 'currentColor'
      }
    }
  }
}

export const my = (value) => {
    return {
      marginTop: value,
      marginBottom: value
    };
  }

export const mx = (value) => {
    return {
      marginLeft: value,
      marginRight: value
    };
  }

export const py = (value) => {
    return {
      paddingTop: value,
      paddingBottom: value
    };
  }

export const px = (value) => {
    return {
      paddingLeft: value,
      paddingRight: value
    };
  }

export const truncate = {
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap"
}

export const lineClamp = (lines) => ({
    'overflow': 'hidden',
    'display': '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': lines
  })

export const text = (size) => ({
    fontSize: `{text.${size}.fontSize}`,
    lineHeight: `{text.${size}.lineHeight}`
  })

export const utils = { stateColors, my, mx, py, px, truncate, lineClamp, text } as const

export type GeneratedPinceauUtils = typeof utils

export default utils