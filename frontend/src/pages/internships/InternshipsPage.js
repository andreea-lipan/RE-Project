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
import FilterDialog from "./FilterDialog";

export const InternshipsPage = () => {

    const [internships, setInternships] = useState([]);
    const [filteredInternships, setFilteredInternships] = useState([]);
    const [filterDialogOpen, setFilterDialogOpen] = useState(false);

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
                setInternships(data);
                setFilteredInternships(data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const loadInternships = async () => {
        const result = await internshipService.getInternships();
        setInternships(result.data);
    }

    const handleSearch = (term) => {
            if (!term.trim()) {
                setFilteredInternships(internships);
                return;
            }
            const filtered = internships.filter((internship) =>
                internship.name.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredInternships(filtered);
        };

    const handleFilterClick = () => {
            setFilterDialogOpen(true);
        };

        const handleFilterDialogClose = () => {
            setFilterDialogOpen(false);
        };

        const applyFilters = (filters) => {
            let filtered = internships;

            if (filters.length) {
                filtered = filtered.filter(
                    (internship) => internship.length === filters.length
                );
            }

            if (filters.salary) {
                filtered = filtered.filter(
                    (internship) => internship.salary >= Number(filters.salary)
                );
            }

            if (filters.workType) {
                filtered = filtered.filter(
                    (internship) => internship.workType === filters.workType
                );
            }

            if (filters.location) {
                filtered = filtered.filter((internship) =>
                    internship.location
                        .toLowerCase()
                        .includes(filters.location.toLowerCase())
                );
            }

            setFilteredInternships(filtered);
        };

    return (
            <>
                <Grid2
                    container
                    direction="row"
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "20px",
                    }}
                >
                    {showStudentNavbar ? <StudentNavbar /> : <CompanyNavbar />}
                </Grid2>

                <Grid2
                    container
                    direction="row"
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                    }}
                >
                    <Paper
                        elevation={6}
                        style={{
                            maxWidth: "60vw",
                            backgroundColor: "#165A8B",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "20px",
                            }}
                        >
                            <Button onClick={handleFilterClick}>Filter</Button>
                            <SearchBar onSearch={handleSearch} />
                        </Box>
                        <InternshipsList internships={filteredInternships} />
                    </Paper>
                </Grid2>

                <FilterDialog
                    open={filterDialogOpen}
                    onClose={handleFilterDialogClose}
                    onApplyFilters={applyFilters}
                />
            </>
        );
    };
