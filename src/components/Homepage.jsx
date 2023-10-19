import React from 'react';
import '../css/Homepage.css';

import Navbar from './Navbar';
const Homepage = () => {
  return (
    <div className="App">
      
<Navbar/>
      <main>
        <section className="hero">
          <img src="banner01.jpg" alt="Logistics and Shipping" className="hero-image" />
          <h1 className="hero-title">Your One-Stop Logistics Solution</h1>
          <a href="#get-started" className="cta-button">Get Started</a>
        </section>

        <div className="content-wrapper">
            <h2>Welcome to the Logistics and Shipping Hub!</h2>
            <p>Are you in need of reliable shipping and delivery services? Look no further! Our platform is your gateway to a world of logistics solutions, connecting you with the most trusted service providers and providing vital information on coverage areas and more. Whether you're a business seeking efficient supply chain management or an individual looking to send a package, we've got you covered.</p>
          </div>

        <div className="container">
          <section className="services-highlights">
            <div className="service-card">
              <h2>Express Shipping</h2>
              <p>Fast and reliable delivery solutions.</p>
            </div>
            <div className="service-card">
              <h2>International Logistics</h2>
              <p>Efficient global shipping services.</p>
            </div>
          </section>

          <section className="search-and-book">
            <div className="search-box">
              <input type="text" placeholder="From" className="search-input" />
              <input type="text" placeholder="To" className="search-input" />
              <input type="text" placeholder="Package Type" className="search-input" />
              <input type="text" placeholder="Service Type" className="search-input" />
              <button className="search-button">Search</button>
            </div>
            <div className="featured-destinations">
              <p>Featured Destinations: New York, London, Tokyo,...</p>
            </div>
          </section>

          <div className="service-providers">
            <p>DHL</p>
            <p>FedEx</p>
            <p>UPS</p>
            <p>Expeditors</p>
            <p>Maersk Line</p>
          </div>
        </div>
        
        {/* <div className="card" style={{ width: '18rem' }}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>

<div className="card" style={{ width: '18rem' }}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}


        <section className="logistics-hub-content">
        
          <div className="features">
            <div className="feature">
              <h3>Search for Shipping and Delivery Services</h3>
              <p>Need to send a package across the country or even overseas? Our search feature allows you to explore a wide range of shipping and delivery services. From express couriers to international freight, you can find the perfect option for your needs.</p>
            </div>
            <div className="feature">
              <h3>Find Reliable Service Providers</h3>
              <p>We understand that trust is paramount when it comes to shipping. That's why we've curated a list of dependable service providers, each vetted for their track record of reliability and customer satisfaction. Rest assured that your goods are in safe hands.</p>
            </div>
            <div className="feature">
              <h3>Explore Coverage Areas</h3>
              <p>No matter where you are or where your package needs to go, our coverage area information will guide you. Easily locate service providers that operate in specific regions, whether it's in your city, across the country, or even globally.</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="about-us">
            <h3>About Us</h3>
            <p>Shipwise Solutions is a leading logistics and shipping hub that connects you with seamless shipping and delivery solutions around the world.</p>
            <p>Our mission is to provide efficient and reliable logistics services that enable businesses and individuals to transport goods with ease, speed, and security. With a vast network of service providers and extensive coverage areas, we ensure your packages reach their destination on time, every time.</p>
            <p>At Shipwise Solutions, we are committed to excellence, safety, and customer satisfaction. We leverage cutting-edge technology and a team of dedicated professionals to meet your shipping and delivery needs.</p>
            <p>Join us in the journey to simplify logistics, improve supply chains, and enable global trade. We look forward to serving you and being your trusted logistics partner.</p>
          </div>
          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#privacy-policy">Privacy Policy</a></li>
              <li><a href="#terms-of-service">Terms of Service</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="social-media">
            <h3>Follow Us</h3>
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
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
