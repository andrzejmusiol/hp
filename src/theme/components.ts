import { colors } from './colors'

export const components = {
  Button: {
    baseStyle: {
      fontSize: '1.2rem',
      fontWeight: 700,
      borderRadius: 10,
      border: 0,
      padding: '0.5rem 3rem',
    },
    variants: {
      'blue-button': {
        bg: colors.blue,
        color: colors.white,
        boxShadow: '0 .3rem 1rem rgba(0, 0, 0, .1)',
        ':hover': {
          bg: colors.darkBlue,
          boxShadow: 'none',
          color: colors.white,
        },
      },
      'link-button': {
        bg: 'none',
        color: colors.lightBlue,
        ':hover': {
          bg: 'none',
          boxShadow: 'none',
          color: colors.darkBlue,
        },
      },
    },
  },
}
