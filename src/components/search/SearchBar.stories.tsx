import React from 'react'
import SearchBar from './SearchBar'
import { TProvider } from '../../theme'
import { voivodeships, cities } from '../../mocks/dataMocks'

export default {
  title: 'SearchBar',
  component: SearchBar,
}

export const SearchComponent = () => (
  <TProvider>
    <SearchBar voivodeships={voivodeships} cities={cities} />
  </TProvider>
)
