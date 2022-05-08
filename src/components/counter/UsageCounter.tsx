import React, { useEffect } from 'react'
import { Flex, Box } from '@chakra-ui/react'
import UsageCounterTitle from './UsageCounterTitle'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import { fetchUsers } from '../../store/usersSlice'
import OverlappingAvatars from '../avatars/OverlappingAvatars'

const UsageCounter = (): JSX.Element => {
  const getUsers = useAppSelector((state) => state.users.users)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const getUsersAvatars = getUsers.filter((user, index) => index < 5)

  return (
    <Flex justify="center" data-testid="usage-counter-test-id">
      <Box p="5">
        <OverlappingAvatars users={getUsersAvatars} />
      </Box>
      <Box p="5">
        <UsageCounterTitle />
      </Box>
    </Flex>
  )
}

export default UsageCounter
