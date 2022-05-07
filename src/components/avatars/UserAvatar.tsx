import React from 'react'
import Avatar from '@mui/material/Avatar'
import { avatarsColors } from '../../theme/colors'

interface IUserAvatar {
  userName: string
}

const UserAvatar = ({ userName }: IUserAvatar): JSX.Element => {
  const colors =
    avatarsColors[Object.keys(avatarsColors)[Math.floor(Math.random() * Object.keys(avatarsColors).length)]]

  return <Avatar sx={{ bgcolor: colors[0], color: colors[1] }}>{userName}</Avatar>
}

export default UserAvatar
