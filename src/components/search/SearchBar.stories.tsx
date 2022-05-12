import React from 'react'
import { Provider } from 'react-redux'
import { TProvider } from '../../theme/theme'
import { BrowserRouter } from 'react-router-dom'
import SearchBar from './SearchBar'
import { store } from '../../store/store'

export default {
  title: 'SearchBar',
  component: SearchBar,
}

export const SearchComponent = () => (
  <BrowserRouter>
    <TProvider>
      <Provider store={store}>
        <SearchBar />
      </Provider>
    </TProvider>
  </BrowserRouter>
)
