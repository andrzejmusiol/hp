import React from 'react'
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
  useColorModeValue,
  Link,
  Checkbox,
} from '@chakra-ui/react'

const LoginForm = () => (
  <Flex minH="100vh" align="center" justify="center" bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
      <Stack align="center" data-testId="login-form-heading-test-id">
        <Heading fontSize="4xl">Zaloguj się</Heading>
        <Text>aby zacząć pomagać, lub otzymać pomoc ✌️</Text>
      </Stack>
      <Box rounded="lg" bg={useColorModeValue('white', 'gray.700')} boxShadow="lg" p={8}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>E-mail</FormLabel>
            <Input type="email" data-testId="login-form-email-test-id" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Hasło</FormLabel>
            <Input type="password" data-testId="login-form-password-test-id" />
          </FormControl>
          <Stack spacing={10}>
            <Stack direction={{ base: 'column', sm: 'row' }} align="start" justify="space-between">
              <Checkbox>Remember me</Checkbox>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link color="blue.400">Forgot password?</Link>
            </Stack>
            <Button variant="blue-button" data-testId="login-form-submit-button-test-id">
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
)

export default LoginForm
