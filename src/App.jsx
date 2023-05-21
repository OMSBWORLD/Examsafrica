import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import ContactUs from './Pages/ContactUs'
import FAQ from './Pages/FAQ'
import LogIn from './Pages/LogIn'
import Register from './Pages/Register'
import Navbar from './Navbar/Navbar'


function App() {
 

  return (
    
      <div>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/faq' element={<FAQ/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
