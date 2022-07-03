import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react'
import { ThemeProvider } from '../../theme/theme'
import Header from '../../components/header/Header'
import { storyMockDecorator } from '../../utils/mockUtils'
import { authenticatedUser, unauthenticatedUser } from '../../mocks/store'

export default {
  title: 'Components',
  component: Header,
}

const Template = () => (
  <BrowserRouter>
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  </BrowserRouter>
)

export const AppHeaderWithAuthUser: Story = Template.bind({})
export const AppHeaderWithUnauthenticatedUser: Story = Template.bind({})

storyMockDecorator(AppHeaderWithUnauthenticatedUser, unauthenticatedUser)
storyMockDecorator(AppHeaderWithAuthUser, authenticatedUser)
