import { useState } from 'react'
import Home from './pages/Home'
import Category from './pages/Category'
import Card from './pages/Card'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Product from './pages/Product'
import LoginForm from './pages/LoginForm'
import ScrollToTop from '../utils/ScrollToTop'

function App() {

  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/category/:id' element={ <Category/>} />
      <Route path='/Card' element={ <Card/>} />
      <Route path='/Product' element={ <Product/>} />
      <Route path='/LoginForm' element={ <LoginForm/>} />
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
