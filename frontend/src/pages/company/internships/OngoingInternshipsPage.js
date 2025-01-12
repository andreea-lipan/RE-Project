import {Grid2, Paper} from "@mui/material";
import {CompanyNavbar} from "../CompanyNavbar";
import {useEffect, useState} from "react";
import internshipService from "../../../APIs/InternshipService";
import {CompanyInternshipsList} from "./CompanyInternshipsList";

export const OngoingInternshipsPage = () => {

    const [internships, setInternships] = useState([]);

    useEffect(() => {
        loadInternships();
    }, []);

    const loadInternships = () => {
        internshipService.getInternships().then(response => {
            setInternships(response.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
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
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <Paper elevation={6} style={{
                    maxWidth: '60vw',
                    backgroundColor: '#165A8B',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "center"
                }}
                >
                    <CompanyInternshipsList internships={internships}/>
                </Paper>
            </Grid2>
        </>
    )
}