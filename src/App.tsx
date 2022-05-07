import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import SearchPage from './containers/SearchPage'

const App = (): JSX.Element => (
  <Provider store={store}>
    <SearchPage />
  </Provider>
)

export default App
