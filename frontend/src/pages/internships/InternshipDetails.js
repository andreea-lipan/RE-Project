import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import internshipService from "../../APIs/InternshipService";
import {Avatar, Container, Grid2, IconButton, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Storage from "../../utils/Storage";
import {CompanyNavbar} from "../company/CompanyNavbar";
import background from "../../assets/background.jpg";
import Box from "@mui/material/Box";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaymentsIcon from '@mui/icons-material/Payments';
import internshipBackground from "../../assets/team.jpg";
import StraightenIcon from '@mui/icons-material/Straighten';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NumbersIcon from '@mui/icons-material/Numbers';
import {COMPANY_PAGE} from "../../utils/URLconstants";
import {StudentNavbar} from "../students/StudentNavbar";
import applicationService from "../../APIs/ApplicationService";
import {ApplyDialog} from "./ApplyDialog";

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export const InternshipDetails = () => {
    const {id} = useParams();
    const showButton = Storage.getUserRole() === "STUDENT";
    const [internship, setInternship] = useState({});
    const [hasApplied, setHasApplied] = useState(false);
    const [concurrentApplicants, setConcurrentApplicants] = useState(0);
    const [applyDialogOpen, setApplyDialogOpen] = useState(false);

    const randomColor = getRandomColor();

    useEffect(() => {
        loadInternship();
        loadConcurrentApplicants();
        checkIfApplied()
    }, []);

    const loadInternship = () => {
        internshipService.getInternship(id)
            .then(response => response.data)
            .then(data => setInternship(data))
            .catch(err => console.log(err));
    }
    const loadConcurrentApplicants = () => {
        applicationService.getConcurrentApplicants(id)
            .then(response => response.data)
            .then(data => setConcurrentApplicants(data))
            .catch(err => console.log(err));
    }
    const checkIfApplied = () => {
        applicationService.checkIfApplied(id)
            .then(data => setHasApplied(data))
            .catch(err => console.log(err));
    }

    const handleApply =  () => {
        applicationService.addApplication(id).then( response => {
            if (response.status === 200) {
                setHasApplied(true);
                setApplyDialogOpen(false);
                console.log("Application successful!");
            } else {
                console.error("Failed to apply:", response.status);
            }
        }).catch(err => console.log(err));
    };

    const openDialog = () => {
        setApplyDialogOpen(true);
    }

    const navigate = useNavigate();
    const handleAvatarClick = () => {
        console.log(internship)
        navigate(COMPANY_PAGE(internship.companyId));
    }

    const showStudentNavbar = Storage.getUserRole() === 'STUDENT';

    return (
        <>
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

                    {/* Internship background*/}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 3,
                            borderRadius: 2,
                            boxShadow: 3,
                            backgroundImage: `url(${internshipBackground})`,
                            backgroundPosition: '50% 30%',
                            backgroundSize: 'cover',
                            // bgcolor: '#165A8B',
                            height: '15vh',

                        }}>

                        <Box
                            sx={{
                                padding: 2,
                                paddingX: 3,
                                borderRadius: 2,
                                boxShadow: 3,
                                marginBottom: -22,
                                minHeight: '5vh',
                                maxWidth: '700px',  // todo make it responsive
                                bgcolor: 'rgba(255, 255, 255, 1)',
                                zIndex: 999,
                            }}>

                            <Grid2
                                container //todo fix these icons for resizable pages
                                direction="row"
                                alignItems="center"
                                spacing={2}
                            >
                                <Grid2 item>
                                    <IconButton onClick={handleAvatarClick}
                                            sx={{
                                                padding: 0
                                            }}>
                                        <Avatar
                                            sx={{
                                                width: 50,
                                                height: 50,
                                                marginBottom: '-10px',
                                                backgroundColor: randomColor
                                            }}>
                                            {internship.companyName?.charAt(0).toUpperCase()}
                                        </Avatar>
                                    </IconButton>
                                </Grid2>

                                <Grid2 item>
                                    <Typography sx={{
                                        fontSize: '40px',
                                        fontFamily: 'Unna, sans-serif',
                                        paddingTop: '10px',
                                        color: '#000000'
                                    }}>
                                        {internship.name}
                                    </Typography>
                                </Grid2>
                            </Grid2>


                        </Box>

                    </Box>

                    {/* Internship details */}
                    <Container sx={{
                        padding: '20px',
                        bgcolor: 'rgba(219, 219, 219, 0.75)',
                        marginTop: '20px',
                        borderRadius: 2,

                    }}>

                        {/* Internship tiny details */}
                        <Grid2 container
                               spacing={4}
                               justifyContent="center"
                               sx={{
                                   // marginTop: '-25px'
                               }}>
                            <Grid2 item>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        paddingX: 3,
                                        paddingTop: 1,
                                        borderRadius: 2,
                                        boxShadow: 3,
                                        bgcolor: 'rgba(255, 255, 255, 1)',
                                        minHeight: '13vh',
                                    }}>


                                    {/* Deadline */}
                                    <Grid2
                                        container //todo fix these icons for resizable pages
                                        direction="row">
                                        <Grid2 item>
                                            <CalendarMonthIcon/>
                                        </Grid2>

                                        <Grid2 item>
                                            <Typography sx={{
                                                fontSize: '16px',
                                                fontFamily: 'Montserrat, sans-serif',
                                                color: '#000000',
                                                paddingLeft: '20px',
                                            }}>
                                                Deadline: {internship.deadline}
                                            </Typography>
                                        </Grid2>
                                    </Grid2>

                                    {/* Length */}
                                    <Grid2
                                        container //todo fix these icons for resizable pages
                                        direction="row">
                                        <Grid2 item>
                                            <StraightenIcon/>
                                        </Grid2>

                                        <Grid2 item>
                                            <Typography sx={{
                                                fontSize: '16px',
                                                fontFamily: 'Montserrat, sans-serif',
                                                color: '#000000',
                                                paddingLeft: '20px',
                                            }}>
                                                Length: {internship.length} weeks
                                            </Typography>
                                        </Grid2>
                                    </Grid2>

                                    {/* Salary */}
                                    <Grid2
                                        container //todo fix these icons for resizable pages
                                        direction="row">
                                        <Grid2 item>
                                            <PaymentsIcon/>
                                        </Grid2>

                                        <Grid2 item>
                                            <Typography sx={{
                                                fontSize: '16px',
                                                fontFamily: 'Montserrat, sans-serif',
                                                color: '#000000',
                                                paddingLeft: '20px',
                                            }}>
                                                Salary: {internship.salary} €
                                            </Typography>
                                        </Grid2>
                                    </Grid2>

                                </Box>
                            </Grid2>

                            <Grid2 item>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        paddingX: 3,
                                        paddingTop: 1,
                                        borderRadius: 2,
                                        boxShadow: 3,
                                        bgcolor: 'rgba(255, 255, 255, 1)',
                                        minHeight: '13vh',
                                    }}>


                                    {/* Deadline */}
                                    <Grid2
                                        container //todo fix these icons for resizable pages
                                        direction="row">
                                        <Grid2 item>
                                            <WorkIcon/>
                                        </Grid2>

                                        <Grid2 item>
                                            <Typography sx={{
                                                fontSize: '16px',
                                                fontFamily: 'Montserrat, sans-serif',
                                                color: '#000000',
                                                paddingLeft: '20px',
                                            }}>
                                                Work type: {internship.workType}
                                            </Typography>
                                        </Grid2>
                                    </Grid2>

                                    {/* Length */}
                                    <Grid2
                                        container //todo fix these icons for resizable pages
                                        direction="row">
                                        <Grid2 item>
                                            <LocationOnIcon/>
                                        </Grid2>

                                        <Grid2 item>
                                            <Typography sx={{
                                                fontSize: '16px',
                                                fontFamily: 'Montserrat, sans-serif',
                                                color: '#000000',
                                                paddingLeft: '20px',
                                            }}>
                                                {internship.location}
                                            </Typography>
                                        </Grid2>
                                    </Grid2>

                                    {/* Length */}
                                    <Grid2
                                        container //todo fix these icons for resizable pages
                                        direction="row">
                                        <Grid2 item>
                                            <NumbersIcon/>
                                        </Grid2>

                                        <Grid2 item>
                                            <Typography sx={{
                                                fontSize: '16px',
                                                fontFamily: 'Montserrat, sans-serif',
                                                color: '#000000',
                                                paddingLeft: '20px',
                                            }}>
                                                Applicants: {concurrentApplicants}
                                            </Typography>
                                        </Grid2>
                                    </Grid2>


                                </Box>
                            </Grid2>
                        </Grid2>


                        {/* Description */}
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
                                Job description
                            </Typography>

                            <Typography sx={{
                                fontSize: '14px',
                                fontFamily: 'Montserrat, sans-serif',
                                color: '#000000',
                                paddingLeft: '20px',
                            }}>
                                {internship.description}
                            </Typography>

                        </Box>

                        {/* Required knowledge */}
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
                                Required Knowledge
                            </Typography>

                            <Typography sx={{
                                fontSize: '14px',
                                fontFamily: 'Montserrat, sans-serif',
                                color: '#000000',
                                paddingLeft: '20px',
                            }}>
                                {internship.requiredKnowledge}
                            </Typography>

                        </Box>

                        {/* Steps to apply */}
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
                                Steps to apply
                            </Typography>

                            <Typography sx={{
                                fontSize: '14px',
                                fontFamily: 'Montserrat, sans-serif',
                                color: '#000000',
                                paddingLeft: '20px',
                            }}>
                                {internship.stepsToApply}
                            </Typography>

                        </Box>

                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{marginTop: '20px'}}
                            onClick={openDialog}
                            disabled={!showButton || hasApplied}
                            sx={{
                                marginTop: '20px',
                                bgcolor: '#165A8B',
                                '&:hover': {bgcolor: '#6883ad'},
                            }}
                        >
                            {hasApplied ? "Applied" : "Apply"}
                        </Button>


                    </Container>
                </Container>
            </Box>

            <ApplyDialog
                open={applyDialogOpen}
                onClose={() => {setApplyDialogOpen(false)}}
                onApply={handleApply}
            />
        </>
    )
}
