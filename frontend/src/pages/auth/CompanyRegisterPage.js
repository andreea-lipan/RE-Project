import {Button, Container, Divider, Grid, Grid2, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import background from "../../assets/background.jpg";
import * as React from "react";
import AuthService from "../../APIs/AuthService";
import {LOGIN} from "../../utils/URLconstants";
import {useNavigate} from "react-router-dom";

export const CompanyRegisterPage = () => {

    // Form data state
    const [formData, setFormData] = useState({
        // private
        loginEmail: '',
        loginPassword: '',
        //public
        companyName: '',
        companyType: '',
        phoneNumber: '',
        email: '',
        address: '',
        website: '',
        shortDescription: '',
        longDescription: '',
        workplace: '',
        previousInternships: ''
    });

    // Handle input change
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    // Error message state
    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (e) => {
        // stop the form from reloading the page
        e.preventDefault();
        // Handle the form submission logic
        console.log('Form submitted:', formData);
        // send data

        // redirect to login
        AuthService.registerCompany(formData)
            .then(() => {navigate(LOGIN)})
            .catch(err => setErrorMsg(err.response.data));
    };

    //todo error handling when srv ded
    //todo create a separate component for the form
    //todo add validation
    //todo create a separate component for error messages

    return (

        <Grid2
            container
            direction="row"
            sx={{
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                height: "100%",
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover'
            }}>

            <Container maxWidth="md"
                       sx={{
                           marginBottom: 5,
                       }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: 3,
                        borderRadius: 2,
                        boxShadow: 3,
                        marginTop: 5,
                        bgcolor: '#165A8B'
                    }}>
                    <Typography sx={{fontSize: '20px', fontFamily: 'Unna, sans-serif', color: '#FFE2C1'}}>
                        www.practica.com
                    </Typography>
                    <Divider sx={{margin: '10px 0', borderColor: 'grey', width: "300px"}}/>
                    <Typography sx={{
                        fontSize: '15px',
                        fontFamily: 'Unna, sans-serif',
                        paddingTop: '10px',
                        color: '#FFE2C1'
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et risus sapien.
                    </Typography>
                </Box>


                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: 3,
                        borderRadius: 2,
                        boxShadow: 3,
                        marginTop: 5,
                        bgcolor: '#EAEAEA'
                    }}
                >
                    <Typography sx={{fontSize: '40px', fontFamily: 'Unna, sans-serif', color: '#000000'}}>
                        Sign Up
                    </Typography>

                    <form onSubmit={handleSubmit} style={{width: '100%'}}>

                        <Typography sx={{
                            fontSize: '26px',
                            fontFamily: 'Unna, sans-serif',
                            color: '#000000',
                            marginTop: '20px'
                        }}>
                            Private Information
                        </Typography>

                        {/*This represents the Grid*/}
                        <Grid2 container spacing={2} justifyContent="center">

                            {/*This represents a grid item*/}
                            <Grid2 size={{xs: 12, sm: 6}}>
                                <TextField
                                    label="Login Email"
                                    name="loginEmail"
                                    value={formData.loginEmail}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid2>

                            {/* Email Field */}
                            <Grid2 size={{xs: 12, sm: 6}}>
                                <TextField
                                    label="Login Password"
                                    name="loginPassword"
                                    type="password"
                                    value={formData.loginPassword}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid2>

                        </Grid2>


                        <Typography sx={{
                            fontSize: '26px',
                            fontFamily: 'Unna, sans-serif',
                            color: '#000000',
                            marginTop: '20px'
                        }}>
                            Public Information
                        </Typography>
                        <Typography sx={{
                            fontSize: '13px',
                            fontFamily: 'Montserrat, sans-serif',
                            color: '#000000',
                            marginBottom: '20px'
                        }}>
                            This information will be visible to the students on your company page. You can always update
                            this information later.
                        </Typography>

                        {/*This represents the Grid*/}
                        <Grid2 container spacing={1} justifyContent="center">
                            {/*This represents a grid item*/}
                            {/* Company Name */}
                            <Grid2 size={{xs: 12, sm: 6}}>
                                <TextField
                                    label="Company Name"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid2>

                            {/* Company Type */}
                            <Grid2 size={{xs: 12, sm: 6}}>
                                <TextField
                                    label="Company Type"
                                    name="companyType"
                                    value={formData.companyType}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid2>

                            {/* Phone Number*/}
                            <Grid2 size={{xs: 12, sm: 4}}>
                                <TextField
                                    label="Phone Number"
                                    name="phoneNumber"
                                    type="tel"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid2>

                            {/* Public Email */}
                            <Grid2 size={{xs: 12, sm: 8}}>
                                <TextField
                                    label="Public Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid2>

                            {/* Address */}
                            <Grid2 size={{xs: 12, sm: 6}}>
                                <TextField
                                    label="Address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid2>

                            {/* Website */}
                            <Grid2 size={{xs: 12, sm: 6}}>
                                <TextField
                                    label="Website"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid2>

                        </Grid2>

                        {/*This represents the Grid*/}
                        <Grid2 container spacing={2} justifyContent="center">
                            {/*This represents a grid item*/}
                            {/* Short Description */}
                            <Grid2 size={{xs: 12, sm: 6}}>
                                <TextField
                                    label="Short Description"
                                    name="shortDescription"
                                    value={formData.shortDescription}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    multiline
                                    rows={2}
                                />
                            </Grid2>

                            <Grid2 size={{xs: 12, sm: 6}}>
                                <TextField
                                    label="Workplace Information"
                                    name="workplace"
                                    value={formData.workplace}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    multiline
                                    rows={2}
                                />
                            </Grid2>
                        </Grid2>

                        {/*This represents the Grid*/}
                        <Grid2 container spacing={2} justifyContent="center">
                            {/*This represents a grid item*/}
                            {/* Long Description */}
                            <Grid2 size={{xs: 12}}>
                                <TextField
                                    label="Long Description"
                                    name="longDescription"
                                    value={formData.longDescription}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                />
                            </Grid2>
                        </Grid2>

                        {/*This represents the Grid*/}
                        <Grid2 container spacing={2} justifyContent="center">
                            {/*This represents a grid item*/}
                            {/* Previous Internships */}
                            <Grid2 size={{xs: 12}}>
                                <TextField
                                    label="Previous Internships"
                                    name="previousInternships"
                                    value={formData.previousInternships}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                />
                            </Grid2>
                        </Grid2>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{
                                marginTop: "25px",
                                textTransform: 'none',
                                bgcolor: '#165A8B',
                                '&:hover': {bgcolor: '#6883ad'}
                            }}
                        >
                            Sign Up Your Company
                        </Button>
                    </form>

                    {errorMsg ?
                        <Typography component="h1" color="error" sx={{
                            marginTop: '10px'
                        }}>
                            {errorMsg}
                        </Typography>
                        : <Typography component="h1" color="#EAEAEA" sx={{
                            marginTop: '10px'
                        }}>
                            :)
                        </Typography>}
                </Box>


            </Container>


        </Grid2>
    )
}