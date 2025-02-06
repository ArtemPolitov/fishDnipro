import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './reset.css'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/themeContext'
import { LanguageProvider } from './context/languageContext.jsx'
import { MobileSidebarProvider } from './context/mobileSidebarContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <MobileSidebarProvider>
            <App/>
          </MobileSidebarProvider>
        </LanguageProvider>  
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
