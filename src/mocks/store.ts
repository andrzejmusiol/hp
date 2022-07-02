import { cities, offers, users } from './data'

export const authenticatedUser = {
  isAuthenticated: true,
  userName: 'User Name',
}

export const unauthenticatedUser = {
  isAuthenticated: false,
  userName: '',
}

export const mockedStore = {
  users: {
    users,
    usersLoading: false,
    usersError: false,
  },
  cities: {
    cities,
    selectedCity: {
      value: 'zielona-gora',
      label: 'Zielona Góra',
    },
    citiesLoading: false,
    citiesError: false,
  },
  offers: {
    offers,
    selectedOffer: {
      id: 'ff23b714-a4ab-4090-9dce-d724fde91c77',
      userId: 'b8d2cd2c-c400-420c-9f85-e610a06ad4aa',
      title: 'Potrzebuję pomocy w wyniesieniu lodówki',
      content: 'Mieszkam na 3 piętrze w bloku bez windy, niestety nie jestem sama w stanie znieść lodówki na dół',
      nearestCity: 'Zielona Góra',
      city: 'Czerwieńsk',
      street: 'ul. Rzeźniczaka',
      reward: 50,
      createdAt: 1652287733,
      expiredAt: 1654102133,
      rewardPoints: 10,
    },
    offersLoading: false,
    offersError: false,
  },
}
