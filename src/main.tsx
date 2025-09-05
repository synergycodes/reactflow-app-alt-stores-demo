import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@xyflow/react/dist/style.css";

import './styles/index.css'
import App from './components/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
