import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react'
import { ThemeProvider } from '../../theme/theme'
import { storyMockDecorator } from '../../utils/mockUtils'
import Dashboard from '../../containers/dashboard/Dashboard'
import { authenticatedUser } from '../../mocks/store'

export default {
  title: 'Pages',
  component: Dashboard,
}

const Template = () => (
  <BrowserRouter>
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  </BrowserRouter>
)

export const UserDashboard: Story = Template.bind({})

storyMockDecorator(UserDashboard, authenticatedUser)
