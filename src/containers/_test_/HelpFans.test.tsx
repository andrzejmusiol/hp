import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import HelpFans from '../HelpFans'

let wrapper: RenderResult

const renderApp = () => render(<HelpFans />)

describe('<HelpFans />', () => {
  beforeEach(async () => {
    wrapper = await renderApp()
  })

  it('Should render app', async () => {
    const app = await wrapper.getByTestId('help-fans-test-id')
    expect(app).toBeInTheDocument()
  })
})
