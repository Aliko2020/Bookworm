import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store.js'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'


const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
const redirectUri = process.env.REACT_APP_AUTH0_REDIRECT_URL


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirectUri
      }}
    >
      <Provider store={store} >
        <App />
      </Provider>
    </Auth0Provider>
  </StrictMode>,
)
