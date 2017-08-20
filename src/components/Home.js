import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Header from './Header/Header';



class Home_Route extends Component {
  render() {
    return (

      <div >
        <Header/>
        <Home/>
        <Footer/>
        


      </div>


    );
  }
}

export default Home_Route;
