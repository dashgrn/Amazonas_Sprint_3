import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import ProductAdmin from '../components/ProductAdmin'

export const PrivateContainer = () => {
    return (
        <>
            <Routes>
                <Route path='/prodadmin' element={<ProductAdmin />} />
                {/* <Route path='/*' element={<Navigate to='/home' />} /> */}
            </Routes>
        </>
    )
}