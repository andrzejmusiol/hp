import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react'
import { TProvider } from '../../theme/theme'
import { MockStore } from '../../utils/mockUtils'
import { mockedStore } from '../../mocks/store'
import Header from '../../components/header/Header'

export default {
  title: 'Components',
  component: Header,
}

const Template = () => (
  <BrowserRouter>
    <TProvider>
      <Header />
    </TProvider>
  </BrowserRouter>
)

export const AppHeader: Story = Template.bind({})

AppHeader.decorators = [
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
