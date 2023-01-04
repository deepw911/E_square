import React, { Component }  from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'
import Gallery from './components/Gallery/Gallery'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
  <div>
    <Header/>
     <Home/>
    <Services/>
    <Gallery/>
    <Footer/>
  </div>);
}

export default App;
