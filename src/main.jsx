import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './routers/routers'
import ProductsContextProvider from './Context/ProductProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsContextProvider>
    <RouterProvider router={routers} />
    </ProductsContextProvider>
  </React.StrictMode>,
)
