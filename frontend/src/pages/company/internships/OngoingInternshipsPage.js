import {Grid2, Paper} from "@mui/material";
import {CompanyNavbar} from "../CompanyNavbar";
import {useEffect, useState} from "react";
import internshipService from "../../../APIs/InternshipService";
import {CompanyInternshipsList} from "./CompanyInternshipsList";
import background from "../../../assets/backgroundRepeatable2.jpg";
import Box from "@mui/material/Box";

export const OngoingInternshipsPage = () => {

    const [internships, setInternships] = useState([]);

    useEffect(() => {
        loadInternships();
    }, []);

    const loadInternships = () => {
        internshipService.getOngoingInternships().then(response => {
            setInternships(response.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
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
                       marginBottom: "10vh",
                   }}
            >
                <CompanyNavbar/>
            </Grid2>
            <br/>

            <Grid2
                container
                direction="row"
                sx={{
                    justifyContent: "center",
                    marginBottom: "20px"
                }}
            >
                <Paper elevation={6} style={{
                    maxWidth: '60vw',
                    backgroundColor: 'rgba(219, 219, 219, 0.85)',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "center",
                    borderRadius: '10px',
                }}
                >
                    <CompanyInternshipsList internships={internships}/>
                </Paper>
            </Grid2>
        </Box>
    )
}