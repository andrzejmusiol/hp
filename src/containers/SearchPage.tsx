import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import SearchBar from '../components/search/SearchBar'

const SearchPage = (): React.ReactElement => (
  <Provider store={store}>
    <SearchBar />
  </Provider>
)

export default SearchPage
