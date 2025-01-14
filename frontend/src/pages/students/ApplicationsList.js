import {ApplicationCard} from "./ApplicationCard";
import {Typography} from "@mui/material";

export const ApplicationsList = ({applications}) => {
    return (
        <div style={{
            minHeight: '100px',
            padding: '16px',
        }}>
            {applications.length === 0 &&
                <Typography variant="h4" sx={{fontFamily: 'Unna, sans-serif', paddingTop:'25px'}}>
                    No applications found
                </Typography>
            }
            {applications.map(application =>
                <ApplicationCard application={application}/>
            )}
        </div>
    )
}