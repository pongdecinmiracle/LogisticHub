import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Script from 'react-load-script'
import './Service-ReceiverAddress.css';
import axios from 'axios'; 
// import Calendar from './calendar'
// import './Service-Booking-Checkinfo.css';
// import LogoDHL from '../../../pic/checkinfopack.png';


class Service_History extends Component {

 constructor(props) {
    super(props);
    this.state = {
    data:[],
    getres: {},
    token : JSON.parse(localStorage.getItem('Token')),
    userinformation: {},
    useraddr:{}

    }
    this.requestinformation()
    this.handleChange = this.handleChange.bind(this)
      this.postUserinformation = this.postUserinformation.bind(this)
      this.setname = this.setname.bind(this)
      
      //  this.togglepls = this.togglepls.bind(this)

 }

 postUserinformation() {
    axios({

                          method:'post',
                          url:'http://localhost:3002/information/add',
                          data: {
                            userinfo: this.state.userinformation
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
                            //   console.log("pass post")
                              this.backview()
                        //   console.log(this.state.data);
                        });
}

requestinformation() {
    axios({

                          method:'post',
                          url:'http://localhost:3002/information/addr',
                          data: {
                            userinfo: this.state.userinformation
                          },
                            headers: { Authorization: this.state.token }
                        })
                          .then((response)=> {
                        this.setState({ data: response.data })
                        })
                          .then(()=> {
                            //   console.log("pass get")
                              console.log(this.state.data)
                        });
}

deleteaddr() {
    axios({

                          method:'put',
                          url:'http://localhost:3002/information/useraddr',
                          data: {
                            userinfo: this.state.useraddr
                          },
                            headers: { Authorization: this.state.token }
                        })
                          .then(()=> {
                              this.backview()
                            //   console.log("pass delete")
                            //   console.log(this.state.userinformation)
                        });
}

backview() {
           
             window.location="http://localhost:3000/Service-ReceiverAddress" 
    }

setname(e){
    // console.log(e.target.value)
    this.state.useraddr = e.target.value
    this.setState(this.state)
    // this.setState ({ useraddr : e.target.value })
    // this.setState({useraddr: value})
    // console.log(this.state.useraddr)
    this.deleteaddr()
}

   handleChange(e) {

        this.state.userinformation[e.target.name] = e.target.value
        // this.state.datapost[e.target.name.this.state.p] = e.target.value
        this.setState(
            this.state

        )
    }


    render() {
        // console.log(this.state.userinformation)
        return (

            <div >




                <h2 id="ReceiverAddress-Header">Receiver Address </h2>

                <div className="col-md-8">
                    <div className="form-group">
                        <input type="text" className="form-control" id="ReceiverName" placeholder="Name" name="receivename" value={this.state.userinformation.name} onChange={this.handleChange} />
                        <textarea className="form-control" rows="4" id="ReceiverAddress" placeholder="Address" name="receiveaddress" value={this.state.userinformation.name} onChange={this.handleChange}></textarea>
                    </div>
                </div>

                <div className="col-md-4">
                    <a type="button" className="btn purple-background white" id="ReceiverAddress-AddBut" onClick={this.postUserinformation}>   Add  </a>
                </div>


                

                <div className ="col-md-11" id="ReceiverAddress-Table">

                            {/*https://bootsnipp.com/snippets/featured/mobile-friendly-api-documentation*/}

                            <div className="method">
                                <div className="row margin-0 list-header hidden-sm hidden-xs">
                                    <div className="col-md-4"><div className="header" id="header-prepare">Receiver Name</div></div>
                                    <div className="col-md-6"><div className="header" id="header-prepare">Address</div></div>
                                    <div className="col-md-2"><div className="header" id="header-prepare">-</div></div>
                                    
                                </div>
                            </div>





                         {this.state.data.map((each) =>(  
                            <div className="method">
                                <div className="row margin-0">
                                    <div className="col-md-4" >
                                        <div className="cell" >

                                            <div className="prepare-checkbox" >
                                             {each.Firstname_r} {each.Lastname_r} 
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="cell">
                                            <div className="prepare-trackingcode">
                                            {each.Address_r}
                                      </div>
                                        </div>
                                    </div>

                                    

                                   

                                    <div className="col-md-2">
                                        <div className="cell">
                                            <div className="isrequired">
                                                <button type="button" className="btn btn-default btn-block" id="paid-paynow"name="namedelete" value={each.Firstname_r} onClick={this.setname}  >DELETE</button>


                                            </div>
                                        </div>
                                    </div>


                                </div>


                            </div>
                        
                         ))} 
                        </div>
                        



                










            </div>




        );
    }
}

export default Service_History;
