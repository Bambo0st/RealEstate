/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import About from './pages/About'
import Header from './components/Header'

import PrivateRoute from './components/PrivateRoute'

export default function App() {
  return <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/sign-in' element={<SignIn />}></Route>
      <Route path='/sign-up' element={<SignUp />}></Route>
      <Route path='/about' element={<About />}></Route>
      {/* This wrap of PrivateRoute is because if a user is not signed in, he must not be able to access Profile */}
      <Route element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />}></Route>
      </Route>

    </Routes>
  </BrowserRouter >
}
