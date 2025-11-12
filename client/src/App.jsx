import { useState } from 'react'
import {BrowserRouter as Router,
        Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Login from './components/Login';
import Signin from './components/Signin';
import Dashboard  from './components/Dashboard';
import Faculty from './components/Faculty';
import Student from './components/Student';
import AddStudent from './components/AddStudent'
import DeleteStudent from './components/DeleteStudent';
import DisplayStudent from './components/DisplayStudent';
function App() {
  return (
    <>
           <Router>
             <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/signin' element={<Signin/>}/>
              <Route path='/dashboard' element={<Dashboard/>}></Route>
              <Route path='/student' element={<Student/>}/>
              <Route path='/faculty' element={<Faculty/>}/>
              <Route path='/addStudent' element={<AddStudent/>}/>
              <Route path='/deleteStudent' element={<DeleteStudent/>}/>
              <Route path='/displayStudent' element={<DisplayStudent/>}/>
             </Routes>
           </Router>
    </>
  )
}

export default App
