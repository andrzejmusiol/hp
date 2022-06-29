import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react'
import { TProvider } from '../../theme/theme'
import Search from '../../containers/Search'
import { storyMockDecorator } from '../../utils/mockUtils'

export default {
  title: 'Components',
  component: Search,
}

export const Template = () => (
  <BrowserRouter>
    <TProvider>
      <Search />
    </TProvider>
  </BrowserRouter>
)

export const SearchComponent: Story = Template.bind({})

storyMockDecorator(SearchComponent)
