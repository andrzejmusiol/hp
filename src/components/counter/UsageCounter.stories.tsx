import React from 'react'
import { Provider } from 'react-redux'
import { TProvider } from '../../theme/theme'
import UsageCounter from './UsageCounter'
import { store } from '../../store/store'

export default {
  title: 'UsageCounter',
  component: UsageCounter,
}

export const UsageCounterComponent = () => (
  <TProvider>
    <Provider store={store}>
      <UsageCounter />
    </Provider>
  </TProvider>
)
