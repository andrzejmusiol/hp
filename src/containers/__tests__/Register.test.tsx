import React from 'react'
import { RenderResult, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import configureStore from 'redux-mock-store'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { mockedStore } from '../../mocks/store'
import '@testing-library/jest-dom/extend-expect'
import RegisterForm from '../../components/authentication/Register'

let wrapper: RenderResult

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const renderComponent = (store: Store) =>
  render(
    <BrowserRouter>
      <Provider store={store}>
        <RegisterForm />
      </Provider>
    </BrowserRouter>
  )

describe('<RegisterForm />', () => {
  beforeEach(async () => {
    const store = mockStore(mockedStore)
    wrapper = await renderComponent(store)
  })

  it('Should render register form components', async () => {
    const registerHeader = await wrapper.findByTestId('register-form-header-test-id')
    const registerNameInput = await wrapper.findByTestId('first-name-input-test-id')
    const registerSurnameInput = await wrapper.findByTestId('surname-input-test-id')
    const registerSubmitButton = await wrapper.findByTestId('email-input-test-id')

    expect(registerHeader).toHaveTextContent('Dołącz do społęczności, która kocha pomagać')
    expect(registerNameInput).toBeInTheDocument()
    expect(registerSurnameInput).toBeInTheDocument()
    expect(registerSubmitButton).toBeInTheDocument()

    // TODO Test and mock submitting form after Firebase implementation
  })
})
