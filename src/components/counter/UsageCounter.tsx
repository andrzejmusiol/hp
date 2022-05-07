import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
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
    <Grid container justifyContent="center" alignItems="center" spacing={3} data-testid="usage-counter-test-id">
      <Grid item justifyContent="center" alignItems="center" maxWidth="xs" padding="1rem">
        <OverlappingAvatars users={getUsersAvatars} />
      </Grid>
      <Grid item justifyContent="center" alignItems="center">
        <UsageCounterTitle />
      </Grid>
    </Grid>
  )
}

export default UsageCounter
