import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { TProvider } from './theme/theme'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <TProvider>
      <App />
    </TProvider>
  </React.StrictMode>
)

reportWebVitals()
