import React from 'react'
import { Avatar } from '@chakra-ui/react'
import { IUserAvatar } from '../../types/types'

const UserAvatar = ({ userName, avatarColors, size }: IUserAvatar): JSX.Element => (
  <Avatar bgColor={avatarColors[0]} color={avatarColors[1]} name={userName} size={size} />
)

UserAvatar.defaultProps = {
  size: 'md',
}

export default UserAvatar
