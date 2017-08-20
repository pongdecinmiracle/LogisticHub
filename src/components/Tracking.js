import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Tracking from './Tracking/Tracking';
import Footer from './Footer/Footer';
import Header from './Header/Header';



class Tracking_Route extends Component {
  render() {
    return (

      <div >
        <Header/>
        <Tracking/>
        <Footer/>
        


      </div>


    );
  }
}

export default Tracking_Route;
