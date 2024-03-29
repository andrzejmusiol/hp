import React from 'react'
import { Avatar, AvatarGroup } from '@chakra-ui/react'
import { avatarsColors } from '../../theme/colors'
import { IUserAvatars } from '../../types/types'

const OverlappingAvatars = ({ users }: IUserAvatars): JSX.Element => (
  <AvatarGroup size="md" max={3}>
    {users.map((user) => {
      const colors =
        avatarsColors[Object.keys(avatarsColors)[Math.floor(Math.random() * Object.keys(avatarsColors).length)]]

      return <Avatar key={user.id} bgColor={colors[0]} color={colors[1]} name={user.personalData.name} />
    })}
  </AvatarGroup>
)

export default OverlappingAvatars
