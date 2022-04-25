import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import HelpFans from './containers/HelpFans'
import { TProvider } from './theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <TProvider>
      <HelpFans />
    </TProvider>
  </React.StrictMode>
)

reportWebVitals()
