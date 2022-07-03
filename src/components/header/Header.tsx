import React, { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Box, Button, ButtonGroup, Flex, Spacer } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import LogoIcon from '../../assets/icons/Logo'
import UserProfileIcon from '../../assets/icons/UserProfile'
import { useAppSelector } from '../../hooks/storeHooks'
import { useAvatarColor, useUser } from '../../hooks/componentHooks'
import { HEADER_EXCLUDED_PATHS } from '../../contants'

const Header = (): JSX.Element => {
  const isUserAuthenticated = useAppSelector((state) => state.user.isAuthenticated)
  const getUserName = useAppSelector((state) => state.user.userName)
  const { pathname } = useLocation()
  const { avatarColor } = useAvatarColor()
  const { userAvatar } = useUser(getUserName, avatarColor)

  const isHeaderRendered = !HEADER_EXCLUDED_PATHS.includes(pathname)

  return useMemo(() => {
    if (isHeaderRendered) {
      return (
        <Flex minWidth="max-content" alignItems="center" gap="2" p="1rem" data-testid="header-test-id" bg="white">
          <Box>
            <Link to="/">
              <LogoIcon />
            </Link>
          </Box>
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
    return <div />
  }, [isHeaderRendered, isUserAuthenticated, userAvatar])
}

export default Header
