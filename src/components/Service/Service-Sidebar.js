import React, { Component } from 'react';
import './Service-Sidebar.css';
import LogoCat from '../../pic/cat.jpg';



class Service_Sidebar  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Firstname : JSON.parse(localStorage.getItem('Firstname')),
      Lastname : JSON.parse(localStorage.getItem('Lastname'))

    }



      // this.handleChange = this.handleChange.bind(this)
      // this.postTracking = this.postTracking.bind(this)
      // this.togglepls = this.togglepls.bind(this);

  }

  render() {

  return (



    <div className="profile-sidebar">

      <div className="profile-userpic">
        <img src={LogoCat} className="img-responsive" alt="" />
      </div>

      <div className="profile-usertitle">
        <div className="profile-usertitle-name">
          {this.state.Firstname} {this.state.Lastname}
        </div>
        <div className="profile-usertitle-job">
          Developer
                    </div>
      </div>

      <div className="profile-userbuttons">
        <a type="button" className="btn btn-success btn-sm" href="/service-Createorder" >Create Order</a>
        <a type="button" className="btn btn-danger btn-sm">Notification</a>
      </div>

      <div className="profile-usermenu">
        <ul className="nav">
          <li className="active">
            <a href="/service">
              <i className="glyphicon glyphicon-home"></i>
              Dashboard </a>
          </li>
          
          <li>
            <a href="/service-tracking">
              <i className="glyphicon glyphicon-plane"></i>
              Tracking</a>
          </li>
          <li>
            <a href="/service-history">
            {/* target="_blank" */}
              <i className="glyphicon glyphicon-list-alt"></i>
              Delivery History
             </a>
          </li>
          <li>
            <a href="/Service-ReceiverAddress">
              <i className="glyphicon glyphicon-user"></i>
             Receiver Address </a>
          </li>
        </ul>
      </div>


    </div>



    );

  };
};


export default Service_Sidebar;   