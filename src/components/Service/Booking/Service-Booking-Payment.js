import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Service-Booking-Dropoff.css';
import axios from 'axios'


class Service_Booking_Payment extends Component {

    constructor(props) {
    super(props);
    this.state = {

    data: {},
    price_order : JSON.parse(localStorage.getItem('Price')),
    pricesummary : "0"
    // price_order : (this.pricesummary)*100
    // pricesummary: 99999

    }
        this.postPrice = this.postPrice.bind(this);
        this.sum()
        // {this.postPrice()}
      
    
 }

    componentWillMount() {
        const script = document.createElement("script");

        script.src = "https://cdn.omise.co/card.js";
        script.async = true;

       

        document.body.appendChild(script);
    }

    postPrice() {
   
        console.log("post to pricesummary to backend")

        axios.post('http://localhost:3002/booking/omise', this.state.pricesummary)
            .then((res) => {
                

                 console.log(res.data)
               this.setState({ data: res.data })   
            }).then(() => {
                console.log(this.state.data)

                })}

    sum(){
        var test = 0
        test = this.state.price_order
        test = test*100
        this.state.pricesummary =  test;
        // console.log(test)
        this.setState(this.state)
        console.log(this.state.pricesummary)
    }

    render() {
        // console.log(this.state.pricesummary)
        return (

            <div className="childofbooking">


                <div className="row bs-wizard " id="pginchildofbooking" >

                    <div className="col-xs-2 bs-wizard-step complete">
                        <div className="text-center bs-wizard-stepnum">Step 1</div>
                        <div className="progress"><div className="progress-bar"></div></div>
                        <a href="#" className="bs-wizard-dot"></a>
                        <div className="bs-wizard-info text-center">Choose Dropoff</div>
                    </div>


                    <div className="col-xs-2 bs-wizard-step complete">
                        <div className="text-center bs-wizard-stepnum">Step 2</div>
                        <div className="progress"><div className="progress-bar"></div></div>
                        <a href="#" className="bs-wizard-dot"></a>
                        <div className="bs-wizard-info text-center">Check Information</div>
                    </div>

                    <div className="col-xs-2 bs-wizard-step active">
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
                    <h3 id="Dropoff-choosedropofftxt"> Payment </h3>
                </center>

                <div className="col-md-2">

                </div>


                <div className="col-md-8">

                    <div className="col-md-6">
                        <center>
                        <p> Track No :  </p>
                        </center>
                        <hr/>
                    </div>

                    <div className="col-md-6">
                        <center>
                        <p> {this.state.price_order} </p>
                        </center>
                        <hr/>

                    </div>

                    <hr/>


<center>
    <form name="checkoutForm" method="post" action="http://localhost:3002/booking/omise">
       <input type="hidden" name="description" value={"Product order "+this.state.pricesummary} />
    <input type="hidden" name="amount" value={this.state.pricesummary} />
    <script type="text/javascript"
      data-key="pkey_test_58ogpp3cvoe2bi0k2xm"
      data-frame-label="Joeyable Logistic Hub"
      data-button-label="Pay now"
      data-submit-label="Submit"
      data-amount= {this.state.pricesummary}
      data-currency="thb"

      >
    </script>

      </form>


      </center>
                       


                </div>


                <div className="col-md-2">

                </div>



               













            </div>




        );
    }
}

export default Service_Booking_Payment;
