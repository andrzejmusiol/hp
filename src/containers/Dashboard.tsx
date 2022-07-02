import React from 'react'
import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react'
import SidebarContent from '../components/dashboard/SidebarContent'
import MobileNav from '../components/dashboard/MobileNav'
import { colors } from '../theme/colors'

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={colors.brightBlue}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
        isFullHeight
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
    </Box>
  )
}

export default Dashboard
