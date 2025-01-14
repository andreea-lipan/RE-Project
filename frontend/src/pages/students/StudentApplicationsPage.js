import {Grid2, Paper} from "@mui/material";
import {StudentNavbar} from "./StudentNavbar";
import {ApplicationsList} from "./ApplicationsList";
import {useState} from "react";
import background from "../../assets/backgroundRepeatable2.jpg";
import Box from "@mui/material/Box";

export const StudentApplicationsPage = () => {

    const [applications, setApplications] = useState([
        {title: "Application 1", status: "Pending"},
        {title: "Application 2", status: "Accepted"},
        {title: "Application 3", status: "Denied"},
    ]);

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