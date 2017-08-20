import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Service-Dashboard-Paid.css';
import axios from 'axios'

class Service_Dashboard_Shipping extends Component {
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
    
    this.postdropinformation()
  }

  postdropinformation() {
    axios({

                          method:'post',
                          url:'http://localhost:3002/booking/shipping',
                        data: {
                            userinfo: this.state.selectedid
                          },
                            headers: { Authorization: this.state.token }
                        })
                          .then((response)=> {
                          this.setState ({ data: response.data.data })
                        
                        })
                          .then(()=> {
                        // this.checkDrop()
                          console.log(this.state.data);
                        });
}  
    render() {
    return (

      <div >
          
              <div className="row" id="service-dashboard-row">
                
                    <div className="col-md-11">
                <div className="page-header">
                <h1>Shipping Order</h1>
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
                                    <button type="button" className="btn btn-default"  id="fourbuttonrow-2">   Remove</button>
                                    <button type="button" className="btn purple-background white"  id="fourbuttonrow-3">   Pay All</button>

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
                                    <div className="col-md-1"><div className="header" id="header-prepare">Ref No</div></div>
                                    <div className="col-md-1"><div className="header" id="header-prepare">Track No</div></div>
                                    <div className="col-md-2"><div className="header" id="header-prepare">Recipient's Name</div></div>
                                    <div className="col-md-2"><div className="header" id="header-prepare">Address</div></div>
                                    {/* <div className="col-md-1"><div className="header" id="header-prepare">Postcode</div></div> */}
                                    <div className="col-md-1"><div className="header" id="header-prepare">Date</div></div>
                                    <div className="col-md-1"><div className="header" id="header-prepare">Logistic</div></div>
                                    <div className="col-md-2"><div className="header" id="header-prepare">Dropoff</div></div>
                                    <div className="col-md-1"><div className="header" id="header-prepare">Tracking</div></div>
                                </div>
                            </div>






                            {this.state.data.map((each) =>(
                            <div className="method">
                                <div className="row margin-0">

                                    <div className="col-md-1" >
                                        <div className="cell" >

                                            <div className="prepare-checkbox">
                                            <label><input type="checkbox" value="" /></label>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-md-1">
                                        <div className="cell">
                                            <div className="prepare-trackingcode">
                                                Trackno
                                      </div>
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <div className="cell">
                                            <div className="prepare-Recipient">
                                                {each.Firstname_r} {each.Lastname_r}
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

                                    <div className="col-md-1">
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
                                                {each.Drop_location}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-1">
                                        <div className="cell">
                                            <div className="isrequired">
                                                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
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

export default Service_Dashboard_Shipping ;

      
 