import {Card, CardActionArea, CardActions, CardContent, Collapse, Grid2, IconButton, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import {ApplicantsList} from "./ApplicantsList";
import applicationService from "../../../APIs/ApplicationService";

export const CompanyInternshipCard = ({internship}) => {

    const [expanded, setExpanded] = useState(false);

    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        loadApplicants();
    },[]);

    const loadApplicants = () => {
        applicationService.getApplicationsByInternship(internship.id).then(response => {
            setApplicants(response.data);
        }).catch(err => {
            console.log(err);
        })
    }

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
                backgroundColor: '#D5D5D6',
                textAlign: 'left',
                maxWidth: '80vw',
                borderRadius: '15px',
            }}
            elevation={2}
        >
            <CardActionArea
                onClick={handleActionClick}
            >
                <CardContent >

                    <Grid2 container  direction="row" justifyContent={"space-between"} alignItems={"center"}>
                        <Grid2 >
                            <Typography variant="h4" sx={{fontFamily: 'Unna, sans-serif'}}>
                                {internship.name}
                            </Typography>
                        </Grid2>

                        <Grid2>
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
                        <ApplicantsList applicants={applicants} setApplicants={setApplicants}/>
                    </Collapse>

                </CardContent>
            </CardActionArea>
        </Card>
    )
}