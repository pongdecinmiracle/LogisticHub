import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Promotion from './Promotion/Promotion';
import Footer from './Footer/Footer';
import Header from './Header/Header';



class Promotion_Route extends Component {
  render() {
    return (

      <div >
        <Header/>
        <Promotion/>
        <Footer/>
        


      </div>


    );
  }
}

export default Promotion_Route;
