import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICitiesState, ICity } from '../types/types'
import { cities } from '../mocks/data'

const initialState: ICitiesState = {
  cities: [],
  selectedCity: {
    value: null,
    label: null,
  },
  citiesLoading: false,
  citiesError: false,
}

export const fetchCities = createAsyncThunk('cities/fetchCities', async () => cities)

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setSelectedCity: (state, action: PayloadAction<ICity>) => {
      state.selectedCity = action.payload
    },
  },
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

export const { setSelectedCity } = citiesSlice.actions

export default citiesSlice.reducer
