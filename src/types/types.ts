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

export interface ICities {
  cities: string[]
}

export interface ICitiesState extends ICities {
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

export interface IUserOffer {
  cityArea: string
  city: string
  title: string
  content: string
  reward: number | null
}

export interface IUser {
  id: string
  personalData: IUserPersonalData
  offers: IUserOffer | null
}

export interface IUsers {
  users: IUser[]
}

export interface IUsersState extends IUsers {
  usersLoading: boolean
  usersError: boolean
}
