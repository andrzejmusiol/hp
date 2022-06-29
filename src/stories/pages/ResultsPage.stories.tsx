import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react'
import { TProvider } from '../../theme/theme'
import { MockStore } from '../../utils/mockUtils'
import { mockedStore } from '../../mocks/store'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Offers from '../../containers/Offers'

export default {
  title: 'Pages',
  component: Offers,
}

const Template = () => (
  <BrowserRouter>
    <TProvider>
      <>
        <Header />
        <Offers />
        <Footer />
      </>
    </TProvider>
  </BrowserRouter>
)

export const ResultsPage: Story = Template.bind({})

ResultsPage.decorators = [
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
