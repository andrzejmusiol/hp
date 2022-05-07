import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IUsersState } from '../types/types'
import { users } from '../mocks/dataMocks'

const initialState: IUsersState = {
  users: [],
  usersLoading: false,
  usersError: false,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => users)

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.usersLoading = true
      state.usersError = false
    })
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.users = payload
      state.usersLoading = false
      state.usersError = false
    })
    builder.addCase(fetchUsers.rejected, (state) => {
      state.usersLoading = false
      state.usersError = true
    })
  },
})

export default usersSlice.reducer
