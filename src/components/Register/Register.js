import React , {Component } from 'react';
import './Register.css';
import axios from 'axios'



class Register extends Component {

 constructor(props) {
    super(props);
    this.state = {


      isToggleOn: false,

      datapost: {},

    }
        this.handleChange = this.handleChange.bind(this)
      this.postTracking = this.postTracking.bind(this)
      this.togglepls = this.togglepls.bind(this)
 }
 

    handleChange(e) {

        this.state.datapost[e.target.name] = e.target.value
        this.setState(
            this.state
        )
    }


    postTracking() {
      console.log(this.state.datapost)
        const { refreshData } = this.props
        this.togglepls()
        axios.post('http://localhost:3002/register', this.state.datapost)
            .then((res) => {
                console.log(res)
            }).then(() => {
                // refreshData()
               // this.setState({data: {}})
               
            })
    }


    togglepls() {

    this.setState({
      isToggleOn : !this.state.isToggleOn
    })
  }



render() {


    return (
<div className="register">


                            <div className="row">
                            <div className="container" id="register-container">
                            <div className="page-header">
                           

                                     <div className="panel panel-default">
                                    <div className="panel-body">
                                       <h1>Register </h1>
                                       <hr/>
                                      <div className="col-md-8">
                                          
                                          <form className="form-horizontal" id="register-form">
                                          <div className="form-group">
                                            <label className="control-label col-sm-3 " for="email">Email:</label>
                                            <div className="col-sm-8">
                                              <input type="Email" className="form-control" id="email" placeholder="Enter email" name="Email" value={this.state.datapost.name} onChange={this.handleChange}/>
                                            </div>
                                          </div>
                                          <div className="form-group">
                                            <label className="control-label col-sm-3" for="pwd">Password:</label>
                                            <div className="col-sm-8"> 
                                              <input type="Password" className="form-control" id="pwd" placeholder="Enter password" name="Pass" value={this.state.datapost.password} onChange={this.handleChange}/>
                                            </div>
                                          </div>

                                           <div className="form-group">
                                            <label className="control-label col-sm-3" for="confpwd">Confirm Password:</label>
                                            <div className="col-sm-8"> 
                                              <input type="Password" className="form-control" id="pwd" placeholder="Confirm Password" name="confirmpassword" value={this.state.datapost.confirmpassword} onChange={this.handleChange}/>
                                            </div>
                                          </div>

                                           <div className="form-group">
                                            <label className="control-label col-sm-3" for="firstname">First Name:</label>
                                            <div className="col-sm-8"> 
                                              <input type="First Name" className="form-control" id="pwd" placeholder="First Name" name="Firstname" value={this.state.datapost.firstname} onChange={this.handleChange}/>
                                            </div>
                                          </div>
                                          
                                          <div className="form-group">
                                            <label className="control-label col-sm-3" for="lastname">Last Name:</label>
                                            <div className="col-sm-8"> 
                                              <input type="Last Name" className="form-control" id="pwd" placeholder="Last Name" name="Lastname" value={this.state.datapost.lastname} onChange={this.handleChange}/>
                                            </div>
                                          </div>

                                          <div className="form-group">
                                            <label className="control-label col-sm-3" for="phonenum">Phone Number:</label>
                                            <div className="col-sm-8"> 
                                              <input type="Phone Number" className="form-control" id="pwd" placeholder="Phone Number" name="tel" value={this.state.datapost.phoneno} onChange={this.handleChange}/>
                                            </div>
                                          </div>

                                          <button type="button" className="btn btn-primary" id="register-button" onClick={this.postTracking}  data-toggle="modal" data-target="#registersuccess" >Register</button>


                                          
                                        </form>

                                      
                                      </div>


                                      <div className="col-md-4">

                                        
                                          
                                        <input className="btn btn-lg btn-facebook btn-block" type="submit" value="Login via facebook"/>



                                        </div>






                                    </div>
                                  </div>




                          </div>
                          </div>
                          </div>

                          <div id="registersuccess" className="modal fade" role="dialog">
  <div className="modal-dialog">


    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">Registerr</h4>
      </div>
      <div className="modal-body">
        <center>
            your register has been complete
            <a href="/">
            <button type="button" className="btn btn-success" >Success</button>
            </a>
            </center>
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


export default Register;
