import React from 'react'
import { Box } from '@chakra-ui/react'
import { IOffersContainer } from '../../types/types'

const OfferContainer = ({ offer }: IOffersContainer): JSX.Element => (
  <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Box p="6">
      <Box display="flex" alignItems="baseline">
        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
          {offer.nearestCity} | {offer.city}
        </Box>
      </Box>
      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        {offer.title}
      </Box>
      <Box>
        {offer.reward}
        <Box as="span" color="gray.600" fontSize="sm"> PLN</Box>
      </Box>
    </Box>
  </Box>
)

export default OfferContainer
