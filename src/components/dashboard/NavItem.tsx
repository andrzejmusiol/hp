import React from 'react'
import { Icon, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { INavItem } from '../../types/types'
import { colors } from '../../theme/colors'
import { DRAWER_BUTTON_TYPES } from '../../contants'

const NavItem = ({ icon, children, route, type }: INavItem) => {
  const getTypeColor = () => (type === DRAWER_BUTTON_TYPES.warning ? colors.red : colors.black)

  return (
    <Link to={route}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color={getTypeColor()}
        _hover={{
          bg: `${colors.brightBlue}`,
          color: `${colors.lightBlue}`,
          transition: '0.3s ease-out',
        }}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: `${colors.lightBlue}`,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

export default NavItem
