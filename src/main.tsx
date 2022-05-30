import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'
import { AuthContextProvider } from './hooks/useFirebase'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
)
