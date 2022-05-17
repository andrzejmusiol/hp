import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react'
import { TProvider } from '../theme/theme'
import { MockStore } from '../utils/mockUtils'
import { mockedStore } from '../mocks/store'
import RegisterForm from '../components/authentication/Register'

export default {
  title: 'Register',
  component: RegisterForm,
}

const Template = () => (
  <BrowserRouter>
    <TProvider>
      <RegisterForm />
    </TProvider>
  </BrowserRouter>
)

export const RegisterPage: Story = Template.bind({})

RegisterPage.decorators = [
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
