import React from 'react'
import { Flex, Box, Spacer, ButtonGroup, Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import LogoIcon from '../../assets/icons/Logo'

const Header = (): JSX.Element => (
  <Flex minWidth="max-content" alignItems="center" gap="2" data-testid="header-test-id">
    <Box>
      <LogoIcon />
    </Box>
    <Spacer />
    <ButtonGroup gap="2">
      <Button variant="link">Profil</Button>
      <ButtonGroup size="sm" isAttached variant="blue-button">
        <Button mr="-px" size="md">
          <Box pr="2">Ogłoszenie</Box>
          <AddIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  </Flex>
)

export default Header
