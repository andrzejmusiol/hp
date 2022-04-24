/* eslint-disable import/no-extraneous-dependencies */
import IntlPolyfill from 'intl'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import '@testing-library/jest-dom/extend-expect'
import { configure } from '@testing-library/react'

beforeAll(async () => {
  // Intl polyfill
  configure({ testIdAttribute: 'data-test-id' })
  Intl.NumberFormat = IntlPolyfill.NumberFormat
  Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat
})
