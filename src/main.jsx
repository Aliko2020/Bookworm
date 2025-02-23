import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store.js'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-0qiimv3kiizuao5d.us.auth0.com"
      clientId="JDhMABycz6vDNeemKn4aqT2UTePPGogQ"
      authorizationParams={{
        redirectUri: "http://localhost:5173/dashboard"
      }}
    >
      <Provider store={store} >
        <App />
      </Provider>
    </Auth0Provider>
  </StrictMode>,
)
