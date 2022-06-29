import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react'
import { TProvider } from '../../theme/theme'
import Header from '../../components/header/Header'
import {storyMockDecorator} from "../../utils/mockUtils";

export default {
  title: 'Components',
  component: Header,
}

const Template = () => (
  <BrowserRouter>
    <TProvider>
      <Header />
    </TProvider>
  </BrowserRouter>
)

export const AppHeader: Story = Template.bind({})

storyMockDecorator(AppHeader)
