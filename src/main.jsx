import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Effect from './Effect.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <App />  */}
     <Effect /> 
  </StrictMode>,
)
