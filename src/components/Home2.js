import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home2 from './Home/Home';
import Footer from './Footer/Footer';
import Header2 from './Header/Header2';




class Home_Route2 extends Component {
  render() {
    return (

      <div >
        <Header2/>
        <Home2/>
        <Footer/>
        


      </div>


    );
  }
}

export default Home_Route2;
