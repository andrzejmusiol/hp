import React, { useEffect } from 'react'
import { Container } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks'
import { fetchOffers } from '../store/offersSlice'
import OfferContainer from '../components/offer/Offer'

const Results = (): JSX.Element => {
  const getOffers = useAppSelector((state) => state.offers.offers)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchOffers())
  }, [dispatch])

  const renderOffers = () => getOffers.map((offer) => <OfferContainer offer={offer} />)

  return (
    <Container maxW="3xl" mt="10rem" mb="20rem">
      {renderOffers()}
    </Container>
  )
}

export default Results
