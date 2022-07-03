import React from 'react'
import { Box, Flex, CloseButton } from '@chakra-ui/react'
import { AiOutlineUser, AiOutlineContainer, AiOutlineRollback } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import NavItem from './NavItem'
import { ILinkItem, ISidebar } from '../../types/types'
import { DRAWER_BUTTON_TYPES, ROUTES, ROUTES_SIDEBAR_NAMES } from '../../contants'
import UserProfileIcon from '../../assets/icons/UserProfile'
import { useAppSelector } from '../../hooks/storeHooks'
import { useAvatarColor, useUser } from '../../hooks/componentHooks'

const LinkItems: Array<ILinkItem> = [
  {
    name: ROUTES_SIDEBAR_NAMES.USER_SETTINGS,
    icon: AiOutlineUser,
    routeLink: ROUTES.USER_PROFILE,
    type: DRAWER_BUTTON_TYPES.normal,
  },
  {
    name: ROUTES_SIDEBAR_NAMES.USER_OFFERS,
    icon: AiOutlineContainer,
    routeLink: ROUTES.USER_OFFERS,
    type: DRAWER_BUTTON_TYPES.normal,
  },
  {
    name: ROUTES_SIDEBAR_NAMES.LOG_OUT,
    icon: AiOutlineRollback,
    routeLink: ROUTES.START,
    type: DRAWER_BUTTON_TYPES.warning,
  },
]

const SidebarContent = ({ onClose, ...rest }: ISidebar) => {
  const isUserAuthenticated = useAppSelector((state) => state.user.isAuthenticated)
  const getUserName = useAppSelector((state) => state.user.userName)
  const { avatarColor } = useAvatarColor()
  const { userAvatar } = useUser(getUserName, avatarColor)

  return (
    <Box
      bg="white"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
      as="nav"
      zIndex="sticky"
      height="full"
      data-testid="dashboard-sidebar-test-id"
    >
      <Flex alignItems="center" m="1.7rem">
        {isUserAuthenticated ? (
          <Flex alignItems="center">
            {userAvatar}
            <Box ml="0.5rem" data-testid={`sidebar-${getUserName}-test-id`}>
              {getUserName}
            </Box>
          </Flex>
        ) : (
          <Link to="/login">
            <UserProfileIcon />
          </Link>
        )}
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} route={link.routeLink} type={link.type} name={link.name}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

export default SidebarContent
