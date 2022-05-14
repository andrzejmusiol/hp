import { cities, offers, users } from './data'

export const mockedStore = {
  cities: {
    cities,
    selectedCity: {
      value: 'zielona-gora',
      label: 'Zielona Góra',
    },
    citiesLoading: false,
    citiesError: false,
  },
  users: {
    users,
    usersLoading: false,
    usersError: false,
  },
  offers: {
    offers,
    offersLoading: false,
    offersError: false,
  },
}
