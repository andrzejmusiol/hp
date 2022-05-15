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
  ModalOverlay
} from '@chakra-ui/react'
import {IOffer} from "../../types/types"
import Overlay from "./Overlay"

interface IOfferModal {
  isOpen: boolean
  onClose: () => void
  offer: IOffer
}

const OfferModal = ({ isOpen, onClose, offer }: IOfferModal): JSX.Element => (
  <Modal isCentered isOpen={isOpen} onClose={onClose} size='xs'>
    <Overlay />
    <ModalContent>
      <ModalOverlay />
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
