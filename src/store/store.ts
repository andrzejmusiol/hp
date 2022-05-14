import { configureStore } from '@reduxjs/toolkit'
import { citiesSlice } from './citiesSlice'
import { usersSlice } from './usersSlice'
import { offersSlice } from './offersSlice'

export const store = configureStore({
  reducer: {
    cities: citiesSlice.reducer,
    users: usersSlice.reducer,
    offers: offersSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
