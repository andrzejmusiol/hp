import { configureStore } from '@reduxjs/toolkit'
import { citiesSlice } from './citiesSlice'
import { usersSlice } from './usersSlice'

export const store = configureStore({
  reducer: {
    cities: citiesSlice.reducer,
    users: usersSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
