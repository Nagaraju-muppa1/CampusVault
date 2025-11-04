import { useState } from 'react'
import {BrowserRouter as Router,
        Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Login from './components/Login';
import Signin from './components/Signin';
import Dashboard  from './components/Dashboard';
function App() {
  return (
    <>
           <Router>
             <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/signin' element={<Signin/>}/>
              <Route path='/dashboard' element={<Dashboard/>}></Route>
             </Routes>
           </Router>
    </>
  )
}

export default App
