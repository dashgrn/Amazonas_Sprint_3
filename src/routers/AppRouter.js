import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Bar from '../components/Bar'
import ProductAdmin from '../components/ProductAdmin'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Bar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/prodadmin' element={<ProductAdmin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter