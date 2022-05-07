import React, { SyntheticEvent, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import LoadingButton from '@mui/lab/LoadingButton'
import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import { ICities } from '../../types/types'

const SearchField = ({ cities }: ICities): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [city, setCity] = useState<string | null>(null)

  const searchOptions = {
    options: cities,
    getOptionLabel: (option: string) => option,
  }

  return (
      <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          data-testid="search-bar-test-id"
      >
            <Autocomplete
                fullWidth
              {...searchOptions}
              id="disable-close-on-select"
              onChange={(event: SyntheticEvent<Element, Event>, newValue: string | null) => {
                setCity(newValue)
              }}
              renderInput={(params) => <TextField {...params} label="Najbliższe duże miasto" variant="standard" />}
            />
            <LoadingButton loading={false} loadingPosition="start" startIcon={<SearchIcon />} variant="contained">
              Szukaj
            </LoadingButton>
      </Box>
  )
}

export default SearchField
