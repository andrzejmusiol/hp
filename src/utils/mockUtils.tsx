import { Provider } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { IMockStore } from '../types/types'
import { mockedStore } from '../mocks/store'

export const MockStore = ({ state, children }: IMockStore) => {
  const entries = Object.entries(state)
  const reducers = entries.map((entry) =>
    createSlice({
      name: entry[0],
      initialState: entry[1],
      reducers: {},
    })
  )

  return (
    <Provider
      store={configureStore({
        reducer: {
          ...reducers.reduce(
            (acc, curr) => ({
              ...acc,
              [curr.name]: curr.reducer,
            }),
            {}
          ),
        },
      })}
    >
      {children}
    </Provider>
  )
}

export const storyMockDecorator = (component: any) => {
  return (component.decorators = [
    (story: any) => (
      <MockStore
        state={{
          ...mockedStore,
        }}
      >
        {story()}
      </MockStore>
    ),
  ])
}
