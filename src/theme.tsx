import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import '@fontsource/quicksand/400.css'
import '@fontsource/quicksand/500.css'
import '@fontsource/quicksand/600.css'
import '@fontsource/quicksand/700.css'

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
  },
})

interface IThemeProvider {
  children: JSX.Element
}

export const TProvider = ({ children }: IThemeProvider) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
