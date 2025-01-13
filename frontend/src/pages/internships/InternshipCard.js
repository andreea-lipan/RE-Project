import React from 'react';
import {Avatar, Card, CardActionArea, CardContent, Grid2, Typography} from "@mui/material";
import TimerIcon from '@mui/icons-material/Timer';
import PaidIcon from '@mui/icons-material/Paid';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import {useNavigate} from "react-router-dom";
import {INTERNSHIP_DETAILS} from "../../utils/URLconstants";


export const InternshipCard = ({internship}) => {

    const navigate = useNavigate();

    const description =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lacinia eros. Nulla tempus, augue vel dictum accumsan, neque purus placerat metus, vitae venenatis erat sem vitae lorem.";

    const handleActionClick = () => {
        console.log("clicked" + internship.id)
        navigate(INTERNSHIP_DETAILS(internship.id))
    }

    return (
        <Card
            style={{
                margin: '8px',
                backgroundColor: '#f5f5f5',
                textAlign: 'left',
                maxWidth: '80vw',
            }}
            elevation={2}
        >
            <CardActionArea
                onClick={handleActionClick}
            >
                <CardContent>
                    <Typography variant="h4" sx={{fontFamily: 'Unna, sans-serif'}}>
                        {internship.name}
                    </Typography>
                    <br/>
                    <Grid2 container justifyContent={"left"} alignItems={"center"}>
                        <Grid2 size={1}>
                            <Avatar
                                sx={{
                                    width: 56,
                                    height: 56,
                                }}
                            >
                                C
                            </Avatar>
                        </Grid2>
                        <Grid2 size={11}>
                            <Typography variant="body1">
                                {internship.description}
                            </Typography>
                        </Grid2>
                    </Grid2>
                    <br/>
                    <Grid2 container justifyContent={"center"} alignItems={"center"}>

                        <Grid2 size={1}/>
                        <Grid2 size={1}>
                            <TimerIcon/>
                        </Grid2>
                        <Grid2 size={1}>
                            {internship.length}
                        </Grid2>

                        <Grid2 size={1}/>
                        <Grid2 size={1}>
                            <BusinessCenterIcon/>
                        </Grid2>
                        <Grid2 size={1}>
                            {internship.location}
                        </Grid2>

                        <Grid2 size={1}/>
                        <Grid2 size={1}>
                            <BusinessCenterIcon/>
                        </Grid2>
                        <Grid2 size={1}>
                            {internship.workType}
                        </Grid2>

                        <Grid2 size={1}/>
                        <Grid2 size={1}>
                            <PaidIcon/>
                        </Grid2>
                        <Grid2 size={1}>
                            {internship.salary}
                        </Grid2>

                    </Grid2>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
