import React from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Text,
  ModalBody,
  ModalFooter,
  Button,
  Heading,
  Flex,
  Box,
  Tooltip,
  Badge,
} from '@chakra-ui/react'
import { IOffer } from '../../types/types'
import Overlay from './Overlay'
import { colors } from '../../theme/colors'

interface IOfferModal {
  avatar: JSX.Element
  userName: string
  phone: number
  isOpen: boolean
  onClose: () => void
  offer: IOffer
  isUserAuthenticated: boolean
}

const OfferModal = ({
  avatar,
  userName,
  phone,
  isOpen,
  onClose,
  offer,
  isUserAuthenticated,
}: IOfferModal): JSX.Element => {
  const phoneNumber = isUserAuthenticated ? phone : '+48 XXX-XXX-XXX'

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside" motionPreset="slideInBottom">
      <Overlay />
      <ModalContent p="3rem">
        <Flex alignItems="center" mb="1rem">
          {avatar}
          <Heading as="h3" ml="0.7rem">
            {userName}
          </Heading>
        </Flex>
        <ModalHeader p="0" as="h4">
          {offer.title}
        </ModalHeader>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          data-testid="offer-city-id"
          alignContent="center"
          display="flex"
          mt="1rem"
        >
          <Badge>{offer.city}</Badge> {offer.street}
        </Box>
        <ModalCloseButton />
        <ModalBody p="0">
          <Text>{offer.content}</Text>
          <Box>
            <Box mt="2rem" textAlign="right" data-testid="offer-reward-test-id">
              <Heading as="h3" ml="0.7rem">
                Nagroda:
              </Heading>
              <Box as="span" color={colors.yellow} fontSize="lg" fontWeight="bold">
                {offer.rewardPoints} punktów
              </Box>
              <Box as="h4">{offer.reward ? `${offer.reward} PLN` : ''}</Box>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter p="0" mt="1rem">
          <Box>
            <Text align="right">Skontaktuj się:</Text>
            <Tooltip placement="top" label='Zaloguj się, aby zobaczyć numer'>
              <Button variant="blue-button">{phoneNumber}</Button>
            </Tooltip>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default OfferModal
