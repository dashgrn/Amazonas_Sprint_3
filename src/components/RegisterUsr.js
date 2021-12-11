import { Button, TextField } from '@mui/material'
import React from 'react'
import '../styles/RegisterUsr.css'

export const RegisterUsr = () => {

    return (
        <div>
            <h1>Regístrate</h1>
            <form className='form'>

                <TextField
                    style={{ margin: '10px' }}
                    label="Email"
                    variant="filled"
                    type="email"
                    required
                />
                <TextField
                    style={{ margin: '10px' }}
                    label="Contraseña"
                    variant="filled"
                    type="password"
                    required
                />
                <TextField
                    style={{ margin: '10px' }}
                    label="Repite tu contraseña"
                    variant="filled"
                    type="password"
                    required
                />
                <div>
                    <Button type="submit" variant="contained" style={{ margin: '10px', backgroundColor: '#f0c14b' }}>
                        Registrarse
                    </Button>
                </div>
            </form>
        </div>
    )
}
