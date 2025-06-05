import Home from './pages/Home'
import NotFound from './pages/NotFound'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <div>
       <Toaster position="top-center" />
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App