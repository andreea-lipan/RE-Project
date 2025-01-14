import {Card, CardContent, Grid2, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";

export const ApplicationCard = ({application}) => {

    const [color, setColor] = useState('');

    useEffect(() => {
        if (application.status === 'Pending') {
            setColor('#bf7400');
        } else if (application.status === 'Accepted') {
            setColor('#4CAF50');
        } else {
            setColor('#F44336');
        }
    }, []);

    return(
        <Card
            style={{
                margin: '8px',
                backgroundColor: '#D5D5D6',
                textAlign: 'left',
                maxWidth: '80vw',
                borderRadius: '15px',
            }}
            elevation={2}
        >

            <CardContent >
                <Grid2 container direction="row" justifyContent={"center"} alignItems={"center"}>
                    <Grid2 size={4}>
                        <Typography variant="h4" sx={{fontFamily: 'Unna, sans-serif'}}>
                            {application.internshipName}
                        </Typography>
                    </Grid2>

                    <Grid2 size={6}/>

                    <Grid2 size={2}>
                        <Typography variant="h4" sx={{fontFamily: 'Unna, sans-serif',color:{color}}}>
                            {application.status}
                        </Typography>
                    </Grid2>
                </Grid2>

            </CardContent>
        </Card>
    )
}