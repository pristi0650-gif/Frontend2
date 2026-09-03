import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import Navbar from './Components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Project from './pages/Project'
import Footer from './Components/footer'





function App() {



  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<Hero/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Project/>}/>
    </Routes>
    <Footer />
    </>

  )
}

export default App

