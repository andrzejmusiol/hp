import React from 'react'
import { Select } from 'chakra-react-select'
import { ICitySelector } from '../../types/types'

const SearchField = ({ cities, citySelectorCallback }: ICitySelector): JSX.Element => (
  <Select
    selectedOptionStyle="color"
    options={cities}
    placeholder="Wybierz najbliższe duże miasto"
    onChange={(value) => {
      if (value) citySelectorCallback(value)
    }}
  />
)

export default SearchField
