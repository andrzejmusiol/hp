import { colors } from './colors'

export const Button = {
  baseStyle: {
    fontWeight: 700,
    borderRadius: 5,
    border: 0,
  },
  variants: {
    blue: {
      fontSize: '0.8rem',
      bg: colors.blue,
      color: colors.white,
      boxShadow: '0 .3rem 1rem rgba(0, 0, 0, .1)',
      padding: '1rem',
      _hover: {
        bg: colors.darkBlue,
        boxShadow: 'none',
        color: colors.white,
      },
    },
    link: {
      bg: 'none',
      color: colors.blue,
      _hover: {
        bg: 'none',
        boxShadow: 'none',
        color: colors.darkBlue,
        textDecoration: 'none',
      },
    },
  },
  defaultProps: {
    variant: 'blue',
  },
}
