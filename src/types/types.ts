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

export interface IUserPersonalData {
  name: string
  surname: string
  email: string
  city: string
}

export interface IUser {
  id: string
  personalData: IUserPersonalData
}

export interface IUsers {
  users: IUser[]
}

export interface IUsersState extends IUsers {
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
  createdAt: number
  expiredAt: number
  rewardPoints: number
}

export interface IOffers {
  offers: IOffer[]
}

export interface IOffersState extends IOffers {
  offersLoading: boolean
  offersError: boolean
}

export interface IOffersContainer {
  offer: IOffer
  user: IUser
  isLoading: boolean
}

export interface IMockStore {
  state: any
  children: JSX.Element
}
