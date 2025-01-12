import {StudentNavbar} from "./StudentNavbar";
import {Divider, Grid2, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import background from '../../assets/background.jpg'
import profileIcon from '../../assets/defaultProfileIcon.png'
import studentService from "../../APIs/StudentService";

export const StudentDashboardPage = () => {
    const [studName, setStudName] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [hasCV, setHasCV] = useState(false)

    // Load student data when the page is loaded or when there are modifications
    useEffect(() => {
        loadStudent();
    }, [hasCV]);

    // Function to load student data when the page is loaded
    const loadStudent = () => {
        studentService.getStudent()
            .then(response => {
                setStudName(response.data.firstname + " " + response.data.lastname)
                setHasCV(response.data.cv !== null)
            })
            .catch(err => {
                console.log(err)
            })
    }

    // Function to handle file selection
    const handleFileSelect = (file) => {
        setErrorMsg("")
        const formData = new FormData();
        formData.append("file", file);

        studentService.uploadCV(formData)
            .then(r =>
                setHasCV(true))
            .catch(err => {
                err.response?.data ? setErrorMsg(err.response.data) : setErrorMsg("An error occurred! Try again later")
                console.log(err)
            })
    };

    return (
        <Box
            height="100vh"
            bgcolor={'#123123'}
            sx={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <StudentNavbar/>

            <Box
                display="flex"
                flexDirection="column"
                minHeight="70vh"
                sx={{
                    marginTop: '80px',
                }}
            >
                {/* Inner Box for the centered content */}
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    sx={{
                        width: '80%',
                        maxWidth: '700px',
                        margin: '0 auto',
                        flexGrow: 1,
                        bgcolor: '#D6D6D6',
                        borderRadius: '7%',
                        position: 'relative', // Required for positioning the image
                    }}
                >

                    {/* Profile Image */}
                    <img
                        src={profileIcon}
                        alt="Description of the image"
                        style={{
                            width: '210px',
                            height: 'auto', // Maintains aspect ratio
                            display: 'block',
                            margin: '0 auto',
                            position: 'relative', // Allows positioning
                            top: '-100px', // Move the image up outside the box
                        }}
                    />

                    {/* Student Name */}
                    <Typography
                        sx={{
                            fontSize: '20px',
                            fontFamily: 'Unna, sans-serif',
                            color: '#165A8B',
                            width: '100%',
                            marginTop: '-70px', // Adjust spacing to account for the image overlap
                        }}
                    >
                        <h1>{studName}'s profile</h1>
                    </Typography>

                    <Divider sx={{
                        bgcolor: "#6F6F6F",
                        width: "300px",
                        marginBottom: "25px",
                    }}/>

                    {/* User description */}
                    <Typography
                        sx={{
                            fontSize: '16px',
                            fontFamily: 'Montserrat, sans-serif',
                            color: '#481D54',
                            width: '80%',
                            marginBottom: '20px',
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et risus sapien. Suspendisse
                        aliquam
                        aliquet nisi at elementum. Etiam eget scelerisque ligula, eget pellentesque nunc.
                    </Typography>

                    {/* Account Options */}
                    <Box
                        display="flex"
                        justifyContent="center"
                        minHeight="100%"
                    >
                        <AccountButton
                            buttonName="Account Information"
                            buttonDescription="Currently unavailable"
                            onClickFunction={() => {
                            }}
                        />
                        {hasCV ?
                            <AccountButton
                                buttonName="Your CV"
                                buttonDescription="You have uploaded your CV"
                                onClickFunction={() => {
                                }}
                            />
                            :
                            <AccountButton
                                buttonName="Your CV"
                                buttonDescription="No CV uploaded yet"
                                onClickFunction={() => {
                                }}
                                isFileUpload={true}
                                onFileSelect={handleFileSelect}
                            />
                        }
                    </Box>

                    {/* Error display */}
                    {errorMsg ?
                        <Typography component="h1" color="error" sx={{marginTop: '10px'}}>
                            {errorMsg}
                        </Typography>
                        :
                        // this one is hidden (the color matches the background)
                        // it is used to keep the layout consistent when an error message is not displayed
                        <Typography component="h1" color="#D6D6D6" sx={{marginTop: '10px'}}>
                            :)
                        </Typography>
                    }

                </Box>
            </Box>
        </Box>


    )
}

// onClickFunction: Function to be called when the button is clicked not for file upload
// isFileUpload: Boolean to determine if the button is for file upload
// onFileSelect: Function to be called when the button is clicked for file upload
const AccountButton = ({buttonName, buttonDescription, onClickFunction, isFileUpload, onFileSelect}) => {
    // Reference to the hidden file input
    // Hidden because it's ugly, and I want the user to see my styled button
    const fileInputRef = useRef(null);

    // Function to handle the click event
    const handleClick = () => {
        if (isFileUpload) {
            // If this is file upload button -> trigger the file input click
            fileInputRef.current.click();
        } else {
            // If this is not-> trigger the provided onClick function
            onClickFunction();
        }
    };

    // Function to handle the file once it's selected and pass it to the parent
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && onFileSelect) {
            onFileSelect(file); // Pass the selected file back to the parent
        }
    };


    return (
        <>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                    margin: '10px',
                    bgcolor: '#2674AB',
                    '&:hover': {bgcolor: '#6883ad'},
                    textTransform: "none",
                    minWidth: '300px',
                    minHeight: '120px'
                }}
                onClick={handleClick}
            >

                <Grid2
                    container
                    direction="column"
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Typography sx={{
                        fontSize: '24px',
                        fontFamily: 'Unna, sans-serif',
                        color: '#F9D6AE'
                    }}>
                        {buttonName}
                    </Typography>
                    <Typography sx={{
                        fontSize: '13px',
                        fontFamily: 'Montserrat, sans-serif',
                        color: '#F9D6AE'
                    }}>
                        {buttonDescription}
                    </Typography>

                </Grid2>
            </Button>

            {/* Hidden file input for file upload button */}
            {isFileUpload && (
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{display: 'none'}} // Hide the file input, we'll trigger it when the button is clicked
                    onChange={handleFileChange}
                />
            )}
        </>
    )

}