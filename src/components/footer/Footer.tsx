import React, { useMemo } from 'react'
import { Box, Container, Stack, Link, Text } from '@chakra-ui/react'
import { Link as RouteLink, useLocation } from 'react-router-dom'
import GitHubIcon from '../../assets/icons/GitHub'
import { FOOTER_EXCLUDED_PATHS } from '../../contants'

const Footer = (): JSX.Element => {
  const { pathname } = useLocation()
  const isFooterRendered = !FOOTER_EXCLUDED_PATHS.includes(pathname)

  return useMemo(() => {
    if (isFooterRendered) {
      return (
        <Box data-testId="footer-test-id">
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
                <RouteLink to="/faq">Jak to działa?</RouteLink>
              </Text>
              <Text>
                <RouteLink to="/kontakt">Kontakt</RouteLink>
              </Text>
              <Text>
                <Link href="https://github.com/bigeyedes/help-fans" isExternal>
                  <GitHubIcon />
                </Link>
              </Text>
            </Stack>
            S<Text fontSize="md">© {new Date().getFullYear()} Help-fans. Wszystkie prawa zastrzeżone</Text>
          </Container>
        </Box>
      )
    }
    return <div />
  }, [isFooterRendered])
}

export default Footer
