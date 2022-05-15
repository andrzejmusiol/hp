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
} from '@chakra-ui/react'
import { IOffer } from '../../types/types'
import Overlay from './Overlay'

interface IOfferModal {
  avatar: JSX.Element
  isOpen: boolean
  onClose: () => void
  offer: IOffer
}

const OfferModal = ({ avatar, isOpen, onClose, offer }: IOfferModal): JSX.Element => (
  <Modal isCentered isOpen={isOpen} onClose={onClose} size="xs" scrollBehavior="inside" motionPreset="slideInBottom">
    <Overlay />
    <ModalContent>
      {avatar}
      <ModalHeader>{offer.title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>{offer.content}</Text>
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Zamknij</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
)

export default OfferModal
