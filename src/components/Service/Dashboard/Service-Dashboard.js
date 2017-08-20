import React, { Component } from 'react';

import Service_Dashboard_Profile from './Service-Dashboard-Profile';
import Service_Dashboard_Status from './Service-Dashboard-Status';


import { Route } from 'react-router-dom';



class Service_Dashboard extends Component {
  render() {
    return (

      <div >
         
        <Service_Dashboard_Profile/>
        <Service_Dashboard_Status/>
        

      </div>


    );
  }
}

export default Service_Dashboard;
