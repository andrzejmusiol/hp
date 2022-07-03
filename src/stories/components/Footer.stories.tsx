import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react'
import { ThemeProvider } from '../../theme/theme'
import { storyMockDecorator } from '../../utils/mockUtils'
import Footer from '../../components/footer/Footer'
import { unauthenticatedUser } from '../../mocks/store'

export default {
  title: 'Components',
  component: Footer,
}

const Template = () => (
  <BrowserRouter>
    <ThemeProvider>
      <Footer />
    </ThemeProvider>
  </BrowserRouter>
)

export const AppFooter: Story = Template.bind({})

storyMockDecorator(AppFooter, unauthenticatedUser)
