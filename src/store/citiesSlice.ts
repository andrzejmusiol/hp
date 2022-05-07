import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ICitiesState } from '../types/types'
import { cities } from '../mocks/dataMocks'

const initialState: ICitiesState = {
  cities: [],
  citiesLoading: false,
  citiesError: false,
}

export const fetchCities = createAsyncThunk('cities/fetchCities', async () => cities)

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCities.pending, (state) => {
      state.citiesLoading = true
      state.citiesError = false
    })
    builder.addCase(fetchCities.fulfilled, (state, { payload }) => {
      state.cities = payload
      state.citiesLoading = false
      state.citiesError = false
    })
    builder.addCase(fetchCities.rejected, (state) => {
      state.citiesLoading = false
      state.citiesError = true
    })
  },
})

export default citiesSlice.reducer
