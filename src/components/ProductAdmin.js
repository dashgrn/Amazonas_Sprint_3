import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ProductAdmin.css'
import { IconButton, Snackbar, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import { cloudinaryImgUpload } from '../helpers/cloudinaryImgUpload'
import { useDispatch } from 'react-redux';
import { addProdAsync } from '../actions/actionProdAdm';
import CloseIcon from '@mui/icons-material/Close';


const ProductAdmin = () => {


    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            title: '',
            rating: 0,
            price: 0,
            description: '',
            image: []
        },
        onSubmit: (data) => {
            dispatch(addProdAsync(data))
            handleSnack()
            formik.resetForm()
            formik.initialValues.image = []
            formik.image = []
        },
    })

    const handlePictureClick = () => {
        document.getElementById('fileSelector').click();
    }

    const handleFileChanged = (evt) => {
        const file = evt.target.files[0];
        cloudinaryImgUpload(file)
            .then(response => {
                formik.initialValues.image.push(response);
                console.log('then, res pushed', response);
                console.log('state', formik.initialValues.image)
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    // Snackbar Stuff
    const [open, setOpen] = React.useState(false);

    const handleSnack = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    
    const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            Cerrar
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

      

    return (
        <div className='prodForm'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://res.cloudinary.com/diqhctpcx/image/upload/v1638397580/amazonas/logo-amazonas_fidk4w.svg'
                    alt='logo'
                />
            </Link>

            <h1>Agregar Producto</h1>

            <Box className='formContainer' alignItems='center' display='flex' justifyContent='center' flexDirection='column'
                sx={{
                    '& > :not(style)': { m: 3, width: '55ch' },
                }}>
                <form onSubmit={formik.handleSubmit}>
                    <TextField id="outlined-basic" label="Titulo" variant="outlined"
                        type='text'
                        name='title'
                        autoComplete="off"
                        onChange={formik.handleChange}
                        required
                        sx={{ m: 1 }}
                    />

                    <TextField id="outlined-basic" label="Precio" variant="outlined"
                        type='number'
                        name='price'
                        autoComplete="off"
                        onChange={formik.handleChange}
                        required
                        sx={{ m: 1 }}
                    />

                    <TextField id="outlined-basic" label="Rating" variant="outlined"
                        type='number'
                        name='rating'
                        autoComplete="off"
                        onChange={formik.handleChange}
                        required
                        sx={{ m: 1 }}
                    />

                    <TextField id="outlined-basic" label="Descripci??n" variant="outlined"
                        type='text'
                        name='description'
                        autoComplete="off"
                        onChange={formik.handleChange}
                        required
                        sx={{ m: 1 }}
                    />

                    <input
                        name="image"
                        style={{ display: 'none' }}
                        id="fileSelector"
                        accept="image/jpeg"
                        type="file"
                        onChange={handleFileChanged}
                    />
                    <br></br>
                    <div style={{ margin: '8px' }}>
                        <Button variant='contained'
                            onClick={handlePictureClick}
                        >Subir Imagen
                        </Button>
                    </div>


                    <br ></br>
                    <div>
                        <Button sx={{ bgcolor: '#ffab00' }} variant="contained"
                            value="Save"
                            type="submit"
                        >Agregar Producto</Button>
                    </div>

                </form>
            </Box>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message="Producto Agregado"
                action={action}
            />
        </div>
    )
}

export default ProductAdmin