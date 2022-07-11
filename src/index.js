import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import { FirebaseProvider } from './Components/Firebase'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Components/Session/context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>
)
