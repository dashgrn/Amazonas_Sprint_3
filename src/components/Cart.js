import { Button } from '@mui/material'
import React from 'react'
import '../styles/Cart.css'
export const Cart = () => {
    return (
        <div style={{ justifyContent: 'space-between' }} className='cart'>
            <div >
            <h2 className='cart-title'>
                    Carrito de compras
                </h2>
            <div className='cart-left'>
                
            </div>
            </div>

            

            <div className='cart-right'>
                <h3 >
                    Total
                </h3>
                <Button variant="contained" style={{ margin: '10px', backgroundColor: '#f0c14b' }} >
                    Pagar
                </Button>
            </div>
            
        </div>
    )
}
