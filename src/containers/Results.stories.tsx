import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react'
import Results from './Results'
import { TProvider } from '../theme/theme'
import { cities, offers, users } from '../mocks/data'
import { MockStore } from '../utils/storiesUtils'

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
  title: 'Results',
  component: Results,
  excludeStories: /.*MockedState$/,
}

const Template = () => (
  <BrowserRouter>
    <TProvider>
      <Results />
    </TProvider>
  </BrowserRouter>
)

export const ResultsPage: Story = Template.bind({})

ResultsPage.decorators = [
  (story) => (
    <MockStore
      state={{
        ...MockedState,
        offers: {
          offers,
          offersLoading: false,
          offersError: false,
        },
      }}
    >
      {story()}
    </MockStore>
  ),
]
