import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Service_Sidebar from './Service-Sidebar';

import Service_Booking_Payment from './Booking/Service-Booking-Payment';
import Header2 from '../Header/Header2';
import Footer from '../Footer/Footer';


class Booking_Payment extends Component {
  render() {
    return (

      <div >
        <Header2/>
        <div className="row profile">
          <div className="col-md-3" >
            <Service_Sidebar />
          </div>

          <div className="col-md-9" >
            <Service_Booking_Payment />    
         
          </div>
        </div>
        <Footer/>

      </div>


    );
  }
}

export default Booking_Payment;
