import React, { useEffect } from 'react'
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
    <div data-test-id="search-bar-test-id">
      <SearchField cities={getCities} />
    </div>
  )
}

export default SearchBar
