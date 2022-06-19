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
import LoginForm from '../../components/authentication/Login'

let wrapper: RenderResult

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const renderComponent = (store: Store) =>
  render(
    <BrowserRouter>
      <Provider store={store}>
        <LoginForm />
      </Provider>
    </BrowserRouter>
  )

describe('<RegisterForm />', () => {
  beforeEach(async () => {
    const store = mockStore(mockedStore)
    wrapper = await renderComponent(store)
  })

  it('Should render login form components', async () => {
    const loginHeader = await wrapper.findByTestId('login-form-heading-test-id')
    const loginEmailInput = await wrapper.findByTestId('login-form-email-test-id')
    const loginPasswordInput = await wrapper.findByTestId('login-form-password-test-id')
    const loginSubmitButton = await wrapper.findByTestId('login-form-submit-button-test-id')

    expect(loginHeader).toHaveTextContent('Zaloguj sięaby zacząć pomagać, lub otzymać pomoc ✌️')
    expect(loginEmailInput).toBeInTheDocument()
    expect(loginPasswordInput).toBeInTheDocument()
    expect(loginSubmitButton).toBeInTheDocument()

    // TODO Test and mock submitting form after Firebase implementation
  })
})
