import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MainContent from './components/sample1.jsx'
import './index.css'
import Header from './components/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    {/* <App /> */}
    <MainContent />
  </React.StrictMode>,
)
