import React from 'react'
import { Link } from 'react-router-dom'
import Hero from './hero'
import About from './About'
import Project from './Project'
import Contacts from './Contacts'


function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Project/>
    <Contacts/>
    
  
    </>
  )
}

export default Home
