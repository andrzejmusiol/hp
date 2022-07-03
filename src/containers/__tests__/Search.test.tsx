import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { Store } from 'redux'
import Header from '../../components/header/Header'
import Search from '../Search'
import Footer from '../../components/footer/Footer'
import { composeStoreWithUnauthenticatedUser } from '../../mocks/store'

let wrapper: RenderResult

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const renderComponent = (store: Store) =>
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Search />
        <Footer />
      </Provider>
    </BrowserRouter>
  )

describe('<Search />', () => {
  beforeEach(async () => {
    const store = mockStore(composeStoreWithUnauthenticatedUser)
    wrapper = await renderComponent(store)
  })

  it('Should render header', async () => {
    const searchBar = await wrapper.findByTestId('header-test-id')
    expect(searchBar).toBeInTheDocument()
  })

  it('Should render Search Page heading', async () => {
    const header = await wrapper.findByTestId('search-heading-test-id')
    const subHeader = await wrapper.findByTestId('search-sub-heading-test-id')

    expect(header).toHaveTextContent('Chcesz komuś pomóc?')
    expect(subHeader).toHaveTextContent(
      'Znajdź ogłoszenia w Twojej okolicy, pomóż sąsiadom, wesprzyj lokalną społeczność, zgarniaj nagrody!'
    )
  })

  it('Should render usage avatars', async () => {
    const usageCounter = await wrapper.findByTestId('usage-counter-test-id')
    const avatars = wrapper.container.getElementsByClassName('chakra-avatar').length

    expect(usageCounter).toBeInTheDocument()
    expect(avatars).toBe(4)
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
