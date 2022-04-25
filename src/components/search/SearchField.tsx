import React, { SyntheticEvent, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Grid from '@mui/material/Grid'
import LoadingButton from '@mui/lab/LoadingButton'
import SearchIcon from '@mui/icons-material/Search'
import { ICities, ICityOption } from '../../types/types'

const SearchField = ({ cities }: ICities): React.ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [city, setCity] = useState<string | undefined>('')

  const searchOptions = {
    options: cities,
    getOptionLabel: (option: ICityOption) => option.name,
  }

  return (
    <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="center">
      <Grid item xs={2}>
        <Autocomplete
          {...searchOptions}
          id="disable-close-on-select"
          onChange={(event: SyntheticEvent<Element, Event>, newValue: ICityOption | null) => {
            setCity(newValue?.name)
          }}
          renderInput={(params) => <TextField {...params} label="Miasto" variant="standard" />}
        />
      </Grid>
      <Grid item xs={4}>
        <LoadingButton loading={false} loadingPosition="start" startIcon={<SearchIcon />} variant="contained">
          Szukaj
        </LoadingButton>
      </Grid>
    </Grid>
  )
}

export default SearchField
