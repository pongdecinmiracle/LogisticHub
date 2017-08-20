import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Service-CreateOrder-Logistic.css';
import axios from 'axios';


class Service_CreateOrder_Logistic extends Component {

     constructor(props) {
    super(props);
    this.state = {

    OrderId: 60,
    getres: {},
    token : JSON.parse(localStorage.getItem('Token')),
    orderId : JSON.parse(localStorage.getItem('OrderId')),
    priceLogistic : JSON.parse(localStorage.getItem('PriceLogistic')),
    selectedlogistic: {}

    }
    
       
        this.handleClick = this.handleClick.bind(this)
      this.postUserinformation = this.postUserinformation.bind(this)

 }



     handleClick(e) {

        this.state.selectedlogistic[e.target.name] = e.target.value
        this.setState(
            this.state

        )
    }

postUserinformation() {
    axios({

                          method:'put',
                          url:`http://localhost:3002/logistic/${this.state.orderId}`,
                          // url:`http://localhost:3002/logistic/`,
                          data: {
                            userinfo: {
                              orderId: this.state.orderId,
                              priceLogistic: this.state.priceLogistic,
                              logistic: this.state.selectedlogistic,

                            },
                          },
                            headers: { Authorization: this.state.token }
                        })
                          .then((response)=> {
                          console.log(response.data)

                        //    console.log(this.state.Basicprofile[0].Firstname)
                          //  console.log(this.state.Basicprofile)
                        });
}

    render() {

        console.log(this.state.selectedlogistic)
        return (

            <div className="childofbooking">


                <div className="row bs-wizard " id="pginchildofbooking" >   
                    <h3> Logistic Service </h3>

                         <div className="container" id="booking-chooselogistic-table">

                      {/*https://bootsnipp.com/snippets/featured/mobile-friendly-api-documentation*/}
       
                      <div className="method">
                          <div className="row margin-0 list-header hidden-sm hidden-xs">
                              <div className="col-md-6"><div className="header">Logistic</div></div>
                              <div className="col-md-3"><div className="header">Price</div></div>
                              <div className="col-md-3"><div className="header">-</div></div>
                              
                          </div>
                        </div>
                     
                      

                      

                          
                        <div className="method">

                          <div className="row margin-0">

                              <div className="col-md-6">
                                  <div className="cell">
                                      <div className="">
                                          Thailand Post (EMS) <span className="mobile-isrequired"></span>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="type">
                                      {this.state.priceLogistic.ThaipostEMS} Bath
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="isrequired">
                                           <button type="button" className="btn purple-background white active" data-toggle="modal" data-target="#CreateOrder-ChooseReAddressmodal" name="logistic" value={"ThaipostEMS"} onClick={this.handleClick} >Choose</button>
                                      </div>
                                  </div>
                              </div>

                              
                          </div>

                         

                          
                          <div className="row margin-0">

                              <div className="col-md-6">
                                  <div className="cell">
                                      <div className="">
                                          Thailand Post (Register) <span className="mobile-isrequired"></span>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="type">
                                      {this.state.priceLogistic.Thaipost} Bath
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="isrequired">
                                           <button type="button" className="btn purple-background white active" data-toggle="modal" data-target="#CreateOrder-ChooseReAddressmodal" name="logistic" value={"Thaipost"} onClick={this.handleClick}>Choose</button>
                                      </div>
                                  </div>
                              </div>

                              
                          </div>

                          <div className="row margin-0">

                              <div className="col-md-6">
                                  <div className="cell">
                                      <div className="">
                                          Kerry Express <span className="mobile-isrequired"></span>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="type">
                                      {this.state.priceLogistic.Kerry} Bath
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="isrequired">
                                           <button type="button" className="btn purple-background white active" data-toggle="modal" data-target="#CreateOrder-ChooseReAddressmodal" name="logistic" value={"Kerry"} onClick={this.handleClick}>Choose</button>
                                      </div>
                                  </div>
                              </div>

                              
                          </div>

                          <div className="row margin-0">

                              <div className="col-md-6">
                                  <div className="cell">
                                      <div className="">
                                          DHL Express <span className="mobile-isrequired"></span>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="type">
                                      {this.state.priceLogistic.dhl} Bath
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="isrequired">
                                           <button type="button" className="btn purple-background white active" data-toggle="modal" data-target="#CreateOrder-ChooseReAddressmodal" name="logistic" value={"dhl"} onClick={this.handleClick}>Choose</button>
                                      </div>
                                  </div>
                              </div>

                              
                          </div>

                          <div className="row margin-0">

                              <div className="col-md-6">
                                  <div className="cell">
                                      <div className="">
                                          Fedex Express <span className="mobile-isrequired"></span>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="type">
                                      {this.state.priceLogistic.FedEx} Bath
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="isrequired">
                                           <button type="button" className="btn purple-background white active" data-toggle="modal" data-target="#CreateOrder-ChooseReAddressmodal" name="logistic" value={"FedEx"} onClick={this.handleClick}>Choose</button>
                                      </div>
                                  </div>
                              </div>

                              
                          </div>

                          <div className="row margin-0">

                              <div className="col-md-6">
                                  <div className="cell">
                                      <div className="">
                                          Sendit Express <span className="mobile-isrequired"></span>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="type">
                                      {this.state.priceLogistic.Sendit} Bath
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="isrequired">
                                           <button type="button" className="btn purple-background white active" data-toggle="modal" data-target="#CreateOrder-ChooseReAddressmodal" name="logistic" value={"Sendit"} onClick={this.handleClick}>Choose</button>
                                      </div>
                                  </div>
                              </div>

                              
                          </div>

                        
                    </div>
                    <a type="button" className="btn purple-background white "id="CLogistic-Back-button" href="/service-createorder" >Back</a>
                     <a type="button" className="btn purple-background white "id="CLogistic-Save-button" href="/service-dashboard-paid" onClick={this.postUserinformation}>Save</a>
                     
                  </div>






                </div>




            </div>




        );
    }
}

export default Service_CreateOrder_Logistic ;
