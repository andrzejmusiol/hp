import React, { useState } from 'react'
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  FormControl,
  FormLabel,
  HStack,
  InputGroup,
  useBreakpointValue,
  InputRightElement,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import OverlappingAvatars from '../avatars/OverlappingAvatars'
import { useAppSelector } from '../../hooks/storeHooks'
import { colors } from '../../theme/colors'

const RegisterForm = () => {
  const getUsers = useAppSelector((state) => state.users.users)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Box position="relative">
      <Container
        as={SimpleGrid}
        maxW="7xl"
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            data-testId="register-form-header-test-id"
          >
            Dołącz do społęczności, która kocha pomagać
          </Heading>
          <Stack direction="row" spacing={4} align="center">
            <OverlappingAvatars users={getUsers} />
            <Text fontFamily="heading" fontSize={{ base: '2xl', md: '3xl' }}>
              +
            </Text>
            <Flex
              align="center"
              justify="center"
              fontFamily="heading"
              fontSize={{ base: 'sm', md: 'lg' }}
              bg="gray.800"
              color="white"
              rounded="full"
              width={useBreakpointValue({ base: '44px', md: '60px' })}
              height={useBreakpointValue({ base: '44px', md: '60px' })}
              position="relative"
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bgGradient: `${colors.blue}`,
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              TY
            </Flex>
          </Stack>
        </Stack>
        <Stack rounded="xl" spacing={{ base: 8 }} maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Text>Zarejestruj się, aby wesprzeć lokalną społeczność, pomagać sobie nawzajem i zacieśniać więzy!</Text>
          </Stack>
          <Box as="form" mt={10}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Imię</FormLabel>
                    <Input type="text" data-testId="first-name-input-test-id" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
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
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h="full">
                    <Button variant="ghost" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button variant="blue-button" data-testId="submit-button-test-id">
                  Zarejestruj się
                </Button>
              </Stack>
            </Stack>
          </Box>
          form
        </Stack>
      </Container>
    </Box>
  )
}

export default RegisterForm
