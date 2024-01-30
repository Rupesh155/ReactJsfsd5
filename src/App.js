
import React from 'react'
import Home from './Home'
import './App.css'
import C from './C'
import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom"
import About from './About'
import Contact from './Contact'
const App = () => {

  return (
    <div>
     
<Navbar/>
<Routes>

<Route   path='/'  element={<Home/>}  />
<Route   path='/about'  element={<About/>}  />
<Route   path='/contact'  element={<Contact/>}  />


</Routes>
   {/* <Navbar/> */}
      
    </div>
  )
}

export default App

