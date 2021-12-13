import React from 'react'
import { IconButton, Button, TextField, Snackbar } from '@mui/material'
import '../styles/RegisterUsr.css'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { registerEmailPassword } from '../actions/registerUsrAction'
import { cloudinaryImgUpload } from '../helpers/cloudinaryImgUpload'
import { Input } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const RegisterUsr = () => {

    const dispatch = useDispatch()

    const handleFileChanged = (evt) => {
        const file = evt.target.files[0];
        cloudinaryImgUpload(file)
            .then(response => {
                formik.values.usrImg = response
                console.log(response);
                console.log('value usrImg en formik', formik)
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            password2: '',
            usrImg: ''
        },
        onSubmit: (data) => {
            console.log('usrImg url', data.usrImg)
            console.log('data from form', data)

            if (data.password !== data.password2 || data.password.length < 6) {
                alert('Las contraseñs no coinciden y deben ser más de 6 carácteres')
            } else {
                dispatch(registerEmailPassword(data.email, data.password, data.usrImg))
                handleSnack('success')
                formik.initialValues.usrImg = []
                formik.usrImg = []
                formik.resetForm()
            }
        }
    })

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
        <div className='form'>
            <h1>Regístrate</h1>
            <div className='login__container'>
                <form onSubmit={formik.handleSubmit}>

                    <TextField
                        onChange={formik.handleChange}
                        name='email'
                        style={{ margin: '10px' }}
                        label="Email"
                        variant="filled"
                        type="email"
                        required
                    />
                    <TextField
                        onChange={formik.handleChange}
                        name='password'
                        style={{ margin: '10px' }}
                        label="Contraseña"
                        variant="filled"
                        type="password"
                        required
                    />
                    <TextField
                        onChange={formik.handleChange}
                        name='password2'
                        style={{ margin: '10px' }}
                        label="Repite tu contraseña"
                        variant="filled"
                        type="password"
                        required
                    />
                    <Input
                        onChange={handleFileChanged}
                        name='usrImg'
                        style={{ margin: '10px' }}
                        label="Sube tu imagen de perfil"
                        placeholder='Sube tu imagen de perfil'
                        variant="filled"
                        type="file"
                    />


                    <div>
                        <Button
                            type="submit"
                            variant="contained"
                            style={{ margin: '10px', backgroundColor: '#f0c14b' }}>
                            Registrarse
                        </Button>
                    </div>
                </form>
            </div>

            <Snackbar
                severity="success"
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message="Cuenta Creada"
                action={action}
            />
        </div>
    )
}