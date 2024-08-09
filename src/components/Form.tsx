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
  SimpleGrid,
  Box,
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

  const [pdfFile, setPdfFile] = useState<string | null>(null);

  const onFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      const fileURL = URL.createObjectURL(file);
      setPdfFile(fileURL);
    } else {
      alert('Please upload a valid PDF file');
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Open First Modal</Button>

      <SimpleGrid columns={2} spacing={10} height="100vh">
        <Box bg="blue">
          <input type="file" accept="application/pdf" onChange={onFileChange} />
          {pdfFile && (
            <div style={{ height: '750px', width: '100%', marginTop: '20px' }}>
              <iframe src={`${pdfFile}#toolbar=0`} width="100%" height="100%" title="PDF Viewer"></iframe>
            </div>
          )}
        </Box>
        <Box bg="red">
          表
        </Box>
      </SimpleGrid>

      <FirstModal isOpen={isOpen} onClose={onClose} openSecondModal={openSecondModal} />

      <SecondModal isOpen={isSecondModalOpen} onClose={closeSecondModal} />
    </>
  )
}

export default Form