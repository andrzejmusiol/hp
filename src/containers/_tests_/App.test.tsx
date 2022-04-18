import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import App from '../App'

let wrapper: RenderResult

const renderApp = () => render(<App />)

describe('<App />', () => {
  beforeEach(async () => {
    wrapper = await renderApp()
  })

  it('Should render app', async () => {
    const app = await wrapper.getByTestId('app-container')
    expect(app).toBeInTheDocument()
  })
})
