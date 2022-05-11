import React from 'react'
import { Flex, Link } from '@chakra-ui/react'
import GitHubIcon from '../../assets/icons/GitHub'

const Footer = (): JSX.Element => (
  <Flex minWidth="max-content" align="center" justify="center" gap="2" data-testid="footer-test-id">
    <Link href="https://github.com/bigeyedes/help-fans" isExternal>
      <GitHubIcon />
    </Link>
  </Flex>
)

export default Footer
