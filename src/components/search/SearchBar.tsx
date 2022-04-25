import React from 'react'
import { ICities } from '../../types/types'
import SearchField from './SearchField'

const SearchBar = ({ cities }: ICities): React.ReactElement => <SearchField cities={cities} />

export default SearchBar
