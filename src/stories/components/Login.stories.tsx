import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react'
import { TProvider } from '../../theme/theme'
import { MockStore } from '../../utils/mockUtils'
import { mockedStore } from '../../mocks/store'
import LoginForm from '../../components/authentication/Login'

export default {
  title: 'Components',
  component: LoginForm,
}

const Template = () => (
  <BrowserRouter>
    <TProvider>
      <LoginForm />
    </TProvider>
  </BrowserRouter>
)

export const LoginPage: Story = Template.bind({})

LoginPage.decorators = [
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
