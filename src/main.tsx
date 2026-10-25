import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/rozha-one/400.css'
import '@fontsource/noto-serif-devanagari/500.css'
import '@fontsource/noto-serif-devanagari/700.css'
import '@fontsource/mukta/400.css'
import '@fontsource/mukta/600.css'
import './index.css'
import './lib/i18n'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
