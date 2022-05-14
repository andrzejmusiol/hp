import React from 'react'
import { RenderResult, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import configureStore from 'redux-mock-store'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Results from '../Results'
import { setSelectedCity } from '../../store/citiesSlice'
import { mockedStore } from '../../mocks/store'

let wrapper: RenderResult

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const renderComponent = (store: Store) =>
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Results />
        <Footer />
      </Provider>
    </BrowserRouter>
  )

describe('<Results />', () => {
  beforeEach(async () => {
    const store = mockStore(mockedStore)
    store.dispatch(
      setSelectedCity({
        value: 'zielona-gora',
        label: 'Zielona Góra',
      })
    )
    wrapper = await renderComponent(store)
  })

  it('Should render headings', async () => {
    const resultsHeader = await wrapper.findByTestId('results-heading-test-id')
    const resultsSubHeader = await wrapper.findByTestId('results-subtitle-test-id')

    expect(resultsHeader).toHaveTextContent('Zielona Góra')
    expect(resultsSubHeader).toHaveTextContent('6 osób szuka pomocy')
  })

  it('Should render 6 offers containers', async () => {
    const offers = await wrapper.findAllByTestId('offer-skeleton-test-id')
    const offersHeaders = await wrapper.findAllByTestId('offer-heading-test-id')
    const offersCities = await wrapper.findAllByTestId('offer-city-id')
    const offersContent = await wrapper.findAllByTestId('offer-content-id')
    const OffersReward = await wrapper.findAllByTestId('offer-reward-test-id')

    expect(offers).toHaveLength(6)
    expect(offersHeaders).toHaveLength(6)
    expect(offersCities).toHaveLength(6)
    expect(offersContent).toHaveLength(6)
    expect(OffersReward).toHaveLength(6)
  })
})
