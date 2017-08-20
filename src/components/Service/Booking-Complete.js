import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Service_Sidebar from './Service-Sidebar';

import Service_Booking_Complete from './Booking/Service-Booking-Complete';
import Header2 from '../Header/Header2';
import Footer from '../Footer/Footer';


class Booking_Complete extends Component {
  render() {
    return (

      <div >
        <Header2/>
        <div className="row profile">
          <div className="col-md-3" >
            <Service_Sidebar />
          </div>

          <div className="col-md-9" >
            <Service_Booking_Complete />    
         
          </div>
        </div>
        <Footer/>

      </div>


    );
  }
}

export default Booking_Complete;
