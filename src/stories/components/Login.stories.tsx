import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react'
import { ThemeProvider } from '../../theme/theme'
import { storyMockDecorator } from '../../utils/mockUtils'
import LoginForm from '../../components/authentication/Login'

export default {
  title: 'Components',
  component: LoginForm,
}

const Template = () => (
  <BrowserRouter>
    <ThemeProvider>
      <LoginForm />
    </ThemeProvider>
  </BrowserRouter>
)

export const LoginComponent: Story = Template.bind({})

storyMockDecorator(LoginComponent)
