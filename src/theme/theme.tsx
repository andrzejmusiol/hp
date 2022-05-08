import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/quicksand/400.css'
import '@fontsource/quicksand/500.css'
import '@fontsource/quicksand/600.css'
import '@fontsource/quicksand/700.css'
import { styles } from './styles'
import { components } from './components'

export const theme = extendTheme({
  styles,
  components,
})

export interface IThemeProvider {
  children: JSX.Element
}

export const TProvider = ({ children }: IThemeProvider) => <ChakraProvider theme={theme}>{children}</ChakraProvider>
