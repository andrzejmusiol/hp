import React from 'react'
import { Avatar } from '@chakra-ui/react'
import { avatarsColors } from '../../theme/colors'

interface IUserAvatar {
  userName: string
}

const UserAvatar = ({ userName }: IUserAvatar): JSX.Element => {
  const colors =
    avatarsColors[Object.keys(avatarsColors)[Math.floor(Math.random() * Object.keys(avatarsColors).length)]]

  return <Avatar bgColor={colors[0]} color={colors[1]} name={userName} />
}

export default UserAvatar
