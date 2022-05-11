import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IOffersState } from '../types/types'
import { offers } from '../mocks/dataMocks'

const initialState: IOffersState = {
  offers: [],
  offersLoading: false,
  offersError: false,
}

export const fetchOffers = createAsyncThunk('cities/fetchCities', async () => offers)

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOffers.pending, (state) => {
      state.offersLoading = true
      state.offersError = false
    })
    builder.addCase(fetchOffers.fulfilled, (state, { payload }) => {
      state.offers = payload
      state.offersLoading = false
      state.offersError = false
    })
    builder.addCase(fetchOffers.rejected, (state) => {
      state.offersLoading = false
      state.offersError = true
    })
  },
})

export default offersSlice.reducer
