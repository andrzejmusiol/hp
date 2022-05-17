export interface ICityOption {
  id: number
  name: string
  state_id: number
  state_code: string
  state_name: string
  country_id: number
  country_code: string
  country_name: string
  latitude: string
  longitude: string
  wikiDataId: string
}

export interface ICity {
  value: string
  label: string
}

export interface ICities {
  cities: ICity[]
}

export interface ICitySelector {
  cities: ICity[]
  citySelectorCallback: (city: ICity) => void
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

export interface IOffersContainer {
  offer: IOffer
  user: IOfferUser
  isLoading: boolean
  isUserAuthenticated: boolean
}

export interface IMockStore {
  state: any
  children: JSX.Element
}

export interface IUser {
  isAuthenticated: boolean
}
