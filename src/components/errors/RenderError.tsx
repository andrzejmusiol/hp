import React from 'react'
import { Alert, AlertIcon, AlertTitle, AlertDescription, Flex, Container } from '@chakra-ui/react'

const RenderError = (): JSX.Element => (
  <Container maxW="100%" mt="1rem" mb="3rem">
    <Flex justifyContent="center" alignItems="center" mb="2rem">
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Ups, coś poszło nie tak!</AlertTitle>
        <AlertDescription>Spróbuj ponownie</AlertDescription>
      </Alert>
    </Flex>
  </Container>
)

export default RenderError
