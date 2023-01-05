import React, { Component } from "react";
import "./Home.css";
import background from "./websitebackground.jpg";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <article id="home" className="article">
      <picture className="picture">
        <source media="(min-width: 0px)" srcSet={background} />
        <img className="image" src={background} alt="background" />
      </picture>
      <div className="header">
        <h1 className="home-heading" style={{ color: "white", fontSize: "10rem",lineHeight:"12.5rem", fontWeight:"bold"  }}>
          E-Square
        </h1>
        <p className="home-content" style={{ color: "white" }}>
          Since opening in 2000, E-Square Enterprise has been proud to serve the
          San Francisco community. We’re committed to not only providing quality
          products and services, but going above and beyond to ensure our
          customers are completely satisfied. We welcome you to look through our
          site to see all we have to offer.
        </p>
        <Button href="#" variant="dark">
          Get Started
        </Button>{" "}
        <Button href="#contact" variant="outline-light">
          Contact Us
        </Button>
      </div>
    </article>
  );
}

export default Home;

{
  /* <article id="home" className='article' >
<picture>
<img className='background-image' src={background} alt="background" />
</picture>
<h1 className="home-heading">E Square</h1>
<p className="home-content">
 Since opening in 2000, E-Square Enterprise has been proud to serve the San Francisco community. We’re committed to not only providing quality products and services, but going above and beyond to ensure our customers are completely satisfied. We welcome you to look through our site to see all we have to offer.
</p>
<Button href="#" variant="dark">Get Started</Button>{' '}
<Button href="#contact" variant="outline-dark">Contact Us</Button>
</article> */
}
