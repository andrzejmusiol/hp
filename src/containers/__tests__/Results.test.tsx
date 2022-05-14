import React from 'react'
import { RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Results from '../Results'
import { render } from '../../utils/testUtils'

let wrapper: RenderResult

const renderComponent = () =>
  render(
    <BrowserRouter>
      <Header />
      <Results />
      <Footer />
    </BrowserRouter>
  )

describe('<Results />', () => {
  beforeEach(async () => {
    wrapper = await renderComponent()
  })

  // it('passes dispatch and getState', () => {
  //     const { store, invoke } = create()
  //     invoke((dispatch: any, getState: any) => {
  //         dispatch('TEST DISPATCH')
  //         getState()
  //     })
  //     console.warn(store.getState())
  //     expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH')
  //     expect(store.getState).toHaveBeenCalled()
  // })

  it('Should results heading', async () => {
    const resultsHeader = await wrapper.findByTestId('results-heading-test-id')
    expect(resultsHeader).toHaveTextContent('Zielona Góra')
  })
})
