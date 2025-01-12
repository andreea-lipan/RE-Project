import internshipService from "../../APIs/InternshipService";
import {useEffect, useState} from "react"
import {InternshipsList} from "./InternshipsList";
import {StudentNavbar} from "../students/StudentNavbar";
import {Grid2, Paper} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";
import Storage from "../../utils/Storage";
import {CompanyNavbar} from "../company/CompanyNavbar";

export const InternshipsPage = () => {

    const [internships, setInternships] = useState([]);
    const showStudentNavbar = Storage.getUserRole() === 'STUDENT';

    //
    useEffect(() => {
        // loadInternships();
    }, []);

    useEffect(() => {
        internshipService.getInternships()
            .then(response => {
                if (response.status === 200) {
                    return response.data
                }
            })
            .then(data => {
                setInternships(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const loadInternships = async () => {
        const result = await internshipService.getInternships();
        setInternships(result.data);
    }

    const handleSearch = () =>{
        //TODO: Implement search
    }

    return (
        <>
            <Grid2 container
                   direction="row"
                   sx={{
                       justifyContent: "center",
                       alignItems: "center",
                       marginBottom: "20px",
                   }}
            >
                {showStudentNavbar ?
                    <StudentNavbar/> : <CompanyNavbar/>
                }
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
                    <Box sx={
                        {
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin:'20px'
                        }
                    }>
                        <Button>Filter</Button>
                        <SearchBar onSearch={handleSearch}/>
                    </Box>

                    <InternshipsList internships={internships}/>
                </Paper>
            </Grid2>
        </>
    )
}