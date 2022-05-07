import React, { SyntheticEvent, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Grid from '@mui/material/Grid'
import LoadingButton from '@mui/lab/LoadingButton'
import SearchIcon from '@mui/icons-material/Search'
import { ICities } from '../../types/types'

const SearchField = ({ cities }: ICities): React.ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [city, setCity] = useState<string | null>(null)

  const searchOptions = {
    options: cities,
    getOptionLabel: (option: string) => option,
  }

  return (
    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} justifyContent="center">
        <Autocomplete
          {...searchOptions}
          id="disable-close-on-select"
          onChange={(event: SyntheticEvent<Element, Event>, newValue: string | null) => {
            setCity(newValue)
          }}
          renderInput={(params) => <TextField {...params} label="Najbliższe duże miasto" variant="standard" />}
        />
      </Grid>
      <Grid item xs={6} justifyContent="center">
        <LoadingButton loading={false} loadingPosition="start" startIcon={<SearchIcon />} variant="contained">
          Szukaj
        </LoadingButton>
      </Grid>
    </Grid>
  )
}

export default SearchField
