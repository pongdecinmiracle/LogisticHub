import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Register from './Register/Register';
import Footer from './Footer/Footer';
import Header from './Header/Header';



class Register_Route extends Component {
  render() {
    return (

      <div >
        <Header/>
        <Register/>
        <Footer/>
        


      </div>


    );
  }
}

export default Register_Route;
