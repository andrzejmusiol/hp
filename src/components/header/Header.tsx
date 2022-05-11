import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Box, Spacer, ButtonGroup, Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import LogoIcon from '../../assets/icons/Logo'

const Header = (): JSX.Element => (
  <Flex minWidth="max-content" alignItems="center" gap="2" data-testid="header-test-id">
    <Box>
      <Link to="/">
        <LogoIcon />
      </Link>
    </Box>
    <Spacer />
    <ButtonGroup gap="2">
      <Link to="/profil">
        <Button variant="link" mt="0.5rem">
          Profil
        </Button>
      </Link>
      <Link to="/offer">
        <ButtonGroup size="sm" isAttached variant="blue-button">
          <Button mr="-px" size="md">
            <Box pr="2">Ogłoszenie</Box>
            <AddIcon />
          </Button>
        </ButtonGroup>
      </Link>
    </ButtonGroup>
  </Flex>
)

export default Header
