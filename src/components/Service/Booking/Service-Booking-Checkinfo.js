import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Service-Booking-Checkinfo.css';
import axios from 'axios'
// import LogoDHL from '../../../pic/checkinfopack.png';


class Service_Booking_Checkinfo extends Component {
    constructor(props) {
    super(props);
    this.state = {
      data:[],
      datapost: {},
      token : JSON.parse(localStorage.getItem('Token')),
      email : JSON.parse(localStorage.getItem('Email')),
      total : 0,
      orderId : []
    
    }
    
    this.postUserinformation()
  }

// getTracking() {
//     axios.get(`http://localhost:3002/booking/${this.state.email}`)
//       .then((response) => {

//           this.setState({ data: response.data.Data })
//       }).then(() => {

//                 console.log(this.state.data)

//       })
//   }

postUserinformation() {
    axios({

                          method:'post',
                          url:`http://localhost:3002/booking/showinfo`,
                          // url:`http://localhost:3002/logistic/`,
                          data: {
                            userinfo: {
                              // orderId: this.state.orderId,
                              // priceLogistic: this.state.priceLogistic,
                              // logistic: this.state.selectedlogistic,

                            },
                          },
                            headers: { Authorization: this.state.token }
                        })
                          .then((response)=> {
                            this.setState({ data : response.data.data })
                            this.setState({ length : response.data.length })
                            // this.setState({ orderId : response.data.data })
                          // console.log(response.data)
                        }).then(()=>{
                          this.sum()
                          console.log(this.state.data)
                          localStorage.setItem('Price', JSON.stringify(this.state.total));
                          
                          // console.log(this.state.length)
                        })
}
// saveinfo() {
//     axios({

//                           method:'post',
//                           url:`http://localhost:3002/booking/save`,
//                           // url:`http://localhost:3002/logistic/`,
//                           data: {
//                             userinfo: {
//                               orderId: this.state.orderId,
//                               price: this.state.total
//                             },
//                           },
//                             headers: { Authorization: this.state.token }
//                         })
//                           .then((response)=> {
//                             // this.setState({ data : response.data.data })
//                             // this.setState({ length : response.data.length })

//                           // console.log(response.data)
//                         }).then(()=>{
//                           localStorage.setItem('Price', JSON.stringify(this.state.data.total));
//                           this.paymentpage()
//                           // console.log(this.state.data)
//                           // console.log(this.state.length)
//                         })
// }  

paymentpage(){
  window.location="http://localhost:3000/service-booking-payment"
}

  sum(){
    var test = 0
    var order = []
    for(var i=0;i<this.state.length;i++){
      test += this.state.data[i].Price
      // this.state.total = this.state.total + parseFloat(this.state.data[i].price)
    }
    this.setState({ total : test })
    // console.log(this.state.total)
    //=======================================
    for(var i=0;i<this.state.length;i++){
      order += this.state.data[i]._id + " "
      // console.log(this.state.data[i]._id)
  }
    this.setState({ orderId : order })
    // console.log(order)
    
    
  }

  render() {
    // console.log(this.state.orderId)
    return (

      <div className="childofbooking">

        <div className="childofbooking">


          <div className="row bs-wizard " id="pginchildofbooking" >

            <div className="col-xs-2 bs-wizard-step complete">
              <div className="text-center bs-wizard-stepnum">Step 1</div>
              <div className="progress"><div className="progress-bar"></div></div>
              <a href="#" className="bs-wizard-dot"></a>
              <div className="bs-wizard-info text-center">Choose Dropoff</div>
            </div>


            <div className="col-xs-2 bs-wizard-step active">
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
            <h3 id="Service-CreateOrder-miniheader">Parcel</h3>
            <hr />


          </center>
           {this.state.data.map((each) =>(   
          <div className="list-group" id="checkinfoform">
            
             <div className="list-group-item">TRACKNO : {each._id} </div> 
             <div className="list-group-item">Receiver : {each.Firstname_r} {each.Lastname_r} </div> 
             <div className="list-group-item">Address : {each.Address_r} </div> 
             {/* <li className="list-group-item">TRACKNO : 1523212 Address : 117/33 Prachatutit 44 10140</li>  */}
          </div>
           ))} 
          {/*<div className="row" id="Body-logistic-logo">
            <div className="container">
              <div className="col-xs-6 col-md-2">
                <a href="#" className="thumbnail">
                  <img id="img-circle" src={Logo} />
                  test
                </a>
              </div>

              <div className="col-xs-6 col-md-2">
                <a href="#" className="thumbnail">
                  <img id="img-circle" src={Logo} />
                </a>
              </div>

              <div className="col-xs-6 col-md-2">
                <a href="#" className="thumbnail">
                  <img id="img-circle" src={Logo} />
                </a>
              </div>
            </div>
          </div>*/}

          <h3 id="Service-CreateOrder-miniheader">Summary</h3>
          <hr />
       
        <ul className="list-group row" id="price-superhead">
            <li className="list-group-item" id="price-head">Price</li>
          </ul>

        
          <div className="col-md-3">
         
          </div>
         {this.state.data.map((each) =>( 
          <div className="col-md-6">
            
            <div className="col-md-9">
               {each.Logistic} TRACKNO : {each._id} 
            
            </div>


            
            <div className="col-md-3">
               {each.Price} BATH 
            </div>

        </div>
             ))}  
        
        <div className="col-md-6">
              Total : {this.state.total} Bath
            </div>



          
          <div className="col-md-3">
        
          </div>

            

       

          <a type="button" className="btn purple-background white glyphicon glyphicon-arrow-right" id="service-createorder-importfilebut" aria-hidden="true" onClick={this.paymentpage}>   NEXT</a>




        </div>






      </div>




    );
  }
}

export default Service_Booking_Checkinfo;
