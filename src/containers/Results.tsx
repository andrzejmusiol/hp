import React, { useEffect } from 'react'
import { Box, Container, Flex, Text, Heading } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks'
import { fetchOffers } from '../store/offersSlice'
import Offer from '../components/offer/Offer'

const Results = (): JSX.Element => {
  const getOffers = useAppSelector((state) => state.offers.offers)
  const getSelectedCity = useAppSelector((state) => state.cities.selectedCity)
  const getUsers = useAppSelector((state) => state.users.users)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchOffers())
  }, [dispatch])

  console.warn(getSelectedCity)

  const renderOffers = () =>
    getOffers.map((offer) => {
      const offerUser = getUsers.find((user) => user.id === offer.userId)
      return offerUser ? <Offer offer={offer} user={offerUser} /> : null
    })

  return (
    <Container maxW='100%' mt="3rem" mb="3rem">
      <Flex justifyItems="center" alignItems="center">
        <Box textAlign="center" w="100%">
          <Text>okolica</Text>
          <Heading as="h2">Bydgoszcz</Heading>
          <Text>{getOffers.length} osób szuka pomocy</Text>
        </Box>
      </Flex>
      <Flex justifyItems="center" alignItems="center" flexWrap='wrap'>
        {renderOffers()}
      </Flex>
    </Container>
  )
}

export default Results
