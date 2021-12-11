import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Login.css'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik';
import { loginEmailPassword, loginGoogle, login } from '../actions/loginAction'


export const Login = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (data) => {
            console.log(data)
            dispatch(login(data.email, data.password))
            formik.resetForm()
        }
    })

    const handleLoginGoogle = (evt) => {
        evt.preventDefault()
        dispatch(loginGoogle())
    }


    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://res.cloudinary.com/diqhctpcx/image/upload/v1638397580/amazonas/logo-amazonas_fidk4w.svg'
                    alt='logo'
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form onSubmit={formik.handleSubmit}>

                    <h5>e-mail</h5>
                    <input
                        type='email'
                        name='email'
                        required={true}
                        placeholder='ingresa tu email'
                        onChange={formik.handleChange}
                    />

                    <h5>Contraseña</h5>
                    <input
                        type='password'
                        name='password'
                        required={true}
                        placeholder='ingresa tu contraseña'
                        onChange={formik.handleChange}
                    />

                    <button type='submit' className='login__signInButton'>Iniciar Sesión</button>
                </form>

                <button
                    className='login__registerButton'
                    onClick={handleLoginGoogle}
                >
                    Identifícate con Google
                </button>
            </div>
            <p>¿Aun no tienes cuenta? <span> <Link to='/register'> Regístrate aquí </Link></span></p>
        </div>
    )
}
