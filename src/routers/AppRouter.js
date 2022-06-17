import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
    } from "react-router-dom"
import Login from '../components/Login'
import Registro from '../components/Registro'
import App from '../containers/App'

export default function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registro' element={<Registro/>}/>

        </Routes>
    </Router>
  )
}
