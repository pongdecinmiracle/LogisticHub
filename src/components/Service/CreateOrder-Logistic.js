import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Service_Sidebar from './Service-Sidebar';

import Service_CreateOrder_Logistic from './CreateOrder/Service-CreateOrder-Logistic';
import Header2 from '../Header/Header2';
import Footer from '../Footer/Footer';


class CreateOrder_Logistic extends Component {
  render() {
    return (

      <div >
        <Header2/>
        <div className="row profile">
          <div className="col-md-3" >
            <Service_Sidebar />
          </div>

          <div className="col-md-9" >
            {/*<Service_Booking>*/}
            <Service_CreateOrder_Logistic />

         
          </div>
        </div>
        <Footer/>

      </div>


    );
  }
}

export default CreateOrder_Logistic;
