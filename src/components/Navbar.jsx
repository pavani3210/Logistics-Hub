import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    divhead:{
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        padding: '10px 20px',
        borderBottom:"solid 1px #ccc"
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
        <div className={classes.divhead}>
            <nav className={classes.navbar}>
                <div className={classes.logo}>
                    <img src="logonew.avif" alt="Shipwise solutions" className="logo-image" />
                </div>
                <nav className="navigation">
                    <ul>
                        <li><a href="/homepage">Home</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Service Providers</a></li>
                        <li><a href="/">Coverage</a></li>
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </nav>
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
            <div className="search-bar" style={{width:"400px"}}>
                <input type="text" placeholder="Search for services..." className="search-input" />
                <button className="search-button">Search</button>
            </div>
        </div>
    );
};

export default Navbar;
