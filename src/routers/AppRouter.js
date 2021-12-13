import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Bar from '../components/Bar'
import ProductAdmin from '../components/ProductAdmin'
import { Login } from '../components/Login'
import { RegisterUsr } from '../components/RegisterUsr'
import { useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import CircularProgress from '@mui/material/CircularProgress';
import { Grid } from '@mui/material'
import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { PrivateContainer } from './PrivateContainer'
import {Cart} from '../components/Cart'
import { ProdDetail } from '../components/ProdDetail'

const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            console.log(user ? 'loged in' : 'Not logged');
            //si el user?.uid existe significa que estoy auntenticado
            //el signo ? evalua si el user tiene algo pregunta si existe el uid
            if (user?.uid) {
                //dispatch(loginEmailPassword(user.uid, user.displayName));    //? ¿Para qué era?
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false)
            }
            setChecking(false)
        })

    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking) {
        return (
            <Grid
                margin='300px'
                align="center"
                justify="center"
                >
                <CircularProgress />
            </Grid>
        )
    }

    return (
        <BrowserRouter>
            <Bar />
            <Routes>
                <Route path='/' element={
                    <PublicRoutes isAuthenticated={isLoggedIn}>
                        <Home />
                    </PublicRoutes>
                } />

                <Route path="/login" element={
                    <PublicRoutes isAuthenticated={isLoggedIn}>
                        <Login />
                    </PublicRoutes>
                } />

                <Route path='/register' element={
                    <PublicRoutes isAuthenticated={isLoggedIn}>
                        <RegisterUsr />
                    </PublicRoutes>
                } />
                <Route path='/cart' element={
                    
                        <Cart />
                    
                } />
                <Route path='/details' element={
                    
                        <ProdDetail />
                    
                } />

                <Route path='/*' element={
                    <PrivateRoutes isAuthenticated={isLoggedIn}>
                        <PrivateContainer />
                    </PrivateRoutes>
                } />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
