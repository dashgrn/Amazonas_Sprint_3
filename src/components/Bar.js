import React from 'react'
import '../styles/Bar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const Bar = () => {
    return (
        <div className="bar">

            <img src="https://res.cloudinary.com/diqhctpcx/image/upload/v1638397580/amazonas/logo-amazonas_fidk4w.svg" alt="logo" className="bar_logo" />

            <div className="bar_search">
                <input type="text" name="searchB" id="barSearch" className="bar_search_input"/>
                <SearchIcon className="bar_searchIcn" />
            </div>

            <div className="bar_nav">
                <div className="nav_item">
                    
                </div>
            </div>

        </div>
    )
}

export default Bar
