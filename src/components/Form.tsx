"use client"
import React, { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import SecondModal from './SecondModal';
import FirstModal from './FirstModal';

const Form = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);

  const openSecondModal = () => {
    onClose();
    setSecondModalOpen(true);
  };

  const closeSecondModal = () => {
    setSecondModalOpen(false);
    onOpen();
  };
  return (
    <>
      <Button onClick={onOpen}>Open First Modal</Button>

      <FirstModal isOpen={isOpen} onClose={onClose} openSecondModal={openSecondModal} />

      <SecondModal isOpen={isSecondModalOpen} onClose={closeSecondModal} />
    </>
  )
}

export default Form