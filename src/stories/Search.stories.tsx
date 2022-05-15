import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react'
import { TProvider } from '../theme/theme'
import Search from '../containers/Search'
import { MockStore } from '../utils/mockUtils'
import { mockedStore } from '../mocks/store'

export default {
  title: 'Search',
  component: Search,
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
        ...mockedStore,
      }}
    >
      {story()}
    </MockStore>
  ),
]
