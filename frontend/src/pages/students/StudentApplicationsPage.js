import {Grid2, Paper} from "@mui/material";
import {StudentNavbar} from "./StudentNavbar";
import {ApplicationsList} from "./ApplicationsList";
import {useEffect, useState} from "react";
import applicationService from "../../APIs/ApplicationService";
import {useState} from "react";
import background from "../../assets/backgroundRepeatable2.jpg";
import Box from "@mui/material/Box";

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
        <Box sx={{
            minHeight: '100vh',
            paddingBottom: '20px',
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'repeat'
        }}>
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
                    // minHeight: "100vh",
                    marginTop: "70px",
                }}
            >
                <Paper elevation={6} style={{
                    maxWidth: '60vw',
                    backgroundColor: 'rgba(219, 219, 219, 0.85)',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '10px',
                }}
                >
                    <ApplicationsList applications={applications}/>
                </Paper>
            </Grid2>
        </Box>
    )
}