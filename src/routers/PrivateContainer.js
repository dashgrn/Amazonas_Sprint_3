import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import ProductAdmin from '../components/ProductAdmin'
import Home from '../containers/Home'
import {Cart} from '../components/Cart'
export const PrivateContainer = () => {
    return (
        <>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/prodadmin' element={<ProductAdmin />} />
                <Route path='/cart' element={<Cart />} />
                {/* <Route path='/*' element={<Navigate to='/home' />} /> */}
            </Routes>
        </>
    )
}