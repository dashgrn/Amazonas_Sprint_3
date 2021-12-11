import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Bar from '../components/Bar'
import ProductAdmin from '../components/ProductAdmin'
import { Login } from '../components/Login'
import { RegisterUsr } from '../components/RegisterUsr'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Bar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/prodadmin' element={<ProductAdmin />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<RegisterUsr />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
