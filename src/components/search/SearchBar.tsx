import React, { useEffect } from 'react'
import SearchField from './SearchField'
import { fetchCities } from '../../store/citiesSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'

const SearchBar = (): JSX.Element => {
  const getCities = useAppSelector((state) => state.cities.cities)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCities())
  }, [dispatch])

  return <SearchField cities={getCities} />
}

export default SearchBar
