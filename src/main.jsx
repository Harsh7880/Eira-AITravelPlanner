import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CreateTrip from './components/CreateTrip.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Navbar />
       <Routes>
        <Route path='/' element={<App />} />
        <Route path='/create-trip' element={<CreateTrip />} />
       </Routes>
    </BrowserRouter>
  </StrictMode>,
)
