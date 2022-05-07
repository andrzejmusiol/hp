import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import '@fontsource/quicksand/400.css'
import '@fontsource/quicksand/500.css'
import '@fontsource/quicksand/600.css'
import '@fontsource/quicksand/700.css'
import { colors } from './colors'

export const theme = createTheme({
  typography: {
    fontFamily: ['QuickSand, sans-serif'].join(','),
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      color: colors.black,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
      color: colors.black,
    },
    subtitle1: {
      fontWeight: 500,
      color: colors.lightBlue,
    },
    subtitle2: {
      fontWeight: 500,
      color: colors.lightBlue,
    },
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
          backgroundColor: colors.blue,
          boxShadow: '0 .3rem 1rem rgba(0, 0, 0, .2)',
          borderRadius: 10,
          padding: '0.5rem 3rem',
          color: colors.white,
          ':hover': {
            backgroundColor: colors.darkBlue,
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
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontWeight: 700,
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
