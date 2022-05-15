import React, {useMemo} from 'react'
import { Box, Heading, Badge, Text, Skeleton, useDisclosure } from '@chakra-ui/react'
import { IOffersContainer } from '../../types/types'
import UserAvatar from '../avatars/UserAvatar'
import { avatarsColors, colors } from '../../theme/colors'
import { useAppDispatch } from '../../hooks/storeHooks'
import { setSelectedOffer } from '../../store/offersSlice'
import OfferModal from './OfferModal'

const Offer = ({ offer, user, isLoading }: IOffersContainer): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const renderLimitedContent = (content: string) => (content.length > 65 ? `${content.substring(0, 65)}...` : content)
  const dispatch = useAppDispatch()

  const setAndOpenTheOffer = async () => {
    await dispatch(setSelectedOffer(offer))
    onOpen()
  }

  const avatarOfferColor = useMemo(() =>
    avatarsColors[Object.keys(avatarsColors)[Math.floor(Math.random() * Object.keys(avatarsColors).length)]]
  , [])

  const userAvatar = useMemo(() =>
    <UserAvatar userName={user.personalData.name} data-testid="offer-avatar-test-id" avatarColors={avatarOfferColor} />,
      [user, avatarOfferColor])

  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      m="0.5rem"
      data-testid="offer-test-id"
      onClick={setAndOpenTheOffer}
    >
      <Skeleton isLoaded={!isLoading} data-testid="offer-skeleton-test-id">
        <Box p="6" display="flex">
          <Box m="0.5rem">{userAvatar}</Box>
          <Box m="0.5rem">
            <Heading as="h3" mb="2rem" h="2rem" data-testid="offer-heading-test-id">
              {offer.title}
            </Heading>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              data-testid="offer-city-id"
            >
              <Badge>{offer.city}</Badge> {offer.street}
            </Box>
            <Text fontSize="md" data-testid="offer-content-id">
              {renderLimitedContent(offer.content)}
            </Text>
            <Box mt="2rem" textAlign="right" data-testid="offer-reward-test-id">
              <Box as="span" color={colors.yellow} fontSize="lg" fontWeight="bold">
                {offer.rewardPoints} punktów
              </Box>
              <Box as="h4">{offer.reward ? `${offer.reward} PLN` : 'FREE'}</Box>
            </Box>
          </Box>
        </Box>
      </Skeleton>
      <OfferModal avatar={userAvatar} isOpen={isOpen} onClose={onClose} offer={offer} />
    </Box>
  )
}

export default Offer
