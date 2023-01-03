import React, { Component }  from 'react';
import './Home.css';
import bg from './homebg.webp'

function Home() {
  return(
    <article className='article'>
        <img className='background-image' src={bg} alt="background" />

        <h1 className="home-heading">E Square</h1>
        <p className="home-content">
         Since opening in 2000, E-Square Enterprise has been proud to serve the San Francisco community. We’re committed to not only providing quality products and services, but going above and beyond to ensure our customers are completely satisfied. We welcome you to look through our site to see all we have to offer.
     </p>
     <button className='home-button'>Get Started</button>
    <button className='home-button'>Contact Us</button>
    </article>);
//   <div id="Home">
//     <h1 className="home-heading">E Square</h1>
//     <img src={bg} alt="" />
//     <p className="home-content">
//         Since opening in 2000, E-Square Enterprise has been proud to serve the San Francisco community. We’re committed to not only providing quality products and services, but going above and beyond to ensure our customers are completely satisfied. We welcome you to look through our site to see all we have to offer.
//     </p>
//     <button className='home-button'>Get Started</button>
//     <button className='home-button'>Contact Us</button>
//   </div>);
}

export default Home;
