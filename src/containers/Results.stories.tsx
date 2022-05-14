import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react'
import Results from './Results'
import { TProvider } from '../theme/theme'
import { offers } from '../mocks/data'
import { MockStore } from '../utils/mockUtils'
import { mockedStore } from '../mocks/store'

export default {
  title: 'Results',
  component: Results,
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
        ...mockedStore,
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
