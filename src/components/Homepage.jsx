import React from 'react';
import { makeStyles } from '@mui/styles';
import { useEffect } from 'react';
import { useState } from 'react';
import '../css/Homepage.css';
import Navbar from './Navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Directions, UpdateTwoTone } from '@mui/icons-material';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
  img:{
    height: "400px",
    width: "100%",
  },
  button:{
    width: "500px",
    height:" 150px",
  },
  selectedButton: {
    width: "500px",
    height:" 150px",
    border : "2px solid black",
  },
  div:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    gap:"20px",
    padding:"20px",
  },
  text:{
    width:"758px",
    border:"solid",
    borderRadius:"15px",
    textAlign:"center",
    padding:"0px 50px"
  },
  textLabel:{
    display:"flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
  },
});

const Homepage = () => {
  const [delivery,setdelivery]  = useState('');
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         // Enable automatic sliding
    autoplaySpeed: 2000,  
  };

  const updateDelivery = (service) => {
    setdelivery(service);
  }
  
  return (
    <div className="App">
      
      <Navbar/>
      <main>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img className={classes.img} src="banner01.jpg" alt="Image 1" />
            </div>
            <div>
              <img className={classes.img} src="banner02.jpg" alt="Image 2" />
            </div>
            <div>
              <img className={classes.img} src="banner03.jpg" alt="Image 3" />
            </div>
            {/* Add more image divs as needed */}
          </Slider>
        </div>

        <div>
            <h2>Welcome to the Logistics and Shipping Hub!</h2>
            <p style={{textAlign:"end",padding:"10px 50px 20px 50px",}}>Are you in need of reliable shipping and delivery services? Look no further! Our platform is your gateway to a world of logistics solutions, connecting you with the most trusted service providers and providing vital information on coverage areas and more. Whether you're a business seeking efficient supply chain management or an individual looking to send a package, we've got you covered.</p>
          </div>

        <div className="container">
          <section className="services-highlights">
          <button className={delivery==='Express'?classes.selectedButton:classes.button} onClick={() => updateDelivery('Express')}>
              <div className="service-card">
                <h2>Express Shipping</h2>
                <p>Fast and reliable delivery solutions.</p>
              </div>
            </button>
            <button className={delivery==='International'?classes.selectedButton:classes.button} onClick={() => updateDelivery('International')}>
              <div className="service-card">
                <h2>International Logistics</h2>
                <p>Efficient global shipping services.</p>
              </div>
            </button>
          </section>

          { delivery &&
            <section className="search-and-book" style={{display:"flex",flexDirection:"column"}}>
            <div className="search-box" style={{display:"flex", flexDirection:"row"}}>
              <div>
                <div className={classes.div}>
                  <Typography style={{width:"130px",}}>From:</Typography>
                  <input type="text" placeholder="From" className="search-input" border="0.5px solid balck"/>
                </div>
                <div className={classes.div}>
                  <Typography>Package Type:</Typography>
                  <input type="text" placeholder="Package Type" className="search-input" />
                </div>
              </div>
              <div>
                <div className={classes.div}>
                  <Typography style={{width:"130px",}}>To:</Typography>
                  <input type="text" placeholder="To" className="search-input" border="0.5px solid balck"/>
                </div>
                <div className={classes.div}>
                  <Typography>Service Type:</Typography>
                  <input type="text" placeholder="Service Type" className="search-input" />
                </div>
              </div>
              <button className="search-button">Search</button>
            </div>
            </section>
          }
          {/* <section className="search-and-book">
            <div className="featured-destinations">
              <p>Featured Destinations: New York, London, Tokyo,...</p>
            </div>
          </section> */}

          <div className="service-providers">
            <h2>Serice Providers</h2>
            <div style={{display: "flex", flexDirection: "row", padding: "20px 20px 20px 20px", gap: "30px", }}>
              <div><img src="usps.svg"/> </div>
              <div><img src="ups.svg"/> </div>
              <div><img src="fedex.svg"/> </div>
              <div><img src="dhl.svg"/> </div>
              <div><img src="cdl.svg"/> </div>
            </div>
          </div>
        </div>

        <section className="logistics-hub-content">
        
          <div className="features">
            <div value="feature" className={classes.textLabel}>
              <h3>Search for Shipping and Delivery Services</h3>
              <div className={classes.text}>
                <p style={{textAlign:"center", padding:"0px 50px 0px 50px",}}>Need to send a package across the country or even overseas? Our search feature allows you to explore a wide range of shipping and delivery services. From express couriers to international freight, you can find the perfect option for your needs.</p>
              </div>
            </div>
            <div value="feature" className={classes.textLabel}>
              <h3>Find Reliable Service Providers</h3>
              <div className={classes.text}>
                <p style={{textAlign:"center", padding:"0px 50px 0px 50px",}}>We understand that trust is paramount when it comes to shipping. That's why we've curated a list of dependable service providers, each vetted for their track record of reliability and customer satisfaction. Rest assured that your goods are in safe hands.</p>
              </div>  
            </div>
            <div className={classes.textLabel} value="feature">
              <h3>Explore Coverage Areas</h3>
              <div className={classes.text}>
                <p>No matter where you are or where your package needs to go, our coverage area information will guide you. Easily locate service providers that operate in specific regions, whether it's in your city, across the country, or even globally.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className={classes.textLabel} value="AboutUs">
            <h3>About Us</h3>
            <div className={classes.text}>
              <p>Shipwise Solutions is a leading logistics and shipping hub that connects you with seamless shipping and delivery solutions around the world.</p>
              <p>Our mission is to provide efficient and reliable logistics services that enable businesses and individuals to transport goods with ease, speed, and security. With a vast network of service providers and extensive coverage areas, we ensure your packages reach their destination on time, every time.</p>
              <p>At Shipwise Solutions, we are committed to excellence, safety, and customer satisfaction. We leverage cutting-edge technology and a team of dedicated professionals to meet your shipping and delivery needs.</p>
              <p>Join us in the journey to simplify logistics, improve supply chains, and enable global trade. We look forward to serving you and being your trusted logistics partner.</p>
            </div>
          </div>
          <div className="links">
            <h3>Quick Links</h3>
            <ul style={{  listStyleType: "none", display:"flex", flexDirection:"row", gap:"15px",justifyContent:"center"}}>
              <li><a href="#privacy-policy">Privacy Policy</a></li>
              <li><a href="#terms-of-service">Terms of Service</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="social-media">
            <h3>Follow Us</h3>
            <div style={{  listStyleType: "none", display:"flex", flexDirection:"row", gap:"15px",justifyContent:"center"}}>
              <a href="#facebook">Facebook</a>
              <a href="#twitter">Twitter</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </div>
          <div className="newsletter-signup">
            <h3>Subscribe to Our Newsletter</h3>
            <input type="email" placeholder="Your Email" className="newsletter-input" />
            <button className="newsletter-button">Subscribe</button>
          </div>

          
        </footer>
      </main>
    </div>
  );
};

export default Homepage;
