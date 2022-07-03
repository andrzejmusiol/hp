import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react'
import SidebarContent from '../../components/dashboard/SidebarContent'
import MobileNav from '../../components/dashboard/MobileNav'
import { colors } from '../../theme/colors'

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" bg={colors.brightBlue} data-testid="dashboard-test-id">
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Box as="main" p="4">
          <Outlet />
        </Box>
      </Box>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
    </Box>
  )
}

export default Dashboard
