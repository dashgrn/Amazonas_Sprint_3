import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


export const ProdDetail = () => {


    const { products } = useSelector(store => store.productList) //destructuring from STORE

    const selectedItemTitle = localStorage.getItem('itemTitle')

    const selectedItemObj = (title) => {
        return products.find(product => product.title === title)
    }

    const [selectedItem, setSelectedItem] = useState({})

    useEffect(() => {
        setSelectedItem(selectedItem => selectedItemObj(selectedItemTitle))
        console.log('selected Obj', selectedItem)
    },[])

    return (
        <>
            <Card style={{margin: '20px'}} sx={{ maxWidth: 300 }}>

                <CardMedia
                    component="img"
                    height="300"
                    image={selectedItem.image[0]}
                    alt={selectedItem.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {selectedItem.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {selectedItem.description}
                    </Typography>
                </CardContent>

            </Card>
        </>
    )
}
