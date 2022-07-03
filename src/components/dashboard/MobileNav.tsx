import React from 'react'
import { Flex, IconButton } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { IMobile } from '../../types/types'
import LogoIcon from '../../assets/icons/Logo'

const MobileNav = ({ onOpen, ...rest }: IMobile) => (
  <Flex
    ml={{ base: 0, md: 60 }}
    px={{ base: 4, md: 4 }}
    height="20"
    alignItems="center"
    justifyContent={{ base: 'space-between', md: 'flex-end' }}
    {...rest}
  >
    <IconButton
      display={{ base: 'flex', md: 'none' }}
      onClick={onOpen}
      variant="outline"
      aria-label="open menu"
      icon={<FiMenu />}
    />

    <Link to="/">
      <LogoIcon />
    </Link>
  </Flex>
)

export default MobileNav
