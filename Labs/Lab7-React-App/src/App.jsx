import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from './components/Registration'
import Routing from './components/Routing'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Help from './components/Help'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Routing />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>  
    </BrowserRouter>
  )
}

export default App
