import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react';

interface SecondModalProps {
    isOpen: boolean;
    onClose: () => void;
    openSecondModal: () => void;
}

const FirstModal = ({ isOpen, onClose, openSecondModal }: SecondModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>First Modal</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    This is the first modal. Click the button below to open the second modal.
                    <Button mt={4} colorScheme="blue" onClick={openSecondModal}>
                        Open Second Modal
                    </Button>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="red" mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default FirstModal