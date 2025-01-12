import * as React from 'react';
import TextField from '@mui/material/TextField';
import {useEffect, useState} from "react";
import {
    Button,
    Card,
    Divider,
    Grid2,
    Paper,
    Typography
} from "@mui/material";
import authService from "../../APIs/AuthService";
import {useNavigate} from "react-router-dom";
import {COMPANY_DASHBOARD, STUDENT_DASHBOARD} from "../../utils/URLconstants";
import Storage from "../../utils/Storage";
import LoginBackground from '../../assets/background.jpg'
import '@fontsource/unna';


export const LoginPage = () => {
    const [email, setEmail] = useState('email1@facultate.ro'); // default values for testing
    const [password, setPassword] = useState('parola1');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    // navigate to dashboard based on user role
    const navigateCallback = () => {
        const role = Storage.getUserRole()
        if (role === 'STUDENT') {
            navigate(STUDENT_DASHBOARD)
        } else if (role === 'COMPANY') {
            navigate(COMPANY_DASHBOARD)
        }
    }

    // on LogIn button click
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
            <Grid2
                container
                direction="row"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    backgroundImage: `url(${LoginBackground})`,
                    backgroundSize: 'cover'
                }}
            >
                <Card>
                    <Card sx={{
                        height: '630px', maxWidth: '300px', paddingX: '150px', display: 'flex',
                        flexDirection: 'column', justifyContent: "center", bgcolor: '#165A8B'
                    }}>
                        <Typography sx={{fontSize: '32px', fontFamily: 'Unna, sans-serif', color: '#F9D6AE'}}>
                            www.practica.com
                        </Typography>
                        <Divider sx={{margin: '20px 0', borderColor: 'grey'}}/>
                        <Typography sx={{
                            fontSize: '18px',
                            fontFamily: 'Unna, sans-serif',
                            paddingTop: '20px',
                            color: '#F9D6AE'
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et risus sapien.
                        </Typography>
                    </Card>
                </Card>

                <Paper elevation={6} style={{
                    padding: '40px',
                    maxWidth: '400px',
                    width: '100%',
                    height: '550px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "center"
                }}>
                    <Typography variant="h5" component="h1" gutterBottom
                                sx={{fontSize: '32px', fontFamily: 'Unna, sans-serif'}}>
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
                        sx={{
                            marginTop: '20px',
                            bgcolor: '#165A8B',
                            '&:hover': {bgcolor: '#6883ad'},
                        }}
                    >
                        Login
                    </Button>

                    {errorMsg ?
                        <Typography component="h1" color="error" sx={{
                            marginTop: '10px'
                        }}>
                            {errorMsg}
                        </Typography>
                        : <Typography component="h1" color="white" sx={{
                            marginTop: '10px'
                        }}>
                            :)
                        </Typography>}
                </Paper>
            </Grid2>

        </>

    )
}