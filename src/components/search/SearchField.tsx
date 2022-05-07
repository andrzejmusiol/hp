import React, { SyntheticEvent } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import {ICitySelector} from "../../types/types"

const SearchField = ({ cities, citySelectorCallback }: ICitySelector): JSX.Element => {

  const searchOptions = {
    options: cities,
    getOptionLabel: (option: string) => option,
  }

  return (
    <Autocomplete
      fullWidth
      {...searchOptions}
      id="disable-close-on-select"
      onChange={(event: SyntheticEvent<Element, Event>, newValue: string | null, reason) => {
          if (reason === "selectOption" && newValue) citySelectorCallback(newValue)
          if (reason === "clear") citySelectorCallback('')
      }}
      renderInput={(params) => <TextField {...params} label="Najbliższe duże miasto" variant="standard" />}
    />
  )
}

export default SearchField
