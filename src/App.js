import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Footer from './components/Footer/Footer';
import Service from './components/Services/Services'
// import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services/Services';

function App() {
  return(
  <div>
    <Header/>
    <Home/>
    <div style={{backgroundColor:"#ffff", paddingTop:"15px"}}>
      <h4 style={{color: "white", fontSize: "3rem",lineHeight:"12.5rem", fontWeight:"bold", textAlign:'center'}}>Our Services</h4>
      <Services/>
    </div>
    
    <Contact/> 
    <Footer/> 
  </div>
  );
}

export default App;
