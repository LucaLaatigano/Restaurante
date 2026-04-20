import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MealsProvider } from './contexts/MealsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MealsProvider>
      <App />
    </MealsProvider>
  </StrictMode>,
)
