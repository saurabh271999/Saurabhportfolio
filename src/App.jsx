import React from 'react'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Skills from './Components/Skills'
// import CursorGlow from './Components/Cursor'
// import Experience from './Components/Experience'
import Project from './Components/Project'
import Education from './Components/Education'
import Contacts from './Components/Contacts'

const App = () => {
  return (
    <div>
      
      <Navbar/>
      
      <div id='Home'>
        <Home/>
      </div>
      
      <div id='About'>
         <About/>
      </div>
     <div id='Skills'>
      <Skills/>
     </div>
      
     <div id='Projects'>
       <Project/>
     </div>
     <div id='Education'>
      <Education/>
     </div>
      <div id='Contact'>
      <Contacts/>
     </div>
      
       
     
      
    </div>
    
  )
}

export default App
