import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react'
import { TProvider } from '../../theme/theme'
import {storyMockDecorator} from '../../utils/mockUtils'
import RegisterForm from '../../components/authentication/Register'

export default {
  title: 'Components',
  component: RegisterForm,
}

const Template = () => (
  <BrowserRouter>
    <TProvider>
      <RegisterForm />
    </TProvider>
  </BrowserRouter>
)

export const RegisterComponent: Story = Template.bind({})

storyMockDecorator(RegisterComponent)
