import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react'
import { ThemeProvider } from '../../theme/theme'
import { storyMockDecorator } from '../../utils/mockUtils'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Offers from '../../containers/Offers'
import { unauthenticatedUser } from '../../mocks/store'

export default {
  title: 'Pages',
  component: Offers,
}

const Template = () => (
  <BrowserRouter>
    <ThemeProvider>
      <>
        <Header />
        <Offers />
        <Footer />
      </>
    </ThemeProvider>
  </BrowserRouter>
)

export const ResultsPage: Story = Template.bind({})

storyMockDecorator(ResultsPage, unauthenticatedUser)
