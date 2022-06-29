import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react'
import Offers from '../../containers/Offers'
import { TProvider } from '../../theme/theme'
import { MockStore } from '../../utils/mockUtils'
import { mockedStore } from '../../mocks/store'

export default {
  title: 'Components',
  component: Offers,
}

const Template = () => (
  <BrowserRouter>
    <TProvider>
      <Offers />
    </TProvider>
  </BrowserRouter>
)

export const OffersPage: Story = Template.bind({})

OffersPage.decorators = [
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
