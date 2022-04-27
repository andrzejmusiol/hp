import React from 'react'
import { Provider } from 'react-redux'
import { TProvider } from '../../theme'
import SearchBar from './SearchBar'
import { store } from '../../store/store'

export default {
  title: 'SearchBar',
  component: SearchBar,
}

export const SearchComponent = () => (
  <TProvider>
    <Provider store={store}>
      <SearchBar />
    </Provider>
  </TProvider>
)
