import React from 'react'
import {RenderResult, render, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import configureStore from 'redux-mock-store'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Offers from '../Offers'
import { setSelectedCity } from '../../store/citiesSlice'
import { mockedStore } from '../../mocks/store'
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom/extend-expect'

let wrapper: RenderResult

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const renderComponent = (store: Store) =>
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Offers />
        <Footer />
      </Provider>
    </BrowserRouter>
  )

describe('<Offers />', () => {
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

  it('Should click on first offer and show modal pop-up', async () => {
    const offers = await wrapper.findAllByTestId('offer-test-id')

    await userEvent.click(offers[0])

    const offerModal = await wrapper.findByTestId('offer-modal-test-id')
    const offerModalAvatar = await wrapper.findByTestId('offer-modal-avatar-test-id')
    const offerModalUserName = await wrapper.findByTestId('offer-modal-user-name-test-id')
    const offerModalTitle = await wrapper.findByTestId('offer-modal-title-test-id')
    const offerModalCity = await wrapper.findByTestId('offer-modal-city-test-id')
    const offerModalContent = await wrapper.findByTestId('offer-modal-content-test-id')
    const offerModalReward = await wrapper.findByTestId('offer-modal-reward-test-id')
    const offerModalPhoneNumber = await wrapper.findByTestId('number-button-test-id')
    const offerModalCloseButton = await wrapper.findByTestId('offer-modal-close-button-test-id')

    expect(offerModal).toBeInTheDocument()
    expect(offerModalAvatar).toBeInTheDocument()
    expect(offerModalUserName).toHaveTextContent('Karol')
    expect(offerModalTitle).toHaveTextContent('Potrzebuję pomocy w wyniesieniu lodówki')
    expect(offerModalCity).toHaveTextContent('Czerwieńsk')
    expect(offerModalContent).toHaveTextContent('Mieszkam na 3 piętrze w bloku bez windy, niestety nie jestem sama w stanie znieść lodówki na dół.')
    expect(offerModalReward).toHaveTextContent('50 PLN')
    expect(offerModalPhoneNumber).toBeInTheDocument()
    expect(offerModalCloseButton).toBeInTheDocument()

    await userEvent.hover(offerModalPhoneNumber)

    const tooltip = await wrapper.findByTestId('number-button-tooltip-test-id')

    expect(tooltip).toHaveTextContent('Zaloguj się, aby zobaczyć numer')

    await userEvent.click(offerModalCloseButton)

    await waitFor(() => expect(offerModal).not.toBeInTheDocument())
  })
})
