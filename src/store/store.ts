import { configureStore } from '@reduxjs/toolkit'
import { citiesSlice } from './slices'

export const store = configureStore({
  reducer: {
    cities: citiesSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
