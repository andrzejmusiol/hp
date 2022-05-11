import React, { useEffect } from 'react'
import { Button, Flex, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
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
    <Flex minWidth="max-content" align="center" justify="center" data-testid="search-bar-test-id">
      <Box p="2" w="70%">
        <SearchField cities={getCities} citySelectorCallback={citySelectorCallback} />
      </Box>
      <Box p="2">
        <Button variant="blue-button" loadingText="Szukam" colorScheme="teal">
          <Link to="/ogloszenia">Szukaj</Link>
        </Button>
      </Box>
    </Flex>
  )
}

export default SearchBar
