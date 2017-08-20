import React, { Component } from 'react';
import './Service-Dashboard-Status.css';
import LogoShipping from '../../../pic/shipping.png';
import LogoWaiting from '../../../pic/waiting.png';
import LogoComplete from '../../../pic/complete.png';
import LogoBooking from '../../../pic/booking.png';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios'

const data = [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ];

class Service_Dashboard_Status extends Component {
    
constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isLoading: true,
      isToggleOn: false,
      data:[],
      amount_complete:[],
      amount_waiting:[],
      amount_shipping:[],
      amount_booking:[],
      datapost: {},
      token : JSON.parse(localStorage.getItem('Token')),
      email : JSON.parse(localStorage.getItem('Email')),
      trackingresult:{trackno: "-"},
      selectedid: {}

    }
    
    this.postcomplete()
    this.postshipping()
    this.postwaiting()
    this.postbooking()

    
  }
postcomplete() {
    axios({

                          method:'post',
                          url:'http://localhost:3002/booking/complete',
                        data: {
                            userinfo: this.state.selectedid
                          },
                            headers: { Authorization: this.state.token }
                        })
                          .then((response)=> {
                          this.setState ({ amount_complete: response.data.amount })
                        
                        })
                          .then(()=> {
                        //   console.log(this.state.amount_complete);
                        });
} 

postshipping() {
    axios({

                          method:'post',
                          url:'http://localhost:3002/booking/shipping',
                        data: {
                            userinfo: this.state.selectedid
                          },
                            headers: { Authorization: this.state.token }
                        })
                          .then((response)=> {
                          this.setState ({ amount_shipping: response.data.amount })
                        
                        })
                          .then(()=> {
                        //   console.log(this.state.amount_shipping);
                        });
} 

postwaiting() {
    axios({

                          method:'post',
                          url:'http://localhost:3002/booking/waiting',
                        data: {
                            userinfo: this.state.selectedid
                          },
                            headers: { Authorization: this.state.token }
                        })
                          .then((response)=> {
                          this.setState ({ amount_waiting: response.data.amount })
                        
                        })
                          .then(()=> {
                        //   console.log(this.state.amount_waiting);
                        });
} 

postbooking() {
    axios({

                          method:'get',
                          url:`http://localhost:3002/booking/${this.state.email}`,
                        data: {
                            userinfo: this.state.selectedid
                          },
                            headers: { Authorization: this.state.token }
                        })
                          .then((response)=> {
                          this.setState ({ amount_booking: response.data.amount })
                        
                        })
                          .then(()=> {
                          console.log(this.state.amount_booking);
                        });
} 


    render(){

    return (



        <div className="Service-Dashboard-Status">


            <div className="row" id="service-dashboard-rows">
                <div className="container">

                    <div className="col-md-11">

                        <center><h2> Dashboard </h2></center>

                        <div>
                            <div className="col-md-3 ">
                                <a href="/service-dashboard-paid" class="thumbnail">
                                    <div className="panel panel-default logopadtop" >

                                        <div className="panel-body dashboard-logobooking">

                                            <center id="txtforlogo" > <h3> Booking {this.state.amount_booking}</h3> </center >
                                            
                                            {/*<img src={LogoBooking} id="Service-Dashboard-Status-Logo"/>*/}

                                        </div>

                                    </div>
                                </a>

                            </div>

                            <div className="col-md-3">
                                <a href="/service-dashboard-prepare" class="thumbnail">
                                    <div className="panel panel-default logopadtop">
                                        <div className="panel-body dashboard-logowaiting">
                                            <center id="txtforlogo" > <h3> Waiting {this.state.amount_waiting}</h3> </center >
                                            {/*<img src={LogoWaiting} id="Service-Dashboard-Status-Logo"/>*/}
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-3">
                                <a href="/service-dashboard-shipping" class="thumbnail">
                                    <div className="panel panel-default logopadtop">
                                        <div className="panel-body dashboard-logoshipping">
                                            <center id="txtforlogo" > <h3> Shipping {this.state.amount_shipping}</h3> </center >
                                            {/*<img src={LogoShipping} id="Service-Dashboard-Status-Logo"/>*/}
                                        </div>
                                    </div>

                                </a>
                            </div>

                            <div className="col-md-3">
                                <a href="/service-dashboard-complete" class="thumbnail">
                                    <div className="panel panel-default logopadtop">
                                        <div className="panel-body dashboard-logocomplete">
                                            <center id="txtforlogo" > <h3> Complete {this.state.amount_complete}</h3> </center >
                                            {/*<img src={LogoComplete} id="Service-Dashboard-Status-Logo"/>*/}
                                        </div>
                                    </div>

                                </a>
                            </div>
                        </div>









                    </div>

                </div>

                <div className="panel panel-default" id="service-dashboard-graph">
                    <div className="panel-body">
                        <center>
                            <LineChart width={600} height={300} data={data}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </center>

                    </div>
                </div>


            </div>


        </div>


    );
};
};

export default Service_Dashboard_Status;   
