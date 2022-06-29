import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  HStack,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center" data-testId="register-form-header-test-id">
          <Heading fontSize="4xl">Dołącz</Heading>
          <Text>do społeczności, która kocha pomagać ✌️</Text>
        </Stack>
        <Box rounded="lg" boxShadow="lg" p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Imię</FormLabel>
                  <Input type="text" data-testId="first-name-input-test-id" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Nazwisko</FormLabel>
                  <Input type="text" data-testId="surname-input-test-id" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>E-mail</FormLabel>
              <Input type="email" data-testId="email-input-test-id" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Hasło</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} data-testId="register-password-test-id" />
                <InputRightElement h="full">
                  <Button variant="ghost" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button loadingText="Rejestracja..." variant="blue-button">
                Dołącz
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align="center">
                Masz już konto? <Link to="/">Zaloguj się</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default RegisterForm
