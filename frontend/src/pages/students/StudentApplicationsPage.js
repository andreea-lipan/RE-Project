import {Grid2, Paper} from "@mui/material";
import {StudentNavbar} from "./StudentNavbar";
import {ApplicationsList} from "./ApplicationsList";
import {useState} from "react";

export const StudentApplicationsPage = () => {

    const [applications, setApplications] = useState([
        {title: "Application 1", status: "Pending"},
        {title: "Application 2", status: "Accepted"},
        {title: "Application 3", status: "Denied"},
    ]);

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