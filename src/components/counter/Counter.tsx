import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import CounterTitle from './CounterTitle'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import { fetchUsers } from '../../store/usersSlice'
import OverlappingAvatars from '../avatars/OverlappingAvatars'

const Counter = (): JSX.Element => {
  const getUsers = useAppSelector((state) => state.users.users)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const getUsersAvatars = getUsers.filter((user, index) => index < 5)

  return (
      <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={3}
      >
      <Grid item justifyContent="center" alignItems="center" direction="row" maxWidth="xs" padding="1rem">
        <OverlappingAvatars users={getUsersAvatars} />
      </Grid>
      <Grid item justifyContent="center" alignItems="center" direction="row" >
        <CounterTitle />
      </Grid>
    </Grid>
  )
}

export default Counter
