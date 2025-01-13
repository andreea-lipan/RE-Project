import {Grid2, Paper} from "@mui/material";
import {StudentNavbar} from "./StudentNavbar";
import {ApplicationsList} from "./ApplicationsList";
import {useEffect, useState} from "react";
import applicationService from "../../APIs/ApplicationService";

export const StudentApplicationsPage = () => {

    const [applications, setApplications] = useState([]);

    useEffect(() => {
        loadApplications();
    }, []);

    const loadApplications = () => {
        applicationService.getApplicationsByStudent().then(response => {
            setApplications(response.data);
        }).catch(err => {
            console.log(err);
        })
    }

    return(
        <>
            <Grid2 container
                   direction="row"
                   sx={{
                       justifyContent: "center",
                       alignItems: "center",
                       marginBottom: "20px",
                   }}
            >
                <StudentNavbar/>
            </Grid2>
            <br/>

            <Grid2
                container
                direction="row"
                sx={{
                    justifyContent: "center",
                    alignItems: "flex-start",
                    height: "100vh",
                }}
            >
                <Paper elevation={6} style={{
                    maxWidth: '60vw',
                    backgroundColor: '#165A8B',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
                >
                    <ApplicationsList applications={applications}/>
                </Paper>
            </Grid2>
        </>
    )
}