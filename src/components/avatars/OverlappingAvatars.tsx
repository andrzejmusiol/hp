import React from 'react'
import AvatarGroup from '@mui/material/AvatarGroup'
import { IUser } from '../../types/types'
import UserAvatar from './UserAvatar'

interface IUserAvatar {
  users: IUser[]
}

const OverlappingAvatars = ({ users }: IUserAvatar): JSX.Element =>
  <AvatarGroup max={4}>
    {users.map((user) => (
      <UserAvatar key={user.id} userName={user.personalData.name.charAt(0)} />
    ))}
  </AvatarGroup>


export default OverlappingAvatars
