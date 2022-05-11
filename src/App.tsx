import React from 'react'
import { Provider } from 'react-redux'
import { Box } from '@chakra-ui/react'
import { store } from './store/store'
import SearchPage from './containers/SearchPage'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const App = (): JSX.Element => (
  <Provider store={store}>
    <Box w="100%" p={4}>
      <Header />
      <SearchPage />
      <Footer />
    </Box>
  </Provider>
)

export default App
