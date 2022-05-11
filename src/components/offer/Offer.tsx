import React from 'react'
import { Box, Heading, Badge, Text } from '@chakra-ui/react'
import { IOffersContainer } from '../../types/types'
import UserAvatar from '../avatars/UserAvatar'
import { colors } from '../../theme/colors'

const Offer = ({ offer, user }: IOffersContainer): JSX.Element => {
  const renderLimitedContent = (content: string) => (content.length > 65 ? `${content.substring(0, 65)}...` : content)

  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" m="0.5rem">
      <Box p="6" display="flex">
        <Box m="0.5rem">
          <UserAvatar userName={user.personalData.name} />
        </Box>
        <Box m="0.5rem">
          <Heading as="h3" mb="2rem" h="2rem">
            {offer.title}
          </Heading>
          <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
            <Badge>{offer.city}</Badge> {offer.street}
          </Box>
          <Text fontSize="md">{renderLimitedContent(offer.content)}</Text>
          <Box mt="2rem" textAlign="right">
            <Box as="span" color={colors.yellow} fontSize="lg" fontWeight="bold">
              {offer.rewardPoints} punktów
            </Box>
            <Box as="h4">{offer.reward ? `${offer.reward} PLN` : 'FREE'}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Offer
