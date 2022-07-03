import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../types/types'

const initialState: IUser = {
  isAuthenticated: false,
  userName: '',
}

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await fetch(`/api/user/`)
  return response.json()
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isAuthenticated = false
    })
    builder.addCase(fetchUser.fulfilled, (state) => {
      state.isAuthenticated = true
    })
    builder.addCase(fetchUser.rejected, (state) => {
      state.isAuthenticated = false
    })
  },
})

export default userSlice.reducer
