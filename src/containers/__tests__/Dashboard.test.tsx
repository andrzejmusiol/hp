import React from 'react'
import { RenderResult, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import configureStore from 'redux-mock-store'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { authenticatedUser, mockedStore } from '../../mocks/store'
import '@testing-library/jest-dom/extend-expect'
import Dashboard from '../dashboard/Dashboard'
import { ROUTES_SIDEBAR_NAMES } from '../../contants'

let wrapper: RenderResult

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const renderComponent = (store: Store) =>
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </BrowserRouter>
  )

const composeStoreWithAuthUser = {
  user: authenticatedUser,
  ...mockedStore,
}

describe('<Dashboard />', () => {
  beforeEach(async () => {
    const store = mockStore(composeStoreWithAuthUser)
    wrapper = await renderComponent(store)
  })

  it('Should render dashboard with sidebar', async () => {
    await wrapper.findByTestId('dashboard-test-id')
    await wrapper.findByTestId('dashboard-sidebar-test-id')
    const sidebarUserName = await wrapper.findByTestId('sidebar-User Name-test-id')
    const settingsSidebarOption = await wrapper.findByTestId(`sidebar-${ROUTES_SIDEBAR_NAMES.USER_SETTINGS}-test-id`)
    const offerSidebarOption = await wrapper.findByTestId(`sidebar-${ROUTES_SIDEBAR_NAMES.USER_OFFERS}-test-id`)
    const logoutSidebarOption = await wrapper.findByTestId(`sidebar-${ROUTES_SIDEBAR_NAMES.LOG_OUT}-test-id`)

    expect(sidebarUserName).toBeInTheDocument()
    expect(sidebarUserName).toHaveTextContent('User Name')
    expect(settingsSidebarOption).toBeInTheDocument()
    expect(settingsSidebarOption).toHaveTextContent(ROUTES_SIDEBAR_NAMES.USER_SETTINGS)
    expect(offerSidebarOption).toBeInTheDocument()
    expect(offerSidebarOption).toHaveTextContent(ROUTES_SIDEBAR_NAMES.USER_OFFERS)
    expect(logoutSidebarOption).toBeInTheDocument()
    expect(logoutSidebarOption).toHaveTextContent(ROUTES_SIDEBAR_NAMES.LOG_OUT)
  })
})
