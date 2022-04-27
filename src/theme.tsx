import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import '@fontsource/quicksand/400.css'
import '@fontsource/quicksand/500.css'
import '@fontsource/quicksand/600.css'
import '@fontsource/quicksand/700.css'
import { colors } from './constants'

export const theme = createTheme({
  typography: {
    fontFamily: ['QuickSand, sans-serif'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        fontSize: '1rem',
        fontFamily: 'QuickSand, sans-serif',
        fontWeight: 700,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem',
          fontWeight: 700,
          backgroundColor: colors.brand.blueDark,
          boxShadow: 'none',
          borderRadius: 10,
          padding: '0.5rem 3rem',
          ':hover': {
            backgroundColor: colors.brand.blueDark,
            boxShadow: 'none',
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem',
          fontWeight: 700,
          boxShadow: 'none',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '1.4rem',
          fontWeight: 700,
        },
      },
    },
  },
})

export interface IThemeProvider {
  children: JSX.Element
}

export const TProvider = ({ children }: IThemeProvider) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
