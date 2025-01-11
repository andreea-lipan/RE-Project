import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useEffect, useState} from "react";
import {Button, Paper, Typography} from "@mui/material";
import authService from "../../APIs/AuthService";
import {useNavigate} from "react-router-dom";
import {COMPANY_DASHBOARD, STUDENT_DASHBOARD} from "../../utils/URLconstants";
import Storage from "../../utils/Storage";


export const LoginPage = () => {
    const [email, setEmail] = useState('email1@facultate.ro'); // default values for testing
    const [password, setPassword] = useState('parola1');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const navigateCallback = () => {
        const role = Storage.getUserRole()
        if (role === 'STUDENT') {
            navigate(STUDENT_DASHBOARD)
        } else if (role === 'COMPANY') {
            navigate(COMPANY_DASHBOARD)
        }
    }

    const logIn = () => {
        authService.logIn(email, password)
            .then(res => {
                console.log(res)
                navigateCallback()
            })
            .catch(err => {
                console.log(err)
                setErrorMsg(err.response.data)
            })
    }

    // if already logged in, send to dashboard
    useEffect(() => {
        const userId = Storage.getUserId()
        if (userId) {
            navigateCallback()
        }
    }, [])

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <Paper elevation={3} style={{padding: '40px', maxWidth: '400px', width: '100%'}}>
                    <Typography variant="h5" component="h1" gutterBottom>
                        Login
                    </Typography>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{marginTop: '20px'}}
                        onClick={logIn}
                    >
                        Login
                    </Button>

                    {errorMsg ?
                        <Typography component="h1" gutterBottom color="error">
                            {errorMsg}
                        </Typography>
                        : <Typography component="h1" gutterBottom color="white">
                            :)
                        </Typography>}
                </Paper>
            </div>
        </>

    )
}