import React from 'react';
import {Avatar, Card, CardActionArea, CardContent, Grid2, Typography} from "@mui/material";
import TimerIcon from '@mui/icons-material/Timer';
import PaidIcon from '@mui/icons-material/Paid';
import PlaceIcon from '@mui/icons-material/Place';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import {useNavigate} from "react-router-dom";
import {INTERNSHIP_DETAILS} from "../../utils/URLconstants";

function getRandomColor() {
    const predefinedColors = [
        '#01161e',
        '#124559',
        '#598392',
        '#aec3b0',
        '#AEB4A1',
    ];

    // Select a random color from the predefined list
    const randomIndex = Math.floor(Math.random() * predefinedColors.length);
    return predefinedColors[randomIndex];
}

export const InternshipCard = ({internship}) => {

    const navigate = useNavigate();

    const description =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lacinia eros. Nulla tempus, augue vel dictum accumsan, neque purus placerat metus, vitae venenatis erat sem vitae lorem.";

    const handleActionClick = () => {
        console.log("clicked" + internship.id)
        navigate(INTERNSHIP_DETAILS(internship.id))
    }
    const randomColor = getRandomColor();

    return (
        <Card
            style={{
                margin: '8px',
                marginBottom: '16px',
                backgroundColor: '#f5f5f5',
                textAlign: 'left',
                maxWidth: '80vw',
                borderRadius: '15px',
            }}
            elevation={2}
        >
            <CardActionArea
                onClick={handleActionClick}
            >
                <CardContent sx = {{
                    padding: '25px',
                    '&:last-child': {
                        paddingBottom: 16,
                    },
                }}
                >
                    <Typography variant="h4" sx={{fontFamily: 'Unna, sans-serif'}}>
                        {internship.name}
                    </Typography>
                    <br/>
                    <Grid2 container justifyContent={"left"} alignItems={"center"} sx={{marginLeft:'20px'}}>
                        <Grid2 size={1}>

                            <Avatar
                                sx={{
                                    width: 56,
                                    height: 56,
                                    marginBottom: '-10px', //todo make company here
                                    backgroundColor: randomColor
                                }}>
                                {internship.name?.charAt(0).toUpperCase()}
                            </Avatar>
                        </Grid2>
                        <Grid2 size={11}>
                            <Typography variant="body1">
                                {internship.description}
                            </Typography>
                        </Grid2>
                    </Grid2>
                    <br/>
                    <Grid2 container justifyContent={"center"} alignItems={"center"} spacing={12}>

                        <Grid2 container spacing={1} sx={{alignItems:'center'}}>
                            <Grid2 >
                                <TimerIcon sx={{marginBottom:'-3px'}}/>
                            </Grid2>
                            <Grid2 >
                                {internship.length}
                            </Grid2>
                        </Grid2>

                        <Grid2 container spacing={1} sx={{alignItems:'center'}}>
                            <Grid2 >
                                <PlaceIcon sx={{marginBottom:'-3px'}}/>
                            </Grid2>
                            <Grid2 >
                                {internship.location}
                            </Grid2>
                        </Grid2>

                        <Grid2 container spacing={1} sx={{alignItems:'center'}}>
                            <Grid2 >
                                <BusinessCenterIcon sx={{marginBottom:'-3px'}}/>
                            </Grid2>
                            <Grid2 >
                                {internship.workType}
                            </Grid2>
                        </Grid2>

                        <Grid2 container spacing={1} sx={{alignItems:'center'}}>
                            <Grid2 >
                                <PaidIcon sx={{marginBottom:'-3px'}}/>
                            </Grid2>
                            <Grid2 >
                                {internship.salary}
                            </Grid2>
                        </Grid2>



                    </Grid2>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
