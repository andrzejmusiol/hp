import { IconType } from 'react-icons'
import { FlexProps, BoxProps } from '@chakra-ui/react'

export interface ICity {
  value: string
  label: string
}

export interface ICities {
  cities: ICity[]
}

export interface ICitiesState extends ICities {
  selectedCity: {
    value: string | null
    label: string | null
  }
  citiesLoading: boolean
  citiesError: boolean
}

export interface IAvatarColors {
  [key: string]: string[]
}

export interface IOfferUserPersonalData {
  name: string
  surname: string
  email: string
  city: string
  phone: number
}

export interface IOfferUser {
  id: string
  personalData: IOfferUserPersonalData
}

export interface IOfferUsers {
  users: IOfferUser[]
}

export interface IOffersUsersState extends IOfferUsers {
  usersLoading: boolean
  usersError: boolean
}

export interface IOffer {
  id: string
  userId: string
  title: string
  content: string
  nearestCity: string
  street: string
  city: string
  reward: number | null
  otherReward: string | null
  createdAt: number | null
  expiredAt: number | null
}

export interface IOffers {
  offers: IOffer[]
}

export interface IOffersState extends IOffers {
  selectedOffer?: IOffer
  offersLoading: boolean
  offersError: boolean
}

export interface IMockStore {
  state: any
  children: JSX.Element
}

export interface IUser {
  isAuthenticated: boolean
  userName: string
}

export interface UserAuth {
  isAuthenticated: boolean
  userName: string
}

// Components props

export interface INavItem {
  icon: IconType
  children: string
  route: string
  type: string
}

export interface IOfferModal {
  avatar: JSX.Element
  userName: string
  phone: number
  isOpen: boolean
  onClose: () => void
  offer: IOffer
  isUserAuthenticated: boolean
}

export interface ILinkItem {
  name: string
  icon: IconType
  routeLink: string
  type: string
}

export interface ISidebar extends BoxProps {
  onClose: () => void
}

export interface IMobile extends FlexProps {
  onOpen: () => void
}

export interface IUserAvatar {
  userName: string
  avatarColors: string[]
  size?: string
}

export interface IUserAvatars {
  users: IOfferUser[]
}

export interface IOffersContainer {
  offer: IOffer
  user: IOfferUser
  isLoading: boolean
  isUserAuthenticated: boolean
}

export interface ICitySelector {
  cities: ICity[]
  citySelectorCallback: (city: ICity) => void
}
