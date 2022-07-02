import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Box, Spacer, ButtonGroup, Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import LogoIcon from '../../assets/icons/Logo'
import UserProfileIcon from '../../assets/icons/UserProfile'
import { useAppSelector } from '../../hooks/storeHooks'
import { IHeader } from '../../types/types'
import { useAvatarColor, useUser } from '../../hooks/componentHooks'

const Header = ({ withBrand = true }: IHeader): JSX.Element => {
  const isUserAuthenticated = useAppSelector((state) => state.user.isAuthenticated)
  const getUserName = useAppSelector((state) => state.user.userName)
  const { avatarColor } = useAvatarColor()
  const { userAvatar } = useUser(getUserName, avatarColor)

  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" pb="1rem" data-testid="header-test-id" bg="white">
      {withBrand && (
        <Box>
          <Link to="/">
            <LogoIcon />
          </Link>
        </Box>
      )}
      <Spacer />
      <ButtonGroup gap="2">
        {isUserAuthenticated ? (
          <Link to="/profil">{userAvatar}</Link>
        ) : (
          <Link to="/login">
            <UserProfileIcon />
          </Link>
        )}
        <Link to="/offer">
          <ButtonGroup size="sm" isAttached>
            <Button mr="-px">
              <Box pr="2">Dodaj</Box>
              <AddIcon />
            </Button>
          </ButtonGroup>
        </Link>
      </ButtonGroup>
    </Flex>
  )
}

Header.defaultProps = {
  withBrand: false,
}

export default Header
