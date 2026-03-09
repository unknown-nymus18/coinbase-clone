import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@coinbase/cds-icons/fonts/web/icon-font.css'
import './index.css'
import './App.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
