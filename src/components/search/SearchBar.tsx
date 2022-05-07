import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import SearchField from './SearchField'
import { fetchCities } from '../../store/slices'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'

const SearchBar = (): React.ReactElement => {
  const getCities = useAppSelector((state) => state.cities.cities)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCities())
  }, [dispatch])

  return (
    <Grid container justifyContent="center" alignItems="center" direction="row">
      <SearchField cities={getCities} data-test-id="search-bar-test-id" />
    </Grid>
  )
}

export default SearchBar
