import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Service-Booking-Complete.css';
import Logo from '../../../pic/checkinfopack.png';


class Service_Booking_Complete extends Component {
    render() {
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

                    <div className="col-xs-2 bs-wizard-step complete">
                        <div className="text-center bs-wizard-stepnum">Step 3</div>
                        <div className="progress"><div className="progress-bar"></div></div>
                        <a href="#" className="bs-wizard-dot"></a>
                        <div className="bs-wizard-info text-center">Payment</div>
                    </div>

                    <div className="col-xs-2 bs-wizard-step active">
                        <div className="text-center bs-wizard-stepnum">Step 4</div>
                        <div className="progress"><div className="progress-bar"></div></div>
                        <a href="#" className="bs-wizard-dot"></a>
                        <div className="bs-wizard-info text-center">Complete</div>
                    </div>

                </div>
                
                <div className="col-md-5">
                     <img id="img-package" src={Logo} />
                    </div>
                    <div className="col-md-7">

                        <h2 id="header-payment"> Your Payment has been complete </h2>
                        <div className="thaitext">
                        <p> ยินดีด้วย การจ่ายเงินของคุณ สำเร็จแล้ว ! </p>
                        <p> คุณสามารถติดตามสถานะการจัดส่งได้ที่หน้า Dashboard </p>
                        </div>
                        <a type="button" className="btn purple-background white" id="dashboard" href="/service" >DASHBOARD</a>
                    </div>

               






            </div>




        );
    }
}

export default Service_Booking_Complete;
