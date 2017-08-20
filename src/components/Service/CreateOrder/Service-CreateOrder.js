import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Service-CreateOrder.css';
import Service_CreatOrder_Modal from './Service-CreateOrder-Modal.js';
import axios from 'axios';



class Service_CreateOrder extends Component {

 constructor(props) {
    super(props);
    this.state = {
    data:[],
    getres: {},
    token : JSON.parse(localStorage.getItem('Token')),
    userinformation: {},
    CO_info: JSON.parse(localStorage.getItem('CO_info'))

    }

        this.handleChange = this.handleChange.bind(this)
         this.handleChange2 = this.handleChange2.bind(this)
         this.handleChange3 = this.handleChange3.bind(this)
      this.postUserinformation = this.postUserinformation.bind(this)
       this.testifitwork = this.testifitwork.bind(this)
       {this.handleChange3()}

      
  
 }
      checkPrice() {
            // console.log(this.state.checkPrice)
        
        if ( this.state.priceLogistic === null ){
             window.location="http://localhost:3000/service-Createorder"
        }else {
             window.location="http://localhost:3000/Service-CreateOrder-Logistic"
            
        }
       
    }


  handleChange(e) {
     
        
        this.state.userinformation[e.target.name] = e.target.value
        this.setState(
            this.state

        )
         
    }

handleChange2(e) {
        this.state.CO_info= e.target.value
   
        this.setState(
            this.state

        )
          localStorage.setItem('CO_info', JSON.stringify(this.state.CO_info));

          this.state.userinformation.receiveaddress = this.state.CO_info
          this.setState(
            this.state

        )      


    }

    handleChange3(e) {
       

          this.state.userinformation.receiveaddress = this.state.CO_info
          this.setState(
            this.state

        )      
    }


  


    testifitwork(){
      
      console.log(this.state.userinformation)
    }

    


    
    //  postUserinformation() {

    //   //  this.setState({ trackingresult : window.location.pathname })

    //     // const { refreshData } = this.props
    //     // this.togglepls()
    // // console.log(this.state.token)
    //     axios.post('http://localhost:3002/trackno', this.state.userinformation)
    //         .then((res) => {
    //  //           console.log(res)
    //               this.setState({ getres: res.data })
    //         }).then(() => {
    //             // refreshData()
    //               // {this.bringfirstdata()}
    //               // console.log(this.state.token)

    //         })
    // }
postUserinformation() {
    axios({

                          method:'post',
                          url:'http://localhost:3002/order',
                          data: {
                            userinfo: this.state.userinformation
                          },
                            headers: { Authorization: this.state.token }
                        })
                          .then((response)=> {
                          this.setState ({ data: response.data })
                          localStorage.setItem('OrderId', JSON.stringify(this.state.data.OrderId));
                          localStorage.setItem('PriceLogistic', JSON.stringify(this.state.data.PriceLogistic));
                        //    console.log(this.state.Basicprofile[0].Firstname)
                          //  console.log(this.state.Basicprofile)
                        })
                          .then(()=> {
                          console.log(this.state.data);
                          localStorage.setItem('CO_info', JSON.stringify(""));
                          this.checkPrice()
                        });
}



