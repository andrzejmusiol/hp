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
import { IOfferModal } from '../../types/types'
import Overlay from './Overlay'

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
      <ModalContent p="3rem" data-testid="offer-modal-test-id">
        <Flex alignItems="center" mb="1rem" data-testid="offer-modal-avatar-test-id">
          {avatar}
          <Heading as="h3" ml="1rem" data-testId="offer-modal-user-name-test-id">
            {userName}
          </Heading>
        </Flex>
        <ModalHeader p="0" as="h4" data-testid="offer-modal-title-test-id">
          {offer.title}
        </ModalHeader>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          alignContent="center"
          display="flex"
          mt="1rem"
        >
          <Badge data-testid="offer-modal-city-test-id">{offer.city}</Badge> {offer.street}
        </Box>
        <ModalCloseButton data-testid="offer-modal-close-button-test-id" />
        <ModalBody p="0">
          <Text textAlign="left" data-testid="offer-modal-content-test-id">
            {offer.content}
          </Text>
          <Box>
            <Box mt="2rem" textAlign="right" data-testid="offer-reward-test-id">
              <Heading as="h3" ml="0.7rem">
                Nagroda:
              </Heading>
              <Box textAlign="right" data-testid="offer-reward-test-id">
                {offer.reward ? (
                  <Box as="h4" data-testid="offer-modal-reward-test-id">{`${offer.reward} PLN`}</Box>
                ) : (
                  <Box as="h4">{offer.otherReward}</Box>
                )}
              </Box>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter p="0" mt="1rem">
          <Box>
            <Text align="right">Skontaktuj się:</Text>
            <Tooltip
              placement="top"
              label="Zaloguj się, aby zobaczyć numer"
              data-testid="number-button-tooltip-test-id"
            >
              <Button data-testid="number-button-test-id">{phoneNumber}</Button>
            </Tooltip>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default OfferModal
