import React from 'react'
import { useSelector } from 'react-redux'

//mui imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link, NavLink } from 'react-router-dom';

export const ProductCards = () => {

    const { products } = useSelector(store => store.productList) //destructuring from STORE
    console.log('products array from store', products)
    products.map((product, index) => (
        console.log('product', index, product)
    ))

    const handleSelect = (title) => {
        localStorage.setItem('itemTitle', title)
    }

    return (
        <>
            <Grid container marginTop='10px' rowSpacing={4} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>

                {
                    products.map((product, index) => (
                        <Grid key={index} item xs={4} align='center'>
                            <Card sx={{ maxWidth: 300 }}>
                                <NavLink to='/details' style={{textDecoration: 'none'}}>
                                    <CardActionArea onClick={() => handleSelect(product.title)}>
                                        <CardMedia
                                            component="img"
                                            height="300"
                                            image={product.image[0]}
                                            alt={product.title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {product.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {product.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </NavLink>

                            </Card>
                        </Grid>
                    ))
                }

            </Grid>
        </>
    )
}