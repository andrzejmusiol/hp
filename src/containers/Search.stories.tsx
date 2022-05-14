import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import {Story} from "@storybook/react"
import { TProvider } from '../theme/theme'
import Search from './Search'
import {cities, offers, users} from "../mocks/data"
import {MockStore} from "../utils/storiesUtils"

export const MockedState = {
  cities: {
    cities,
    selectedCity: {
      value: 'zielona-gora',
      label: 'Zielona Góra',
    },
    citiesLoading: false,
    citiesError: false,
  },
  users: {
    users,
    usersLoading: false,
    usersError: false,
  },
  offers: {
    offers,
    offersLoading: false,
    offersError: false,
  },
}

export default {
  title: 'Search',
  component: Search,
  excludeStories: /.*MockedState$/,
}

export const Template = () => (
  <BrowserRouter>
    <TProvider>
        <Search />
    </TProvider>
  </BrowserRouter>
)

export const SearchPage: Story = Template.bind({})

SearchPage.decorators = [
  (story) => (
      <MockStore
          state={{
            ...MockedState
          }}
      >
        {story()}
      </MockStore>
  ),
]

