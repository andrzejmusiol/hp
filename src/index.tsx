import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import SearchPage from './containers/SearchPage'
import { TProvider } from './theme/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <TProvider>
      <SearchPage />
    </TProvider>
  </React.StrictMode>
)

reportWebVitals()
