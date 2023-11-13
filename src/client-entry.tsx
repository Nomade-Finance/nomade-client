import '@styles/index.scss'

import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Router } from '@router/routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)
