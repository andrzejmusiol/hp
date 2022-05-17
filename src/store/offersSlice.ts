import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IOffersState } from '../types/types'

const initialState: IOffersState = {
  offers: [],
  selectedOffer: {
    id: '',
    userId: '',
    title: '',
    content: '',
    nearestCity: '',
    street: '',
    city: '',
    reward: null,
    otherReward: null,
    createdAt: null,
    expiredAt: null,
  },
  offersLoading: false,
  offersError: false,
}

export const fetchOffers = createAsyncThunk('offers/fetchOffers', async () => {
  const response = await fetch(`/api/offers/`)
  return response.json()
})

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
