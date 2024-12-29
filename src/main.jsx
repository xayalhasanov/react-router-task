import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductProvider from './context/ProductContext.jsx'
import BasketProvider from './context/BasketContext.jsx'
import FavotiteProvider from './context/FavoritContext.jsx'

createRoot(document.getElementById('root')).render(

  <FavotiteProvider>
    <BasketProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </BasketProvider>
  </FavotiteProvider>
)
