import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {useNavigate} from "react-router-dom";
import {HOME, STUDENT_APPLICATIONS, STUDENT_INTERNSHIPS, STUDENT_PROFILE} from "../../utils/URLconstants";

const pages = ['Products', 'Pricing', 'Blog'];
export const StudentsNavbar = () => {

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
                    onClick={() => navigateTo(STUDENT_INTERNSHIPS)}
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
                    onClick={() => navigateTo(STUDENT_APPLICATIONS)}
                >
                    <Typography variant="body1" component="div" sx={{flexGrow: 1}}>
                        View My Applications
                    </Typography>
                </Button>

                <Button
                    size="large"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                    onClick={() => navigateTo(STUDENT_PROFILE)}
                >
                    <Typography variant="body1" component="div" sx={{flexGrow: 1}}>
                        Profile
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
