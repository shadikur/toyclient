import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import CommonRoutes from './routes/CommonRoutes.jsx';
import ContextProvider from './context/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={CommonRoutes}></RouterProvider>
    </ContextProvider>
  </React.StrictMode>,
)