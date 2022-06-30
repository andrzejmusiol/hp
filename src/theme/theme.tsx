import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/quicksand/400.css'
import '@fontsource/quicksand/500.css'
import '@fontsource/quicksand/600.css'
import '@fontsource/quicksand/700.css'
import { styles } from './styles'
import { Button } from './components'

const overrides = {
  styles,
  components: {
    Button,
  },
}

export const theme = extendTheme(overrides)

export interface IThemeProvider {
  children: JSX.Element
}

export const ThemeProvider = ({ children }: IThemeProvider) => <ChakraProvider theme={theme}>{children}</ChakraProvider>
