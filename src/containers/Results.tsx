import React, { useEffect, useMemo } from 'react'
import { Box, Container, Flex, Text, Heading } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks'
import { fetchOffers } from '../store/offersSlice'
import Offer from '../components/offer/Offer'
import RenderError from '../components/errors/RenderError'

const Results = (): JSX.Element => {
  const getOffers = useAppSelector((state) => state.offers.offers)
  const offersLoading = useAppSelector((state) => state.offers.offersLoading)
  const offersError = useAppSelector((state) => state.offers.offersError)
  const getSelectedCity = useAppSelector((state) => state.cities.selectedCity)
  const getUsers = useAppSelector((state) => state.users.users)
  const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchOffers())
    }, [dispatch])

  const getOffersByCity = useMemo(
    () => getOffers.filter((offer) => offer.nearestCity === getSelectedCity.label),
    [getOffers, getSelectedCity.label]
  )

  const renderOffers = () =>
    getOffersByCity.map((offer) => {
      const getOfferUser = getUsers.find((user) => user.id === offer.userId)
      return getOfferUser ? <Offer key={offer.id} offer={offer} user={getOfferUser} isLoading={offersLoading} /> : null
    })

  return offersError ? (
    <RenderError />
  ) : (
    <Container maxW="100%" mt="1rem" mb="3rem">
      <Flex justifyContent="center" alignItems="center" mb="2rem">
        <Box textAlign="center" w="100%">
          <Text>okolica</Text>
          <Heading as="h2" data-testid="results-heading-test-id">
            {getSelectedCity.label}
          </Heading>
          <Text data-testid="results-subtitle-test-id">{renderOffers().length} osób szuka pomocy</Text>
        </Box>
      </Flex>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        {renderOffers()}
      </Flex>
    </Container>
  )
}

export default Results
