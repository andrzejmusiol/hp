import React from 'react'
import { avatarsColors } from '../theme/colors'
import UserAvatar from '../components/avatars/UserAvatar'

export const useAvatarColor = () => {
  const avatarColor =
    avatarsColors[Object.keys(avatarsColors)[Math.floor(Math.random() * Object.keys(avatarsColors).length)]]
  return { avatarColor }
}

export const useUser = (username: string, color: string[]) => {
  const userAvatar = <UserAvatar userName={username} avatarColors={color} size="sm" />
  return { userAvatar }
}
