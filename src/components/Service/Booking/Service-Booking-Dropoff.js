import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Service-Booking-Dropoff.css';
import axios from 'axios'

class Service_Booking_Dropoff extends Component {

constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isLoading: true,
      isToggleOn: false,
      data:[],
      datapost: {},
      token : JSON.parse(localStorage.getItem('Token')),
      email : JSON.parse(localStorage.getItem('Email')),
      trackingresult:{trackno: "-"},
      locationdropoff: {}

    }
    this.handleClick = this.handleClick.bind(this)
    // this.getTracking = this.getTracking.bind(this)
    this.postdropinformation = this.postdropinformation.bind(this)
    // this.getTracking()
  }

     handleClick(e) {

        this.state.locationdropoff[e.target.name] = e.target.value
        this.setState(
            this.state

        )
    }

postdropinformation() {
    axios({

                          method:'put',
                          url:`http://localhost:3002/booking/dropoff`,
                        data: {
                            userinfo: this.state.locationdropoff
                          },
                            headers: { Authorization: this.state.token }
                        })
                          .then((response)=> {
                            
                        //   this.setState ({ data: response.data })
                        //   localStorage.setItem('OrderId', JSON.stringify(this.state.data.OrderId));
                        //   localStorage.setItem('PriceLogistic', JSON.stringify(this.state.data.PriceLogistic));
                        //    console.log(this.state.Basicprofile[0].Firstname)
                          //  console.log(this.state.Basicprofile)
                        })
                          .then(()=> {
                        //   console.log(this.state.data);
                        });
}

  render() {
    console.log(this.state.locationdropoff)
    return (

      <div className="childofbooking">


        <div className="row bs-wizard " id="pginchildofbooking" >

          <div className="col-xs-2 bs-wizard-step active">
            <div className="text-center bs-wizard-stepnum">Step 1</div>
            <div className="progress"><div className="progress-bar"></div></div>
            <a href="#" className="bs-wizard-dot"></a>
            <div className="bs-wizard-info text-center">Choose Dropoff</div>
          </div>


          <div className="col-xs-2 bs-wizard-step disabled">
            <div className="text-center bs-wizard-stepnum">Step 2</div>
            <div className="progress"><div className="progress-bar"></div></div>
            <a href="#" className="bs-wizard-dot"></a>
            <div className="bs-wizard-info text-center">Check Information</div>
          </div>

          <div className="col-xs-2 bs-wizard-step disabled">
            <div className="text-center bs-wizard-stepnum">Step 3</div>
            <div className="progress"><div className="progress-bar"></div></div>
            <a href="#" className="bs-wizard-dot"></a>
            <div className="bs-wizard-info text-center">Payment</div>
          </div>

          <div className="col-xs-2 bs-wizard-step disabled">
            <div className="text-center bs-wizard-stepnum">Step 4</div>
            <div className="progress"><div className="progress-bar"></div></div>
            <a href="#" className="bs-wizard-dot"></a>
            <div className="bs-wizard-info text-center">Complete</div>
          </div>

        </div>

        <center>
          <h3 id="Dropoff-choosedropofftxt">Choose Dropoff </h3>
          <div className="input-group" id="dropoffsearchbar">
            <input type="text" className="form-control" placeholder="address..." name="trackno" />


            <span className="input-group-btn">
              <button className="btn btn-default" type="Submit"  >Search</button>
              {/*<button className="btn btn-default" type="Submit" onClick={this.getTracking}>get</button>*/}
            </span>

          </div>

                             <div className="list-group" id="dropoff-locationlist">
                              <button name="location" value={"Bangyai"} className="list-group-item" onClick={this.handleClick}>Joeyable Bangyai</button>
                              <button name="location" value={"RamaII"} className="list-group-item" onClick={this.handleClick}>Joeyable RamaII</button>
                              <button name="location" value={"Salaya"} className="list-group-item" onClick={this.handleClick}>Joeyable Salaya</button>
                              <button name="location" value={"Thonglor"} className="list-group-item" onClick={this.handleClick}>Joeyable Thonglor</button>
                              <button name="location" value={"Krungton"} className="list-group-item" onClick={this.handleClick}>Joeyable Krungton</button>
                            </div>
                            
                          

        </center>

                                                                                                                   {/* href="/Service-Booking-Checkinfo"                                                                  */}
        <a type="button" className="btn purple-background white glyphicon glyphicon-arrow-right" id="service-createorder-importfilebut" aria-hidden="true" href="/Service-Booking-Checkinfo" onClick={this.postdropinformation} >   NEXT</a>




      </div>




    );
  }
}

export default Service_Booking_Dropoff;
