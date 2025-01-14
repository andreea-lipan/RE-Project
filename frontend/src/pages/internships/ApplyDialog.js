import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid2, Typography} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";
import Box from "@mui/material/Box";
import studentService from "../../APIs/StudentService";

export const ApplyDialog = ({open, onClose, onApply}) => {

    const [hasCV,setHasCV] = useState(false);

    useEffect(() => {
        studentService.hasCV().then(r => {
            setHasCV(r.data)
        }).catch(err => {
            console.log(err)
        })
    }, []);

    const handleFileSelect = (file) => {
        const formData = new FormData();
        formData.append("file", file);
        studentService.uploadCV(formData)
            .then(r =>
                setHasCV(true))
            .catch(err => {
                console.log(err)
            })
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Apply to Internship</DialogTitle>
            <DialogContent>
                <Box
                    display="flex"
                    justifyContent="center"
                    minHeight="100%"
                >
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
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onApply} disabled={!hasCV} variant="contained">
                    Apply
                </Button>
            </DialogActions>
        </Dialog>
    );
}



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