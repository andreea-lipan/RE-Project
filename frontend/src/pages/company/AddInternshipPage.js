import React, { useState } from "react";
import { Grid2, Paper, Box, TextField, Button, MenuItem, Typography, TextareaAutosize } from "@mui/material";
import {CompanyNavbar} from "./CompanyNavbar";
import { useNavigate } from "react-router-dom";
import Storage from "../../utils/Storage";

export const AddInternshipPage = () => {
    const [internshipDetails, setInternshipDetails] = useState({
        name: "",
        length: "",
        workType: "",
        deadline: null,
        location: "",
        salary: "",
        description: "",
        stepsToApply: "",
        requiredKnowledge: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInternshipDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleDateChange = (date) => {
        setInternshipDetails((prevDetails) => ({
            ...prevDetails,
            deadline: date,
        }));
    };

    const handleSubmit = () => {
        // to do
        console.log("Internship Submitted", internshipDetails);
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
                    <Typography variant="h5" sx={{ color: "#ffffff", marginBottom: "20px" }}>
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

//datepicker

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

                    {/* Apply Button */}
                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Apply
                        </Button>
                    </Box>
                </Paper>
            </Grid2>
        </>
    );
};
