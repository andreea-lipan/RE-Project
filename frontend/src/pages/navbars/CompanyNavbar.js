import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import {COMPANY_DASHBOARD, HOME, INTERNSHIPS} from "../../utils/URLconstants";

export const CompanyNavbar = () => {

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    }

    const handleLogout = () => {
        localStorage.clear();
        navigate(HOME);
    }

    return (
        <AppBar position="relative" sx={{
            //make it centered
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            //make it sticky
            top: 0,
            //make it 90vh wide in the center
            width: '100vw',

        }}>
            <Toolbar >
                <Button
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                    onClick={() => navigateTo(INTERNSHIPS)}
                >
                    <Typography variant="body1" component="div" sx={{flexGrow: 1}}>
                        Browse Internships
                    </Typography>
                </Button>

                <Button
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                    onClick={() => navigateTo(COMPANY_DASHBOARD)}
                >
                    <Typography variant="body1" component="div" sx={{flexGrow: 1}}>
                        View Company Dashboard
                    </Typography>
                </Button>

                <Button
                    size="large"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                    onClick={handleLogout}
                >
                    <Typography variant="body1" component="div" sx={{flexGrow: 1}}>
                        Log Out
                    </Typography>
                </Button>

            </Toolbar>
        </AppBar>
    );
};
