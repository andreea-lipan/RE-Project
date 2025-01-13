import CompanyService from "../../APIs/CompanyService";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import background from "../../assets/background.jpg";
import Box from "@mui/material/Box";
import {Container, Grid2, Typography} from "@mui/material";
import * as React from "react";
import companyBackground from "../../assets/office.jpg";
import {CompanyNavbar} from "./CompanyNavbar";
import CampaignIcon from '@mui/icons-material/Campaign';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LinkIcon from '@mui/icons-material/Link';
import {StudentNavbar} from "../students/StudentNavbar";
import Storage from "../../utils/Storage";

export const CompanyPage = () => {

    const {id} = useParams();
    const [company, setCompany] = useState('')

    useEffect(() => {
        CompanyService.getCompany(id)
            .then(res => {
                setCompany(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    const showStudentNavbar = Storage.getUserRole() === 'STUDENT';

    // todo figure out why the navbar works well, why does it stretch to max width
    return (
        <Box sx={{
            height: '100%',
            paddingBottom: '20px',
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
        }}>
            {showStudentNavbar ? <StudentNavbar /> : <CompanyNavbar />}

            <Container maxWidth="md"
                       sx={{
                           paddingBottom: '20px',
                           minHeight: '90vh',
                           // bgcolor: 'white',
                           paddingTop: '20px',
                           marginTop: '20px',
                           borderRadius: 2,
                       }}>

                {/*Company background*/}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 3,
                        borderRadius: 2,
                        boxShadow: 3,
                        backgroundImage: `url(${companyBackground})`,
                        backgroundPosition: '50% 60%',
                        backgroundSize: 'cover',
                        height: '15vh',
                    }}>

                    <Box
                        sx={{
                            padding: 2,
                            borderRadius: 2,
                            boxShadow: 3,
                            marginBottom: -22,
                            minHeight: '5vh',
                            maxWidth: '400px',  // todo make it responsive
                            bgcolor: 'rgba(255, 255, 255, 1)',
                        }}>
                        <Typography sx={{
                            fontSize: '40px',
                            fontFamily: 'Unna, sans-serif',
                            paddingTop: '10px',
                            color: '#000000'
                        }}>
                            {company.companyName}
                        </Typography>

                        <Typography sx={{
                            fontSize: '20px',
                            fontFamily: 'Montserrat, sans-serif',
                            color: '#000000'
                        }}>
                            {company.companyType}
                        </Typography>
                    </Box>

                </Box>

                <Container sx={{
                    padding: '20px',
                    bgcolor: 'rgba(219, 219, 219, 0.75)',
                    marginTop: '30px',
                    borderRadius: 2,
                }}>

                    {/*Company details*/}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            paddingX: 3,
                            paddingTop: 3,
                            borderRadius: 2,
                            boxShadow: 3,
                            bgcolor: 'rgba(255, 255, 255, 1)',
                            minHeight: '13vh',
                        }}>

                        {/*Short description with icon*/}
                        <Grid2
                            container //todo fix these icons for resizable pages
                            direction="row">
                            <Grid2 item >
                                <CampaignIcon/>
                            </Grid2>

                            <Grid2 item >
                                <Typography sx={{
                                    fontSize: '16px',
                                    fontFamily: 'Montserrat, sans-serif',
                                    color: '#000000',
                                    paddingLeft: '20px',
                                }}>
                                    {company.shortDescription}
                                </Typography>
                            </Grid2>
                        </Grid2>

                        {/*Website with icon*/}
                        <Grid2
                            container
                            direction="row">
                            <Grid2 item >
                                <LinkIcon/>
                            </Grid2>

                            <Grid2 item >
                                <Typography
                                    component="a"
                                    href={`${company.website}`}
                                    target="_blank" // Opens in a new tab
                                    rel="noopener noreferrer" // Security best practice when using target="_blank"
                                    sx={{
                                        fontSize: '15px',
                                        fontFamily: 'Montserrat, sans-serif',
                                        color: '#000000',
                                        paddingLeft: '20px',
                                    }}>
                                    {company.website}
                                </Typography>
                            </Grid2>
                        </Grid2>


                        {/*Workplace with icon*/}
                        <Grid2
                            container
                            direction="row">
                            <Grid2 item >
                                <BusinessCenterIcon/>
                            </Grid2>

                            <Grid2 item >
                                <Typography sx={{
                                    fontSize: '15px',
                                    fontFamily: 'Montserrat, sans-serif',
                                    color: '#000000',
                                    paddingLeft: '20px',
                                }}>
                                    {company.workplace}
                                </Typography>
                            </Grid2>
                        </Grid2>

                    </Box>

                    {/* About Us / Long description */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: 3,
                            borderRadius: 2,
                            boxShadow: 3,
                            marginTop: '20px',
                            bgcolor: 'rgba(255, 255, 255, 1)',
                            minHeight: '10vh',
                        }}>


                        <Typography sx={{
                            fontSize: '25px',
                            fontWeight: 'bold',
                            fontFamily: 'Unna, sans-serif',
                            color: '#000000',
                            paddingLeft: '20px',
                        }}>
                            About Us
                        </Typography>

                        <Typography sx={{
                            fontSize: '14px',
                            fontFamily: 'Montserrat, sans-serif',
                            color: '#000000',
                            paddingLeft: '20px',
                        }}>
                            {company.longDescription}
                        </Typography>

                    </Box>

                    {/* About Us / Long description */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: 3,
                            borderRadius: 2,
                            boxShadow: 3,
                            marginTop: '20px',
                            bgcolor: 'rgba(255, 255, 255, 1)',
                            minHeight: '10vh',
                        }}>


                        <Typography sx={{
                            fontSize: '25px',
                            fontWeight: 'bold',
                            fontFamily: 'Unna, sans-serif',
                            color: '#000000',
                            paddingLeft: '20px',
                        }}>
                            Previous internships
                        </Typography>

                        <Typography sx={{
                            fontSize: '14px',
                            fontFamily: 'Montserrat, sans-serif',
                            color: '#000000',
                            paddingLeft: '20px',
                        }}>
                            {company.previousInternships}
                        </Typography>

                    </Box>

                    {/* Contact information */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            // alignItems: 'left',
                            justifyContent: 'center',
                            padding: 3,
                            borderRadius: 2,
                            boxShadow: 3,
                            marginTop: '20px',
                            bgcolor: 'rgba(255, 255, 255, 1)',
                            minHeight: '10vh',
                        }}>

                        <Typography sx={{
                            fontSize: '25px',
                            fontWeight: 'bold',
                            fontFamily: 'Unna, sans-serif',
                            color: '#000000',
                            paddingLeft: '20px',
                        }}>
                            Contact information
                        </Typography>

                        {/* Email */}
                        <Grid2
                            container
                            direction="row">
                            <Grid2 item >
                                <Typography sx={{
                                    fontSize: '14px',
                                    fontFamily: 'Montserrat, sans-serif',
                                    color: '#000000',
                                    paddingLeft: '20px',
                                }}>
                                    Email: {company.publicEmail}
                                </Typography>
                            </Grid2>
                        </Grid2>

                        {/* Phone */}
                        <Grid2
                            container
                            direction="row">

                            <Grid2 item >
                                <Typography sx={{
                                    fontSize: '14px',
                                    fontFamily: 'Montserrat, sans-serif',
                                    color: '#000000',
                                    paddingLeft: '20px',
                                }}>
                                    Phone: {company.phoneNumber}
                                </Typography>
                            </Grid2>
                        </Grid2>

                        {/* Address */}
                        <Grid2
                            container
                            direction="row">

                            <Grid2 item >
                                <Typography sx={{
                                    fontSize: '14px',
                                    fontFamily: 'Montserrat, sans-serif',
                                    color: '#000000',
                                    paddingLeft: '20px',
                                }}>
                                    Address: {company.address}
                                </Typography>
                            </Grid2>
                        </Grid2>

                    </Box>

                </Container>
            </Container>
        </Box>
    )
}