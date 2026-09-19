import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ProgressProvider } from './context/ProgressContext'
import { LanguageProvider } from './context/LanguageContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <LanguageProvider>
        <ProgressProvider>
          <App />
        </ProgressProvider>
      </LanguageProvider>
    </HashRouter>
  </StrictMode>,
)
