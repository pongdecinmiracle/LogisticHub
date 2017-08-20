import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Service-Dashboard-Paid.css';
import axios from 'axios'
import _ from 'lodash';

class Service_Dashboard_Paid extends Component {
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
      
      selectedid: {}

    }
    this.handleClick = this.handleClick.bind(this)
    this.getTracking = this.getTracking.bind(this)
    this.checkRemove = this.checkRemove.bind(this)
    this.checkDrop = this.checkDrop.bind(this)
    this.postDeleteinformation = this.postDeleteinformation.bind(this)
    this.postdropinformation = this.postdropinformation.bind(this)
    this.getTracking()
  }

getTracking() {
    axios.get(`http://localhost:3002/booking/${this.state.email}`)
      .then((response) => {

          this.setState({ data: response.data.Data })
      }).then(() => {

                console.log(this.state.data)

      })
  }

checkPrice() {
            // console.log(this.state.checkPrice)
        
        if ( this.state.priceLogistic === null ){
             window.location="http://localhost:3000/service-Createorder"
        }else {
             window.location="http://localhost:3000/Service-Booking-Dropoff"
            
        }
       
    }

checkRemove(){
    window.location="http://localhost:3000/service-dashboard-paid"
}

checkDrop(){
    window.location="http://localhost:3000/Service-Booking-Dropoff"
}


handleClick(e) {

        this.state.selectedid[e.target.name] += " "+e.target.value
        this.setState(
            this.state

        )
        
    }

postdropinformation() {
    axios({

                          method:'put',
                          url:`http://localhost:3002/booking/prepare`,
                        data: {
                            userinfo: this.state.selectedid
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
                        this.checkDrop()
                        //   console.log(this.state.data);
                        });
}

postDeleteinformation() {
    axios({

                          method:'put',
                          url:'http://localhost:3002/booking/delete',
                          data: {
                            userinfo: this.state.selectedid
                          },
                            headers: { Authorization: this.state.token }
                        })
                        //   .then((response)=> {
                        // //   this.setState ({ data: response.data })
                        // //   localStorage.setItem('OrderId', JSON.stringify(this.state.data.OrderId));
                        // //   localStorage.setItem('PriceLogistic', JSON.stringify(this.state.data.PriceLogistic));
                        // //    console.log(this.state.Basicprofile[0].Firstname)
                        // //    console.log("1")
                        // })
                          .then(()=> {
                        this.checkRemove()
                        // console.log("2")
                        });
}

  render() {
      console.log(this.state.selectedid)
// this.getTracking()
    return (

      <div >
           {/* {this.getTracking()}  */}
                      <div className="row" id="service-dashboard-row">

                    <div className="col-md-11">
                <div className="page-header">
                <h1>Prepare Order</h1>
                </div>

                <button type="button" className="btn purple-background white glyphicon glyphicon-folder-open " id="service-booking-button-top-1" aria-hidden="true">   CreateOrder</button>
                <button type="button" className="btn purple-background white glyphicon glyphicon-folder-open " id="service-booking-button-top-2" aria-hidden="true">   ImportOrder</button>





                    <div className="input-group">
                    <center>
                    <input type="text" className="form-control" id="service-booking-search" placeholder="Search for..."/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" id="service-booking-searchb" type="button"> Search </button>
                    </span>
                    </center>
                    </div>


                                    < div id="fourrowbutton">

                                    <button type="button" className="btn purple-background white"  id="fourbuttonrow-1">   Choose all</button>
                                    {/* <button type="button" className="btn btn-default"  id="fourbuttonrow-2" href="/Service-Booking-Dropoff" onclick={this.postDeleteinformation}>   Remove</button> */}
                                    <a type="button" className="btn btn-default"  id="fourbuttonrow-2"  href="/service-dashboard-paid" onClick={this.postDeleteinformation}>Remove</a>
                                    <a type="button" className="btn purple-background white"  id="fourbuttonrow-3" href="/Service-Booking-Dropoff" onClick={this.postdropinformation}>   Pay All</a>
                                    <nav aria-label="..." id="fourbuttonrow-4">
                                        <ul className="pager">
                                            <li><a href="#"> back </a></li>
                                            <li><a href="#"> next </a></li>
                                        </ul>
                                    </nav>


                                    </div>



                                    {/*Tracking-detial 1 */}






                  <div id="testnaja">

                            {/*https://bootsnipp.com/snippets/featured/mobile-friendly-api-documentation*/}

                            <div className="method">
                                <div className="row margin-0 list-header hidden-sm hidden-xs">
                                    <div className="col-md-1"><div className="header" id="header-prepare">#</div></div>
                                    <div className="col-md-1"><div className="header" id="header-prepare">Order Id</div></div>
                                    <div className="col-md-2"><div className="header" id="header-prepare">Recipient's Name</div></div>
                                    <div className="col-md-2"><div className="header" id="header-prepare">Address</div></div>
                                    
                                     <div className="col-md-2"><div className="header" id="header-prepare">Date</div></div> 
                                    <div className="col-md-1"><div className="header" id="header-prepare">Logistic</div></div>
                                     <div className="col-md-2"><div className="header" id="header-prepare">Payment</div></div> 
                                    <div className="col-md-1"><div className="header" id="header-prepare">-</div></div>
                                </div>
                            </div>





                              {this.state.data.map((each) =>(  
                            <div className="method">
                                <div className="row margin-0">
                                    <div className="col-md-1" >
                                        <div className="cell" >

                                            <div className="prepare-checkbox">
                                            <label><input type="checkbox" name="OrderId" value={each._id} onClick={this.handleClick} /></label>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-md-1">
                                        <div className="cell">
                                            <div className="prepare-trackingcode">
                                                 {each._id} 
                                      </div>
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <div className="cell">
                                            <div className="prepare-Recipient">
                                                {each.Firstname_r}
                                      </div>
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <div className="cell">
                                            <div className="prepare-address">
                                                {each.Address_r}
                                      </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-1">
                                        <div className="cell">
                                            <div className="prepare-postcode">
                                                10140
                                      </div>
                                        </div>
                                    </div> */}

                                    <div className="col-md-2">
                                        <div className="cell">
                                            <div className="prepare-date">
                                                {each.reg_time}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-1">
                                        <div className="cell">
                                            <div className="prepare-logistic">
                                                {each.Logistic}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <div className="cell">
                                            <div className="prepare-dropoff">                                                                          
                                                                                                                             {/* href="/service-booking-dropoff" */}
                                                <a  type="button" className="btn purple-background white" id="paid-paynow" name="OrderId" value={each._id} href="/Service-Booking-Dropoff" onclick={this.postdropinformation}  >Pay now</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-1">
                                        <div className="cell">
                                            <div className="isrequired">
                                                                                                                            {/* href="/Service-Createorder/edit" tell joey*/}
                                                <button type="button" className="btn btn-default btn-block" id="paid-paynow" name="OrderId" value={each._id}  id="paid-paynow" >EDIT</button>


                                            </div>
                                        </div>
                                    </div>


                                </div>


                            </div>
                          ))}  

                        </div>





              {/*End Tracking-detial 1 */}






                </div>
                </div>



      </div>


        );
    
  }
}

export default Service_Dashboard_Paid ;