  render() {
    console.log(this.state.userinformation)
    // console.log(this.state.token)
    return (

      <div >



                 <div className="row" id="service-dashboard-row">

                    <div className="col-md-11">

                <h1>Create Order <small>Fill information in the box</small></h1>


                 <button type="button" className="btn purple-background white glyphicon glyphicon-folder-open " id="service-createorder-importfilebut" aria-hidden="true">   ImportOrder</button>


                 <div className="CreateOrder-Component1">
                 <h3 id="Service-CreateOrder-miniheader">Parcel</h3>
                 <hr/>

                 <div>
                          <form className="form-horizontal" id="register-form">
                                          <div className="form-group">
                                            <label className="control-label col-sm-3 " for="email">Weight:</label>
                                            <div className="col-sm-8">
                                                  <select className="form-control gramform" name="weight" value={this.state.userinformation.name} onChange={this.handleChange}>
                                                    <option>None</option>
                                                    <option>100-250 gram</option>
                                                    <option>251-500 gram</option>
                                                    <option>501-750 gram</option>
                                                    <option>751-1000 gram</option>
                                                  </select>
                                            </div>
                                          </div>

                                          <div className="form-group">
                                            <label className="control-label col-sm-3" for="pwd">Box Size:</label>
                                            <div className="col-sm-8">
                                                <select className="form-control gramform" name="boxsize" value={this.state.userinformation.name} onChange={this.handleChange}>
                                                  <option>None</option>
                                                  <option>BOX 1 (10X10X10 cm)</option>
                                                  <option>BOX 2 (20X20X20 cm)</option>
                                                  <option>BOX 3 (30X30X30 cm)</option>
                                                  <option>BOX 4 (40X40X40 cm)</option>
                                                  <option>BOX 5 (50X50X50 cm)</option>
                                           </select>
                                            </div>
                                          </div>


                            </form>
                  </div>


                  </div>

                          <div className="CreateOrder-Component1">
                               <h3 id="Service-CreateOrder-miniheader">Sender</h3>
                            <hr/>


                          <form className="form-horizontal" id="register-form">
                                          <div className="form-group">
                                            <label className="control-label col-sm-3 " for="email">Name:</label>
                                            <div className="col-sm-6">
                                                  <input type="Email" className="form-control" id="email" placeholder="Enter Name" name="sendername" value={this.state.userinformation.name} onChange={this.handleChange} />
                                            </div>
                                            <div className="col-sm-3">
                                                  {/* <button type="button" className="btn purple-background white active" data-toggle="modal" data-target="#CreateOrder-ChooseSeAddressmodal">Choose Address</button> */}
                                            </div>


                                          </div>

                                          <div className="form-group">
                                            <label className="control-label col-sm-3" for="pwd">Address:</label>
                                            <div className="col-sm-8">
                                                <input type="Email" className="form-control" id="createorder-address" placeholder="" name="senderaddress" value={this.state.userinformation.name} onChange={this.handleChange}/>
                                            </div>
                                          </div>


                            </form>


                           </div>



                          <div className="CreateOrder-Component3">
                               <h3 id="Service-CreateOrder-miniheader">Reciever</h3>
                            <hr/>


                          <form className="form-horizontal" id="register-form">
                                          <div className="form-group">
                                            <label className="control-label col-sm-3 " for="email">Name:</label>
                                            <div className="col-sm-6">
                                                  <input type="Email" className="form-control" id="email" placeholder="Enter Name" name="receivename" value={this.state.userinformation.name} onChange={this.handleChange} />
                                            </div>
                                            <div className="col-sm-3">
                                                  <button type="button" className="btn purple-background white active" data-toggle="modal" data-target="#CreateOrder-ChooseReAddressmodal" >Choose Address</button>




                                            </div>


                                          </div>

                                          <div className="form-group">
                                            <label className="control-label col-sm-3" for="pwd">Address:</label>
                                            <div className="col-sm-8">
                                                <input type="Email" className="form-control" id="createorder-address" placeholder="" name="receiveaddress" value={this.state.CO_info} onChange={this.handleChange2} />
                                            </div>
                                          </div>


                            </form>


                           </div>


                          <div className = "container">
                            <center>
                           <a type="button" className="btn btn-default " id="CreateOrder-SavenAddmore-buttton" onClick={this.testifitwork} >Save and Add more</a>
                            <a type="button" className="btn purple-background white "id="CreateOrder-Save-button" href="/Service-CreateOrder-Logistic"  onClick={this.postUserinformation}>Save</a> 



                           </center>
                          </div>


                </div>

                </div>




      </div>


    );
  }
}

export default Service_CreateOrder;
