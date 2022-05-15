import { configureStore } from '@reduxjs/toolkit'
import { citiesSlice } from './citiesSlice'
import { usersSlice } from './usersSlice'
import { offersSlice } from './offersSlice'
import { userSlice } from './userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    users: usersSlice.reducer,
    cities: citiesSlice.reducer,
    offers: offersSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
