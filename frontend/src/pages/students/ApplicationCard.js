import {Card, CardContent, Grid2, Typography} from "@mui/material";
import React from "react";

export const ApplicationCard = ({application}) => {

    return(
        <Card
            style={{
                margin: '8px',
                backgroundColor: '#f5f5f5',
                textAlign: 'left',
                maxWidth: '80vw',
            }}
            elevation={2}
        >

            <CardContent >
                <Grid2 container direction="row" justifyContent={"center"} alignItems={"center"}>
                    <Grid2 size={4}>
                        <Typography variant="h4" sx={{fontFamily: 'Unna, sans-serif'}}>
                            {application.title}
                        </Typography>
                    </Grid2>

                    <Grid2 size={6}/>

                    <Grid2 size={2}>
                        <Typography variant="h4" sx={{fontFamily: 'Unna, sans-serif'}}>
                            {application.status}
                        </Typography>
                    </Grid2>
                </Grid2>

            </CardContent>
        </Card>
    )
}