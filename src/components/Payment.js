import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Payment from './Payment/Payment';
import Footer from './Footer/Footer';
import Header from './Header/Header';



class Payment_Route extends Component {
  render() {
    return (

      <div >
        <Header/>
        <Payment/>
        <Footer/>
        


      </div>


    );
  }
}

export default Payment_Route;
