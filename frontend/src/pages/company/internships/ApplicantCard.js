import {Card, CardActions, CardContent, Grid2, Typography} from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

export const ApplicantCard = ({applicant}) => {




    const handleSeeApplication = (event) => {
        event.stopPropagation();
    }

    const handleAccept = (event) => {
        event.stopPropagation();
    }

    const handleDeny = (event) => {
        event.stopPropagation();
    }

    return(
        <>
            <Card
                style={{
                    margin: '8px',
                    backgroundColor: '#dad3d3',
                    textAlign: 'left',
                    maxWidth: '80vw',
                }}
                elevation={2}>
                <CardContent>
                    <Grid2 container direction="row" justifyContent={"flex-start"} alignItems={"center"}>
                        <Grid2 size={8}>
                            <Typography variant="h5" sx={{fontFamily: 'Unna, sans-serif'}}>
                                Jhon Snow
                            </Typography>
                        </Grid2>


                        <Grid2 size={4}>
                            <CardActions>
                                <Button
                                    sx={{
                                        backgroundColor: '#FFD54F', // Softer Yellow
                                        color: '#212121', // Dark Gray for better contrast
                                        '&:hover': {
                                            backgroundColor: '#FFC107', // Slightly darker yellow for hover
                                        },
                                        borderRadius: '8px', // Slightly rounded corners
                                    }}
                                    onClick={handleSeeApplication}
                                >
                                    See Application
                                </Button>
                                <Button
                                    sx={{
                                        backgroundColor: '#43A047', // Modern Green
                                        color: 'white', // Keeping white for clear readability
                                        '&:hover': {
                                            backgroundColor: '#388E3C', // Darker green for hover
                                        },
                                        borderRadius: '8px',
                                    }}
                                    onClick={handleAccept}
                                >
                                    Accept
                                </Button >
                                <Button
                                    sx= {{
                                        backgroundColor: '#E53935', // Modern Red
                                        color: 'white', // Keeping white for clear readability
                                        '&:hover': {
                                            backgroundColor: '#D32F2F', // Darker red for hover
                                        },
                                        borderRadius: '8px',
                                    }}
                                    onClick={handleDeny}
                                >
                                    Deny
                                </Button>
                            </CardActions>
                        </Grid2>
                    </Grid2>
                </CardContent>
            </Card>
        </>
    )
}