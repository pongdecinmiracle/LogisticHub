import React, { Component } from 'react';
import axios from 'axios';
import './Service-CreateOrder-Modal.css'

class Service_CreateOrder_Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      getres: {},
      token: JSON.parse(localStorage.getItem('Token')),
      Email: JSON.parse(localStorage.getItem('Email')),
      userinformation: {},
      receiverinfo: {}

    }
    this.getaddress()
      this.handleChange = this.handleChange.bind(this)
    // this.postUserinformation = this.postUserinformation.bind(this)
    //  this.setname = this.setname.bind(this)
    //    this.getTracking = this.getTracking.bind(this)
  }

  getaddress() {
    axios({

      method: 'get',
      url: `http://localhost:3002/information/addr/${this.state.Email}`,
      data: {
        userinfo: this.state.userinformation
      },
      headers: { Authorization: this.state.token }
    })
      .then((response) => {
        this.setState({ data: response.data })
      })
      .then(() => {
        //   console.log("pass get")
        // console.log(this.state.data)
      });
  }


  handleChange(e) {

      console.log(e.target.value)
        // this.state.receiverinfo.name = e.target.value
        // this.state.receiverinfo.sirname = e.target.value[1]
        this.state.receiverinfo = e.target.value

        this.setState(
            this.state

        )
          localStorage.setItem('CO_info', JSON.stringify(this.state.receiverinfo));
          window.location="http://localhost:3000/service-createorder"

          
    }


  render() {



    return (



      <div>

        <div id="CreateOrder-ChooseSeAddressmodal" className="modal fade" role="dialog">
          <div className="modal-dialog">


            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Choose Sender Address</h4>
              </div>
              <div className="modal-body">

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>

          </div>
        </div>



        <div id="CreateOrder-ChooseReAddressmodal" className="modal fade" role="dialog">
          <div className="modal-dialog">


            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Choose Receiver Address</h4>
              </div>
              <div className="modal-body">
              



                  <div className="cell">
                   {this.state.data.map((each) =>(
                    <div id="eachreceiveraddr"> 
                      <h4>Name: {each.Firstname_r} {each.Lastname_r}</h4>
                      <h4>Address: {each.Address_r}</h4>
                      <button type="button" className="btn btn-default btn-block" id="choosereceiveraddbutton" onClick={this.handleChange} value={each.Address_r} >Choose</button>

                    </div>
                    ))} 
                   

                  
                  
                  
                </div>
               
                 

                 
                   
                  
                
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>

          </div>
        </div>
      </div>

    );
  };
};


export default Service_CreateOrder_Modal;


