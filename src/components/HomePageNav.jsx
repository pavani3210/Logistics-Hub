import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

const useStyles = makeStyles({
    navbar: {
        display: 'flex',
        alignItems: 'center',
    },

    logo: {
        color: '#000',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none',
        },
    },
    divhead:{
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        padding: '10px 20px',
        borderBottom:"solid 1px #ccc"
    },
    button:{
        border:"none",
        background:"none",
        fontSize:"medium",
    },
});

const HomePageNav = () => {
    const classes = useStyles();
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
    
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };

    return (
        <div className={classes.divhead}>
            <nav className={classes.navbar}>
                <div className={classes.logo}>
                    <img src="logonew.avif" alt="Shipwise solutions" className="logo-image" />
                </div>
                <nav className="navigation" style={{marginLeft:"350px"}}>
                    <ul>
                        <li><button className={classes.button} href="homepage">
                        <Link to="/homepage" style={{color:"black", fontSize:"medium"}}>Home</Link></button></li>
                        <li><button className={classes.button} onClick={() => scrollToSection('services-highlights')}>Services</button></li>
                        <li><button className={classes.button} onClick={() => scrollToSection('service-providers')}>Service Providers</button></li>
                        <li><button className={classes.button} onClick={() => scrollToSection('logistics-hub-content')}>Coverage</button></li>
                        {/* <li><a href="/">Pricing</a></li> */}
                        <li><button className={classes.button} onClick={() => scrollToSection('about-us')}>About US</button></li>
                    </ul>
                </nav>
                <div style={{marginLeft:"300px",}}>
                    <Button className={classes.button}  style={{color:"black"}}href="/login">Login</Button>
                    <Button className={classes.button}  style={{color:"black"}}href="/Signup">Signup</Button>
                </div>
            </nav>
        </div>
    );
};

export default HomePageNav;
