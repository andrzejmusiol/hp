import React from 'react'
import { Avatar } from '@chakra-ui/react'

interface IUserAvatar {
  userName: string
  avatarColors: string[]
}

const UserAvatar = ({ userName, avatarColors }: IUserAvatar): JSX.Element => (
  <Avatar bgColor={avatarColors[0]} color={avatarColors[1]} name={userName} />
)

export default UserAvatar
