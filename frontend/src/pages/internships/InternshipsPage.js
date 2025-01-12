import internshipService from "../../APIs/InternshipService";
import {useState, useEffect} from "react"
import requestInstance from "../../APIs/RequestInstance";
import {InternshipCard} from "./InternshipCard";
import {InternshipsList} from "./InternshipsList";
import {StudentsNavbar} from "../navbars/StudentsNavbar";
import {Grid2, IconButton, Paper, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";


export const InternshipsPage = () => {

    const [internships, setInternships] = useState([]);
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
                <StudentsNavbar/>
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