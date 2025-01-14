import React, {useState} from "react";
import {Box, Button, Grid2, MenuItem, Paper, TextField, Typography,} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {CompanyNavbar} from "../CompanyNavbar";
import internshipService from "../../../APIs/InternshipService";
import {COMPANY_DASHBOARD} from "../../../utils/URLconstants";
import background from "../../../assets/backgroundRepeatable2.jpg";

export const AddInternshipPage = () => {
    const [internshipDetails, setInternshipDetails] = useState({
        name: "Web Developer Intern",
        length: "12",
        workType: "Hybrid",
        deadline: "11.11.2025",
        location: "Cluj-Napoca, Romania",
        salary: "0",
        description: "Contribute to our Web Development Internship by creating responsive and user-friendly websites that meet industry standards. You’ll work on front-end development using HTML, CSS, and JavaScript, as well as explore back-end technologies like Node.js or Django. Collaborate with designers and developers to ensure seamless user experiences and optimize website performance. Gain hands-on experience with version control systems like Git and learn about deployment processes using cloud platforms. This role is ideal for individuals passionate about web technologies and looking to build a strong foundation in development. By the end of the internship, you’ll have a portfolio of live projects that demonstrate your technical abilities.",
        stepsToApply: "Participate in an initial online assessment designed to evaluate your technical skills and problem-solving abilities. Instructions will be sent via email after application submission",
        requiredKnowledge: "A working knowledge of version control systems such as Git is crucial. You should be comfortable with using Git for collaboration, managing branches, and resolving conflicts in a team environment. Experience with platforms like GitHub or GitLab is a bonus. A strong grasp of front-end technologies, including HTML, CSS, and JavaScript, is required. Experience with modern frameworks such as React, Angular, or Vue.js will be beneficial. Knowledge of responsive design principles and cross-browser compatibility issues is a plus. ",
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
        <Box sx={{
            height: '100vh',
            paddingBottom: '20px',
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'repeat'
        }}>
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
                        bgcolor: '#EAEAEA',
                        width: "100%",
                        padding: "20px",
                        borderRadius: "10px",
                    }}
                >

                    <Typography sx={{fontSize: '40px', fontFamily: 'Unna, sans-serif', color: '#000000'}}>
                        Add Internship
                    </Typography>

                    {/*This represents the Grid*/}
                    <Grid2 container spacing={2} justifyContent="center">
                        {/*This represents a grid item*/}
                        {/* Internship Name */}
                        <Grid2 size={{xs: 12, sm: 4}}>
                            <TextField
                                label="Internship Name"
                                variant="outlined"
                                name="name"
                                value={internshipDetails.name}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid2>

                        {/* Length  */}
                        <Grid2 size={{xs: 12, sm: 4}}>
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
                        </Grid2>

                        {/* Work Type, Deadline, Location, Salary */}
                        <Grid2 size={{xs: 12, sm: 4}}>
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
                        </Grid2>

                    </Grid2>


                    {/*This represents the Grid*/}
                    <Grid2 container spacing={2} justifyContent="center">
                        {/*This represents a grid item*/}
                        {/* Application Deadline */}
                        <Grid2 size={{xs: 12, sm: 5}}>
                            <TextField
                                label="Application Deadline (dd.mm.yyyy)"
                                variant="outlined"
                                name="deadline"
                                value={internshipDetails.deadline}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid2>

                        {/* Salary  */}
                        <Grid2 size={{xs: 12, sm: 5}}>
                            <TextField
                                label="Location"
                                variant="outlined"
                                name="location"
                                value={internshipDetails.location}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid2>

                        {/* Salary  */}
                        <Grid2 size={{xs: 12, sm: 2}}>
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
                        </Grid2>

                    </Grid2>

                    {/* Description */}
                    <Grid2 container spacing={2} justifyContent="center">
                        <Grid2 size={{xs: 12}}>
                            <TextField
                                label="Description"
                                name="description"
                                value={internshipDetails.description}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                multiline
                                rows={4}
                            />
                        </Grid2>
                    </Grid2>

                    {/* Steps to Apply */}
                    <Grid2 container spacing={2} justifyContent="center">
                        <Grid2 size={{xs: 12}}>
                            <TextField
                                label="Steps To Apply"
                                name="stepsToApply"
                                value={internshipDetails.stepsToApply}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                multiline
                                rows={4}
                            />
                        </Grid2>
                    </Grid2>

                    {/* Required Knowledge */}
                    <Grid2 container spacing={2} justifyContent="center">
                        <Grid2 size={{xs: 12}}>
                            <TextField
                                label="Required Knowledge"
                                name="requiredKnowledge"
                                value={internshipDetails.requiredKnowledge}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                multiline
                                rows={4}
                            />
                        </Grid2>
                    </Grid2>


                    {/* Add Button */}
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px"
                    }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            sx={{
                                textTransform: 'none',
                                bgcolor: '#165A8B',
                                '&:hover': {bgcolor: '#6883ad'}
                            }}
                        >
                            Add your Internship
                        </Button>
                    </Box>
                </Paper>
            </Grid2>
        </Box>
    );
};
