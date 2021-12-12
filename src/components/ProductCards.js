import React from 'react'
import { useSelector } from 'react-redux'

//mui imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

export const ProductCards = () => {

    const { products } = useSelector(store => store.productList) //destructuring from STORE
    console.log('products array from store', products)
    products.map((product, index) => (
        console.log('product', index, product)
    ))

    return (
        <>
            <Grid container styles={{ margin: '20px' }} rowSpacing={4} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>

                {
                    products.map((product, index) => (
                        <Grid key={index} item xs={4}>
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
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
                            </Card>
                        </Grid>
                    ))
                }

            </Grid>
        </>
    )
}