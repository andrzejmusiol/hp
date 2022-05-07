import React, { useEffect } from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import SearchField from './SearchField'
import { fetchCities } from '../../store/citiesSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'

const SearchBar = (): JSX.Element => {
  const getCities = useAppSelector((state) => state.cities.cities)
  const dispatch = useAppDispatch()

    const citySelectorCallback = (city: string) => {
      console.warn(city)
    }

  useEffect(() => {
    dispatch(fetchCities())
  }, [dispatch])

  return (
    <Box display="flex" justifyContent="center" alignItems="center" data-testid="search-bar-test-id">
      <SearchField cities={getCities} citySelectorCallback={citySelectorCallback} />
      <LoadingButton loading={false} loadingPosition="start" startIcon={<SearchIcon />} variant="contained">
        Szukaj
      </LoadingButton>
    </Box>
  )
}

export default SearchBar
