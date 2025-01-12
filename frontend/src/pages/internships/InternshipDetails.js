import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import internshipService from "../../APIs/InternshipService";
import {Avatar, Grid2, Paper, Typography} from "@mui/material";
import {StudentNavbar} from "../students/StudentNavbar";
import Button from "@mui/material/Button";
import Storage from "../../utils/Storage";
import {CompanyNavbar} from "../company/CompanyNavbar";

const LocationLengthWorkMode = ({internship}) => {
    return (
        <Grid2 container sx={{
            marginTop: "30px",
            justifyContent: "left",
            alignItems: "left",
        }}>

            <Grid2 size={4}>
                <Typography variant="h5" sx={{fontFamily: 'Unna, sans-serif'}}>
                    Duration:
                </Typography>
            </Grid2>
            <Grid2 size={4}>
                <Typography variant="h6" sx={{fontFamily: 'Unna, sans-serif'}}>
                    {internship.length}
                </Typography>
            </Grid2>
            <Grid2 size={4}/>

            <Grid2 size={12} marginTop={"10px"}/>

            <Grid2 size={4}>
                <Typography variant="h5" sx={{fontFamily: 'Unna, sans-serif'}}>
                    Location:
                </Typography>
            </Grid2>
            <Grid2 size={4}>
                <Typography variant="h6" sx={{fontFamily: 'Unna, sans-serif'}}>
                    {internship.location}
                </Typography>
            </Grid2>
            <Grid2 size={4}/>

            <Grid2 size={12} marginTop={"10px"}/>

            <Grid2 size={4}>
                <Typography variant="h5" sx={{fontFamily: 'Unna, sans-serif'}}>
                    Work Mode:
                </Typography>
            </Grid2>
            <Grid2 size={4}>
                <Typography variant="h6" sx={{fontFamily: 'Unna, sans-serif'}}>
                    {internship.worktype}
                </Typography>
            </Grid2>
            <Grid2 size={4}/>

        </Grid2>
    )
}

