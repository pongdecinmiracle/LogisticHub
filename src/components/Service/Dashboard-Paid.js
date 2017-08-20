import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Service_Sidebar from './Service-Sidebar';

import Service_Dashboard_Paid from './Dashboard/Service-Dashboard-Paid';
import Header2 from '../Header/Header2';
import Footer from '../Footer/Footer';


class Dashboard_Paid extends Component {
  render() {
    return (

      <div >
        <Header2/>
        <div className="row profile">
          <div className="col-md-3" >
            <Service_Sidebar />
          </div>

          <div className="col-md-9" >
            <Service_Dashboard_Paid />    
         
          </div>
        </div>
        <Footer/>

      </div>


    );
  }
}

export default Dashboard_Paid;
