import {Grid2, Paper, Typography} from "@mui/material";
import {CompanyNavbar} from "./CompanyNavbar";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import {COMPANY_INTERNSHIPS, COMPANY_NEW_INTERNSHIP, COMPANY_PAGE} from "../../utils/URLconstants";
import Storage from "../../utils/Storage";
import background from "../../assets/backgroundRepeatable2.jpg";
import Box from "@mui/material/Box";

const CompanyDashboardCard = ({content, link, disabled}) => {
    const navigate = useNavigate();
    const handleActionClick = () => {
        console.log("clicked" + content)
        navigate(link)
    }

    return (
        <Grid2 size={4}>
            <Button
                variant="contained"
                color="primary"
                disabled={disabled}
                onClick={handleActionClick}
                sx={{
                    margin: '10px',
                    bgcolor: '#2674AB',
                    '&:hover': {bgcolor: '#6883ad'},
                    textTransform: "none",
                    minWidth: '20vw',
                    minHeight: '20vh',
                }}
            >
                <Typography sx={{fontSize:'22px', fontFamily:'Montserrat, sans-serif'}}>
                    {content}
                </Typography>

            </Button>
        </Grid2>
    )
}


export const CompanyDashboardPage = () => {
    const id = Storage.getUserId();
    return (
        <Box sx={{
            height: '100vh',
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'repeat'
        }}>
            <Grid2 container
                   direction="row"
                   sx={{
                       justifyContent: "center",
                       alignItems: "center",
                       marginBottom: "10vh",
                   }}
            >
                <CompanyNavbar/>
            </Grid2>
            <br/>

            <Grid2
                container
                direction="row"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",

                }}
            >
                <Paper elevation={2} style={{
                    maxWidth: '65vw',
                    backgroundColor: 'rgba(219, 219, 219, 0.85)',
                    borderRadius: '15px',
                    width: '100%',
                }}
                >
                    <Grid2 container sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "20px",
                    }}>
                        <CompanyDashboardCard content="Ongoing Internships" link={COMPANY_INTERNSHIPS}/>
                        <CompanyDashboardCard content="Add New Internship" link={COMPANY_NEW_INTERNSHIP}/>
                        <CompanyDashboardCard content="Company Page" link={COMPANY_PAGE(id)}/>
                        <CompanyDashboardCard content="Company Account" disabled={true}/>
                        <CompanyDashboardCard content="Archived Internships" disabled={true}/>
                    </Grid2>
                </Paper>
            </Grid2>
        </Box>
    )
}