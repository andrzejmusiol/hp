import React from 'react'
import { Box, Container, Stack, Link, Text } from '@chakra-ui/react'
import GitHubIcon from '../../assets/icons/GitHub'

const Footer = (): JSX.Element => (
  <Box>
    <Container
      as={Stack}
      maxW="6xl"
      py={4}
      direction={{ base: 'column', md: 'row' }}
      spacing={4}
      justify={{ base: 'center', md: 'space-between' }}
      align={{ base: 'center', md: 'center' }}
    >
      <Stack direction="row" spacing={6}>
        <Text my="0">
          <Link href="#">Jak to działa?</Link>
        </Text>
        <Text>
          <Link href="#">Kontakt</Link>
        </Text>
        <Text>
          <Link href="https://github.com/bigeyedes/help-fans" isExternal>
            <GitHubIcon />
          </Link>
        </Text>
      </Stack>
      <Text>© {new Date().getFullYear()} Help-fans. Wszystkie prawa zastrzeżone</Text>
    </Container>
  </Box>
)

export default Footer
