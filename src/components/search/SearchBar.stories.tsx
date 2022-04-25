import React from 'react'
import { TProvider } from '../../theme'
import { cities } from '../../mocks/dataMocks'
import SearchBar from './SearchBar'

export default {
  title: 'SearchBar',
  component: SearchBar,
}

export const SearchComponent = () => (
  <TProvider>
    <SearchBar cities={cities} />
  </TProvider>
)
