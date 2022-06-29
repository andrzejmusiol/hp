import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react'
import { TProvider } from '../../theme/theme'
import { storyMockDecorator } from '../../utils/mockUtils'
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

storyMockDecorator(SearchPage)
