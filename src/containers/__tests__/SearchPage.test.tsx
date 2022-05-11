import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import Header from '../../components/header/Header'
import SearchPage from '../SearchPage'
import Footer from '../../components/footer/Footer'
import { store } from '../../store/store'

let wrapper: RenderResult

const renderComponent = () =>
  render(
    <Provider store={store}>
      <Header />
      <SearchPage />
      <Footer />
    </Provider>
  )

describe('<SearchPage />', () => {
  beforeEach(async () => {
    wrapper = await renderComponent()
  })

  it('Should render header', async () => {
    const searchBar = await wrapper.findByTestId('header-test-id')
    expect(searchBar).toBeInTheDocument()
  })

  it('Should render usage avatars', async () => {
    const usageCounter = await wrapper.findByTestId('usage-counter-test-id')
    const avatars = wrapper.container.getElementsByClassName('chakra-avatar').length

    expect(usageCounter).toBeInTheDocument()
    expect(avatars).toBe(3)
  })

  it('Should render search bar', async () => {
    const searchBar = await wrapper.findByTestId('search-bar-test-id')
    expect(searchBar).toBeInTheDocument()
  })

  it('Should render footer', async () => {
    const searchBar = await wrapper.findByTestId('footer-test-id')
    expect(searchBar).toBeInTheDocument()
  })
})
