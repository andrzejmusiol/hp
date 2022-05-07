import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../../App'

let wrapper: RenderResult

const renderComponent = () => render(<App />)

describe('<App />', () => {
  beforeEach(async () => {
    wrapper = await renderComponent()
  })

  it('Should usage avatars', async () => {
    const usageCounter = await wrapper.findByTestId('usage-counter-test-id')
    const avatars = wrapper.container.getElementsByClassName('MuiAvatar-circular').length

    expect(usageCounter).toBeInTheDocument()
    expect(avatars).toBe(4)
  })

  it('Should render search bar', async () => {
    const searchBar = await wrapper.findByTestId('search-bar-test-id')
    expect(searchBar).toBeInTheDocument()
  })
})
