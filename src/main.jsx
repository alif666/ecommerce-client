import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './providers/ProductProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ProductProvider>
    <App />
  </ProductProvider>
  </StrictMode>
)



