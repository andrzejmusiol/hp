import React from 'react'
import { Provider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { store } from './store/store'
import SearchPage from './containers/SearchPage'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Results from './containers/Results'

const App = (): JSX.Element => (
  <Provider store={store}>
    <Box w="100%" p={4}>
      <Header />
      <Routes>
        <Route index element={<SearchPage />} />
        <Route path="ogloszenia" element={<Results />} />
      </Routes>
      <Footer />
    </Box>
  </Provider>
)

export default App
