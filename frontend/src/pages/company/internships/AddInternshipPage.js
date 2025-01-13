import React, {useState} from "react";
import {Box, Button, Grid2, MenuItem, Paper, TextareaAutosize, TextField, Typography,} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {CompanyNavbar} from "../CompanyNavbar";
import internshipService from "../../../APIs/InternshipService";
import {COMPANY_DASHBOARD} from "../../../utils/URLconstants";

export const AddInternshipPage = () => {
    const [internshipDetails, setInternshipDetails] = useState({
        name: "",
        length: "",
        workType: "",
        deadline: "",
        location: "",
        salary: "",
        description: "",
        stepsToApply: "",
        requiredKnowledge: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInternshipDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const validateDate = (date) => {
        const regex = /^\d{2}\.\d{2}\.\d{4}$/;
        return regex.test(date);
    };

    const handleSubmit = async () => {
        const {deadline} = internshipDetails;

        // Validate date format
        if (!validateDate(deadline)) {
            alert("Please enter the deadline in the format dd.mm.yyyy.");
            return;
        }

        // Convert dd.mm.yyyy to Date object
        const [day, month, year] = deadline.split(".");
        const formattedDate = new Date(year, month - 1, day); // JavaScript Date uses 0-based months

        if (isNaN(formattedDate.getTime())) {
            alert("Invalid date. Please check your input.");
            return;
        }

        try {
            const internship = {
                ...internshipDetails,
                deadline: formattedDate.toISOString(), // Convert to ISO format if the API expects it
            };

            internshipService.addInternship(internship).then((response) => {
                if (response.status === 200 || response.status === 201) {
                    alert("Internship added successfully!");
                    navigate(COMPANY_DASHBOARD);
                } else {
                    alert("Failed to add internship. Please try again.");
                }
            }).catch((error) => {
                console.error("Error adding internship:", error);
            });


        } catch (error) {
            console.error("Error adding internship:", error);
            alert("An error occurred while adding the internship.");
        }
    };

    return (
        <>
            {/* Navigation Bar */}
            <Grid2
                container
                direction="row"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",
                }}
            >
                <CompanyNavbar/>
            </Grid2>

            {/* Main Content */}
            <Grid2
                container
                direction="row"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                }}
            >
                <Paper
                    elevation={6}
                    sx={{
                        maxWidth: "60vw",
                        backgroundColor: "#165A8B",
                        width: "100%",
                        padding: "20px",
                        borderRadius: "10px",
                    }}
                >
                    <Typography variant="h5" sx={{color: "#ffffff", marginBottom: "20px"}}>
                        Add Internship:
                    </Typography>

                    {/* Internship Name and Length */}
                    <TextField
                        label="Internship Name"
                        variant="outlined"
                        name="name"
                        value={internshipDetails.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Length (weeks)"
                        variant="outlined"
                        name="length"
                        type="number"
                        value={internshipDetails.length}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />

                    {/* Work Type, Deadline, Location, Salary */}
                    <TextField
                        label="Work Type"
                        variant="outlined"
                        name="workType"
                        value={internshipDetails.workType}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        select
                    >
                        <MenuItem value="On-Site">On-Site</MenuItem>
                        <MenuItem value="Remote">Remote</MenuItem>
                        <MenuItem value="Hybrid">Hybrid</MenuItem>
                    </TextField>

                    <TextField
                        label="Application Deadline (dd.mm.yyyy)"
                        variant="outlined"
                        name="deadline"
                        value={internshipDetails.deadline}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Location"
                        variant="outlined"
                        name="location"
                        value={internshipDetails.location}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Salary"
                        variant="outlined"
                        name="salary"
                        value={internshipDetails.salary}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        type="number"
                    />

                    {/* Description */}
                    <TextareaAutosize
                        minRows={4}
                        placeholder="Internship Description"
                        name="description"
                        value={internshipDetails.description}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "10px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                        }}
                    />

                    {/* Steps to Apply */}
                    <TextareaAutosize
                        minRows={3}
                        placeholder="Steps to Apply"
                        name="stepsToApply"
                        value={internshipDetails.stepsToApply}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "10px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                        }}
                    />

                    {/* Required Knowledge */}
                    <TextareaAutosize
                        minRows={3}
                        placeholder="Required Knowledge"
                        name="requiredKnowledge"
                        value={internshipDetails.requiredKnowledge}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "10px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                        }}
                    />

                    {/* Add Button */}
                    <Box sx={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Add
                        </Button>
                    </Box>
                </Paper>
            </Grid2>
        </>
    );
};
