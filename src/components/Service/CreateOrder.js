import React, { Component } from 'react';
import Service_CreateOrder from './CreateOrder/Service-CreateOrder';
import Service_Sidebar from './Service-Sidebar';
import { Route } from 'react-router-dom';
import Service_CreateOrder_Modal from './CreateOrder/Service-CreateOrder-Modal';
import Header2 from '../Header/Header2';
import Footer from '../Footer/Footer';


class CreateOrder extends Component {
  render() {
    return (

      <div >
        <Header2/>
        <div className="row profile">
          <div className="col-md-3" >
            <Service_Sidebar />
          </div>

          <div className="col-md-9" >
            <Service_CreateOrder/>
            <Service_CreateOrder_Modal/>

         
          </div>
        </div>
        <Footer/>

      </div>


    );
  }
}

export default CreateOrder;
