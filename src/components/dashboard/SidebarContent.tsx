import React from 'react'
import { Box, Flex, CloseButton } from '@chakra-ui/react'
import { AiOutlineUser, AiOutlineContainer, AiOutlineRollback } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import NavItem from './NavItem'
import { ILinkItem, ISidebar } from '../../types/types'
import { DRAWER_BUTTON_TYPES, ROUTES } from '../../contants'
import UserProfileIcon from '../../assets/icons/UserProfile'
import { useAppSelector } from '../../hooks/storeHooks'
import { useAvatarColor, useUser } from '../../hooks/componentHooks'

const LinkItems: Array<ILinkItem> = [
  { name: 'Profil', icon: AiOutlineUser, routeLink: ROUTES.USER_PROFILE, type: DRAWER_BUTTON_TYPES.normal },
  { name: 'Ogłoszenia', icon: AiOutlineContainer, routeLink: ROUTES.USER_OFFERS, type: DRAWER_BUTTON_TYPES.normal },
  { name: 'Wyloguj', icon: AiOutlineRollback, routeLink: ROUTES.START, type: DRAWER_BUTTON_TYPES.warning },
]

const SidebarContent = ({ onClose, ...rest }: ISidebar) => {
  const isUserAuthenticated = useAppSelector((state) => state.user.isAuthenticated)
  const getUserName = useAppSelector((state) => state.user.userName)
  const { avatarColor } = useAvatarColor()
  const { userAvatar } = useUser(getUserName, avatarColor)

  return (
    <Box bg="white" w={{ base: 'full', md: 60 }} pos="fixed" h="full" {...rest} as="nav" zIndex="sticky" height="full">
      <Flex alignItems="center" m="0.7rem" justifyContent="space-between">
        {isUserAuthenticated ? (
          <Flex alignItems="center">
            {userAvatar}
            <Box ml="0.5rem">{getUserName}</Box>
          </Flex>
        ) : (
          <Link to="/login">
            <UserProfileIcon />
          </Link>
        )}
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} route={link.routeLink} type={link.type}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

export default SidebarContent
