import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import { TProvider } from './theme/theme'
import App from './App'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <TProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TProvider>
  </React.StrictMode>
)

reportWebVitals()
