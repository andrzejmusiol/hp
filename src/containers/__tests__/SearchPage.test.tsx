import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import SearchPage from '../SearchPage'

let wrapper: RenderResult

const renderApp = () => render(<SearchPage />)

describe('<HelpFans />', () => {
  beforeEach(async () => {
    wrapper = await renderApp()
  })

  it('Should render search bar', async () => {
    const app = await wrapper.getByTestId('search-bar-test-id')
    expect(app).toBeInTheDocument()
  })
})
