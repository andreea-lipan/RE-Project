import {Card, CardActionArea, CardActions, CardContent, Collapse, Grid2, IconButton, Typography} from "@mui/material";
import React, {useState} from "react";
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import {ApplicantsList} from "./ApplicantsList";

export const CompanyInternshipCard = ({internship}) => {

    const [expanded, setExpanded] = useState(false);

    const handleActionClick = () => {
        setExpanded(!expanded)
    }
    const handleEditClick = (event) => {
        event.stopPropagation(); // Prevent triggering CardActionArea's onClick
        console.log("Edit button clicked");
    };

    const handleArchiveClick = (event) => {
        event.stopPropagation(); // Prevent triggering CardActionArea's onClick
        console.log("Archive button clicked");
    };

    return(
        <Card
            style={{
                margin: '8px',
                backgroundColor: '#f5f5f5',
                textAlign: 'left',
                maxWidth: '80vw',
                cursor:'cell'
            }}
            elevation={2}
        >
            <CardActionArea
                onClick={handleActionClick}
            >
                <CardContent >

                    <Grid2 container direction="row" justifyContent={"center"} alignItems={"center"}>
                        <Grid2 size={4}>
                            <Typography variant="h4" sx={{fontFamily: 'Unna, sans-serif'}}>
                                {internship.name}
                            </Typography>
                        </Grid2>

                        <Grid2 size={7}/>

                        <Grid2 size={1}>
                            <CardActions >
                                <IconButton aria-label="Edit" onClick={handleEditClick}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton aria-label="Archive" onClick={handleArchiveClick}>
                                    <ArchiveIcon />
                                </IconButton>

                            </CardActions>
                        </Grid2>
                    </Grid2>

                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <ApplicantsList internship={internship}/>
                    </Collapse>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}