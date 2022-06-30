import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react'
import Offers from '../../containers/Offers'
import { ThemeProvider } from '../../theme/theme'
import { storyMockDecorator } from '../../utils/mockUtils'

export default {
  title: 'Components',
  component: Offers,
}

const Template = () => (
  <BrowserRouter>
    <ThemeProvider>
      <Offers />
    </ThemeProvider>
  </BrowserRouter>
)

export const OffersComponent: Story = Template.bind({})

storyMockDecorator(OffersComponent)
