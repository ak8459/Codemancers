// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { RecipeProvider } from './context/RecipeContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <RecipeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecipeProvider>
)