export const InternshipDetails = () => {

    const {id} = useParams();

    const showButton = Storage.getUserRole() === "STUDENT";

    const [internship, setInternship] = useState({});

    const description =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lacinia eros. Nulla tempus, augue vel dictum accumsan, neque purus placerat metus, vitae venenatis erat sem vitae lorem." +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lacinia eros. Nulla tempus, augue vel dictum accumsan, neque purus placerat metus, vitae venenatis erat sem vitae lorem." +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lacinia eros. Nulla tempus, augue vel dictum accumsan, neque purus placerat metus, vitae venenatis erat sem vitae lorem." +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lacinia eros. Nulla tempus, augue vel dictum accumsan, neque purus placerat metus, vitae venenatis erat sem vitae lorem." +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lacinia eros. Nulla tempus, augue vel dictum accumsan, neque purus placerat metus, vitae venenatis erat sem vitae lorem.";

    const shortDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Sed ut lacinia eros.\n Nulla tempus, augue vel dictum accumsan, neque purus placerat metus, vitae venenatis erat sem vitae lorem.";
    const shortestDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    useEffect(() => {
        loadInternship();
    }, []);

    const loadInternship = () => {
        internshipService.getInternship(id).then(response => {
            return response.data;
        }).then(data => {
            setInternship(data);
        }).catch(err => {
            console.log(err);
        })
    }

    const handleApply = () => {
        console.log("Apply to internship")
    }

    return (
        <>
            <Grid2 container
                   direction="row"
                   sx={{
                       justifyContent: "center",
                       alignItems: "center",
                       marginBottom: "20px",
                   }}
            >
                {showButton ?
                    <StudentNavbar/> : <CompanyNavbar/>
                }
            </Grid2>
            <br/>

            <Grid2
                container
                direction="row"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px"
                }}
            >
                <Paper elevation={2} style={{
                    minHeight: '90vh',
                    maxWidth: '62vw',
                    backgroundColor: '#b3cfdb',
                    width: '100%',
                }}
                >
                    <Paper elevation={4} style={{
                        minHeight: '85vh',
                        maxWidth: '60vw',
                        backgroundColor: '#4ca4e6',
                        width: '100%',
                        margin: '20px'
                    }}
                    >

                        <Grid2 container sx={{
                            justifyContent: "left",
                            alignItems: "left",
                            margin: "20px",
                        }}>
                            <Grid2 size={2}>
                                <Typography variant="h4" sx={{fontFamily: 'Unna, sans-serif'}}>
                                    {internship.name}
                                </Typography>
                            </Grid2>
                            <Grid2 size={10}/>

                            <Grid2 size={3} sx={{marginTop: "20px"}}>
                                <Avatar
                                    sx={{
                                        width: 150,
                                        height: 150,
                                    }}
                                >
                                    C
                                </Avatar>
                            </Grid2>
                            <Grid2 size={8}>
                                <LocationLengthWorkMode internship={internship}/>
                            </Grid2>
                            <Grid2 size={1}/>

                            <Grid2 size={12} sx={{marginTop: "30px"}}>
                                <Typography variant="body1">
                                    {description}
                                </Typography>
                            </Grid2>

                            <Grid2 size={4} sx={{marginTop: "30px"}}>
                                <Typography variant="h4">
                                    Required Knowledge
                                </Typography>
                            </Grid2>
                            <Grid2 size={8}/>
                            <Grid2 size={12} sx={{marginTop: "15px"}}>
                                <Typography variant="body1">
                                    {shortDesc}
                                </Typography>
                            </Grid2>

                            <Grid2 size={4} sx={{marginTop: "30px"}}>
                                <Typography variant="h4">
                                    Steps to apply
                                </Typography>
                            </Grid2>
                            <Grid2 size={8}/>
                            <Grid2 size={12} sx={{marginTop: "15px"}}>
                                <Typography variant="body1">
                                    {shortDesc}
                                </Typography>
                            </Grid2>

                            <Grid2 size={4} sx={{marginTop: "15px"}}>
                                <Typography variant="h4">
                                    Salary Information
                                </Typography>
                            </Grid2>
                            <Grid2 size={8}/>
                            <Grid2 size={5} sx={{marginTop: "15px"}}>
                                <Typography variant="body1">
                                    {shortestDesc}
                                </Typography>
                            </Grid2>
                            <Grid2 size={7}/>

                            <Grid2 size={4} sx={{marginTop: "15px"}}>
                                <Typography variant="h4">
                                    Number of current applicants
                                </Typography>
                            </Grid2>
                            <Grid2 size={8}/>
                            <Grid2 size={5} sx={{marginTop: "15px"}}>
                                <Typography variant="body1">
                                    {shortestDesc}
                                </Typography>
                            </Grid2>
                            <Grid2 size={7}/>

                            <Grid2 size={4} sx={{marginTop: "15px"}}>
                                <Typography variant="h4">
                                    Contact
                                </Typography>
                            </Grid2>
                            <Grid2 size={8}/>
                            <Grid2 size={5} sx={{marginTop: "15px"}}>
                                <Typography variant="body1">
                                    {shortestDesc}
                                </Typography>
                                <Typography variant="body1">
                                    {shortestDesc}
                                </Typography>
                            </Grid2>
                            <Grid2 size={7}/>

                            <Grid2 size={12} sx={{margin: "15px"}}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{marginTop: '20px', width: '50%'}}
                                    onClick={handleApply}
                                    disabled={!showButton}
                                    sx={{
                                        marginTop: '20px',
                                        bgcolor: '#165A8B',
                                        '&:hover': {bgcolor: '#6883ad'},
                                    }}
                                >
                                    Apply
                                </Button>
                            </Grid2>
                        </Grid2>

                    </Paper>
                </Paper>
            </Grid2>
        </>
    )


}