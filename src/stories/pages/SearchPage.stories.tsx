import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react'
import { TProvider } from '../../theme/theme'
import { MockStore } from '../../utils/mockUtils'
import { mockedStore } from '../../mocks/store'
import Header from '../../components/header/Header'
import Search from '../../containers/Search'
import Footer from '../../components/footer/Footer'

export default {
  title: 'Pages',
  component: Search,
}

const Template = () => (
  <BrowserRouter>
    <TProvider>
      <>
        <Header />
        <Search />
        <Footer />
      </>
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
