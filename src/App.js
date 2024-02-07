
import React, { useState } from 'react'
import Home from './Home'
import './App.css'
import C from './C'
import Navbar from './Navbar'
import { Routes, Route, Form } from "react-router-dom"
import About from './About'
import Contact from './Contact'
import Input from './Input'
import Todo from './Todo'

import Edit from './Form'
const App = () => {


  return (
    <div>  
<Navbar/>
<Routes>
<Route   path='/'  element={<Todo/>}  />
<Route   path='/edit/:id'  element={<Edit/>}  />

<Route   path='/about'  element={<About/>}  />
<Route   path='/contact'  element={<Contact/>}  />
</Routes>
   {/* <Navbar/> */}
      
    </div>
  )
}

export default App






