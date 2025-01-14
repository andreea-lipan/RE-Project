import {InternshipCard} from "./InternshipCard";
import {useEffect} from "react";
import {Typography} from "@mui/material";

export const InternshipsList = ({internships}) => {
    // use effect with console log when internships is modified
    useEffect(() => {
        console.log(internships)
    }, [internships])
    return (
        <div style={{
            minHeight: '200px',
            padding: '16px',
        }}>
            {internships.length === 0 &&
                <Typography variant="h4" sx={{fontFamily: 'Unna, sans-serif', paddingTop:'25px'}}>
                    No internships found
                </Typography>
            }
            {internships.map(internship =>
                <InternshipCard internship={internship}/>
            )}
        </div>
    )
}