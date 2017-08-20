import React, { Component } from 'react';


import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home_Route from './components/Home';
import Home_Route2 from './components/Home2';
import Register_Route from './components/Register';
import Promotion_Route from './components/Promotion';
import Payment_Route from './components/Payment';
import Tracking_Route from './components/Tracking';
import Login from './components/Login/Login';
import Dashboard from './components/Service/Dashboard';
import DHistory from './components/Service/History';
import ReceiverAddress from './components/Service/ReceiverAddress';
import Tracking from './components/Service/Tracking';
import CreateOrder from './components/Service/CreateOrder';
import Dashboard_Paid from './components/Service/Dashboard-Paid';
import Dashboard_Prepare from './components/Service/Dashboard-Prepare';
import Dashboard_Shipping from './components/Service/Dashboard-Shipping';
import Dashboard_Complete from './components/Service/Dashboard-Complete';
import Booking_Dropoff from './components/Service/Booking-Dropoff';
import Booking_Checkinfo from './components/Service/Booking-Checkinfo';
import Booking_Payment from './components/Service/Booking-Payment';
import Booking_Complete from './components/Service/Booking-Complete';
import CreateOrder_Logistic from './components/Service/CreateOrder-Logistic';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'






class App extends Component {




  render() {



    return (

      <div >




        <Route exact={true} path="/" component={Home_Route} />


        <Route path="/Home-Member" component={Home_Route2} />
        <Route path="/Register" component={Register_Route} />
        <Route path="/promotion" component={Promotion_Route} />
        <Route path="/Service" component={Dashboard} />
        <Route path="/Service-History" component={DHistory} />
        <Route path="/Payment" component={Payment_Route} />
        <Route path="/Service-ReceiverAddress" component={ReceiverAddress} />
        <Route path="/Tracking" component={Tracking_Route} />
        {/* this ^ is second tracking page  */}
        <Route path="/Service-Tracking" component={Tracking} />
        <Route path="/Service-CreateOrder" component={CreateOrder} />
        <Route path="/Service-Dashboard-Paid" component={Dashboard_Paid} />
        <Route path="/Service-Dashboard-Prepare" component={Dashboard_Prepare} />
        <Route path="/Service-Dashboard-Shipping" component={Dashboard_Shipping} />
        <Route path="/Service-Dashboard-Complete" component={Dashboard_Complete} />
        <Route path="/Service-Booking-Dropoff" component={Booking_Dropoff} />
        <Route path="/Service-Booking-Checkinfo" component={Booking_Checkinfo} />
        <Route path="/Service-Booking-Payment" component={Booking_Payment} />
        <Route path="/Service-Booking-Complete" component={Booking_Complete} />
        <Route path="/Service-CreateOrder-Logistic" component={CreateOrder_Logistic} />
        <Route path="/Login" component={Login} />

       

        







      </div>


    );
  }
}

export default App;

