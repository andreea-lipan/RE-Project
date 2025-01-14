import {CompanyInternshipCard} from "./CompanyInternshipCard";
import {Typography} from "@mui/material";

export const CompanyInternshipsList = ({internships}) => {
    return (
        <div style={{
            minHeight: '100px',
            padding: '16px',
        }}>
            {internships.length === 0 &&
                <Typography variant="h4" sx={{fontFamily: 'Unna, sans-serif', paddingTop:'25px'}}>
                    No internships found
                </Typography>
            }
            {internships.map(internship =>
                <CompanyInternshipCard internship={internship}/>
            )}
        </div>
    )
}