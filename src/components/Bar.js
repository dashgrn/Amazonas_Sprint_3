import React, { useEffect, useState } from 'react'
import '../styles/Bar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getLocation } from '../actions/locationAction';
import { useFormik } from 'formik';
import { prodSearchAction } from '../actions/prodSearchAction';
import { logOutUsr } from '../actions/loginAction';

let geoCodeK = '&key=AIzaSyCnnoI3kc2e22A0ohXRvGLe1pTLOwuJr7c'
let geoCodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='
let geocodeQuery = ''

const Bar = () => {

    const dispatch = useDispatch()

    const { email } = useSelector((state) => state.register)

    const [display, setDisplay] = useState("none");


    console.log('email from state', email)


    //LOCATION CODE FROM HERE
    const [locationState, setLocationState] = useState('')

    const latLongToGeocode = async (query) => {
        const resp = await fetch(query)
        const { results } = await resp.json()
        console.log('location response', results)
        setLocationState(locationState => results[11].formatted_address)
        console.log('res 11', locationState)
        dispatch(getLocation(locationState))
    }

    const getLatLong = () => {
        navigator.geolocation.getCurrentPosition((location) => {
            console.log('coords', location)
            let { latitude, longitude } = location.coords
            // console.log('lat', latitude)
            // console.log('long', longitude)
            geocodeQuery = geoCodeURL + latitude + ',' + longitude + geoCodeK
            latLongToGeocode(geocodeQuery)
        })
    }
    const handleLocation = () => getLatLong()
    //LOCATION CODE ENDS HERE

    //SEARCH CODE FROM HERE
    const formik = useFormik({
        initialValues: {
            searchQuery: ''
        },
        onSubmit: (searchQuery) => {
            console.log('formik submit data', searchQuery)
            dispatch(prodSearchAction(searchQuery))
        }
    })

    const handleLogout = () => {
        dispatch(logOutUsr());
      };

    return (
        <div className="bar">

            <Link to="/" >
                <img src="https://res.cloudinary.com/diqhctpcx/image/upload/v1638397580/amazonas/logo-amazonas_fidk4w.svg" alt="logo" className="bar_logo" />
            </Link>


            <div className="nav_item" onClick={handleLocation}>
                {
                    locationState ?
                        (
                            <div>
                                <span className="bar_item2">{locationState}</span>
                            </div>
                        ) :
                        (
                            <div>
                                <span className="bar_item2">Ubicación</span>
                            </div>
                        )
                }


            </div>


            <div className="bar_search">

                <form style={{ width: '-webkit-fill-available' }} onSubmit={formik.handleSubmit}>
                    <input onChange={formik.handleChange} type="text" name="searchQuery" className="bar_search_input" />
                </form>

                <SearchIcon className="bar_searchIcn" />
            </div>

            <div className="bar_nav">

                <div>
                    <NavLink to="/prodadmin" className="nav_item" style={{ textDecoration: 'none' }}>
                        <span className="bar_item1">Administrar</span>
                        <span className="bar_item2">Productos</span>
                    </NavLink>
                </div>

                <div >

                    <div className="nav_item" >
                        <span className="bar_item1">
                            Hola, {email === undefined ? 'identifícate' : email}
                        </span>
                    </div>

                    {
                        email === undefined ? (
                            <NavLink to="/login" className="nav_item" style={{ textDecoration: 'none' }}>
                                <span className="bar_item2">
                                    LogIn
                                </span>
                            </NavLink>
                        ) :
                            <div className="nav_item">
                                <span className="bar_item2" onClick={handleLogout}>
                                    Logout
                                </span>
                            </div>

                    }



                </div>

                <div className="nav_item">
                    <span className="bar_item1">Devoluciones</span>
                    <span className="bar_item2">Y Pedidos</span>
                </div>

                <Link to='/cart'>
                    <div className="bar_cart">
                        <ShoppingCartIcon />
                        <span className="bar_item2 bar_cart_count">
                            0
                        </span>
                    </div>
                </Link>


            </div>

        </div>
    )
}

export default Bar
