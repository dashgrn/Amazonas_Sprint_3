import React from 'react'
import '../styles/Bar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link, NavLink } from 'react-router-dom'

const Bar = () => {
    return (
        <div className="bar">

            <Link to="/" >
                <img src="https://res.cloudinary.com/diqhctpcx/image/upload/v1638397580/amazonas/logo-amazonas_fidk4w.svg" alt="logo" className="bar_logo" />
            </Link>


            <div className="nav_item">
                <span className="bar_item1">Selecciona Tu</span>
                <span className="bar_item2">Ubicación</span>
            </div>

            <div className="bar_search">
                <input type="text" name="searchB" id="barSearch" className="bar_search_input" />
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
                    <NavLink to="/login" className="nav_item" style={{ textDecoration: 'none' }}>
                        <span className="bar_item1">Hola, identifícate</span>
                        <span className="bar_item2">Cuenta</span>
                    </NavLink>
                </div>

                <div className="nav_item">
                    <span className="bar_item1">Devoluciones</span>
                    <span className="bar_item2">Y Pedidos</span>
                </div>

                <div className="bar_cart">
                    <ShoppingCartIcon />
                    <span className="bar_item2 bar_cart_count">
                        0
                    </span>
                </div>

            </div>

        </div>
    )
}

export default Bar
