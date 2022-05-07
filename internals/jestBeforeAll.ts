/* eslint-disable import/no-extraneous-dependencies */
import IntlPolyfill from 'intl'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import '@testing-library/jest-dom/extend-expect'

beforeAll(async () => {
    Intl.NumberFormat = IntlPolyfill.NumberFormat
    Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat
})