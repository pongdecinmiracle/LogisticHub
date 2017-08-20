import React, { Component } from 'react';
import './Payment.css';
import LogoImg from '../../pic/omise-logo.svg';


class Payment extends Component {

    constructor(props) {
        super(props);
        this.state = {


            isToggleOn: false,

            datapost: {},

        }

    }





    render() {


        return (
            <div className="payment-page" >

                <div className="col-md-1">









                </div>
                <div className="col-md-10">

                    <center> <h2>PAYMENT CHANNEL </h2> </center>
                    <hr />
                    <div className="col-md-5">
                        <img alt="Brand" src={LogoImg} id="omise-logo" />
                    </div>

                    <div className="col-md-7" id="omiseExplain">

                        <div className="col-md-1" id="omiseExplain">
                        </div>


                        <div className="col-md-10" id="omiseExplain">
                            Omise is a payment gateway for Southeast Asia, based in Thailand, providing a secure and white label solution to merchants and enterprise businesses.
                              </div>

                        <div className="col-md-1" id="omiseExplain">
                        </div>


                    </div>
                    
                     <hr />








                </div>
                <div className="col-md-1">









                </div>

            </div>

        );
    };
};


export default Payment;
