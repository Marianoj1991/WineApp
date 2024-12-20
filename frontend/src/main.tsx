import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import AppRouter from './routes/AppRouter'
import { store } from './redux/store'

// STYLES
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider >
  </StrictMode>,
)
