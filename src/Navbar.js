import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import LogoDevRoundedIcon from '@mui/icons-material/LogoDevRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { makeStyles } from '@mui/styles';
// import './App.css';

const useStyles = makeStyles({
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#fff',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        borderBottom:"solid 1px #ccc"
    },
    logo: {
        color: '#000',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none',
        },
    },
    profile: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
            color: '#0077ff',
        },
    },
    dropdown: {
        position: 'absolute',
        top: '50px',
        right: '0',
        backgroundColor: '#fff',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '10px',
        minWidth: '100px',
        zIndex: '1',
        '& a': {
            display: 'block',
            color: '#000',
            textDecoration: 'none',
            padding: '5px 10px',
            '&:hover': {
                backgroundColor: '#f5f5f5',
            },
        },
    },
});

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const classes = useStyles();

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <nav className={classes.navbar}>
            <div className={classes.logo}>
                <Link to="/">
                    <LogoDevRoundedIcon />
                </Link>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div className={classes.profile}>
                    <SettingsRoundedIcon />
                </div>
                <div className={classes.profile}>
                    <FaceRoundedIcon onClick={handleDropdown} />
                    {showDropdown && (
                        <div className={classes.dropdown}>
                            <Link to="/profile">Profile</Link>
                            <Link to="/billing">Billing</Link>
                            <Link to="/plan">Plan</Link>
                            <Link to="/shipping">Shipping</Link>
                            <Link to="/logout">Logout</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
