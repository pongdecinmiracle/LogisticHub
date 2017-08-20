import React, { Component } from 'react';
import './Header2.css';
import LogoImg from '../../pic/logotop.png';
import Login from '../Login/Login';
import { Link } from 'react-router-dom';





class Header2 extends Component {

  constructor(props) {
    super(props);
    this.state = {


      token: localStorage.getItem('Token'),
      user : JSON.parse(localStorage.getItem('Firstname')),
       datapost: {trackno: "" },

    

    }
    

    this.Logout = this.Logout.bind(this)
        this.handleChange = this.handleChange.bind(this)
      this.retotrackingpage = this.retotrackingpage.bind(this)
  }


  Logout() {

    localStorage.clear();


    window.location = "http://localhost:3000/";


  }
    handleChange(e) {

        this.state.datapost[e.target.name] = e.target.value
        // this.state.datapost[e.target.name.this.state.p] = e.target.value
        this.setState(
            this.state

        )
          console.log(this.state.datapost)
				
		}
			
		retotrackingpage(){
       localStorage.setItem('Trackingfromhome', JSON.stringify(this.state.datapost.trackno));
        
				window.location="http://localhost:3000/Tracking"
			
		}



  render() {


    return (



      <div className="row" id="allaboutheader">
        <Login />
        <nav className="navbar navbar-default " id="header-background">
          <div className="container-fluid">

            <div className="col-md-3">


              <img alt="Brand" src={LogoImg} id="header-logo" />



            </div>

            <div className="col-md-9">

              <div id="header-top">

                <ul className="nav nav-tabs" >

                  <div className="pull-right">
                    <ul className="nav pull-right">
                      
                      <li className="dropdown"><a href="#" id="membersys" className="dropdown-toggle" data-toggle="dropdown" className="foractive">Welcome, {this.state.user} <b className="caret"></b></a>
                        <ul className="dropdown-menu">
                          <li><a href="/user/preferences"><i className="icon-cog"></i> Preferences</a></li>
                          <li><a href="/help/support"><i className="icon-envelope"></i> Contact Support</a></li>
                          <li className="divider"></li>
                          <li onClick={this.Logout}><a><i className="icon-off"> </i> Logout</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  
                  <div className="form-group" >
                    <input type="text" className="form-control" id="header-search2" placeholder="Tracking No." name="trackno" value={this.state.datapost.trackno} onChange={this.handleChange}/>
                  </div>
                   <button type="submit" className="btn btn-default" id="header-search-button2" onClick={this.retotrackingpage} >Search</button> 
                


                </ul>

              </div>

              <div id="header-bottom-2">
                <ul className="nav nav-pills nav-justified">
                  <li role="presentation" >
                    <a href="/home-member" className="foractive">HOME</a>

                  </li>
                  <li role="presentation">
                    <a href="/service" className="foractive">SERVICE</a>
                  </li>
                  <li role="presentation">
                    <a href="/promotion" className="foractive">PROMOTION</a>
                  </li>
                  <li role="presentation">
                     <a className="foractive" href="/Payment">PAYMENT</a>
                </li>
                <li role="presentation">
                  <a className="foractive" href="/Tracking">TRACKING</a>
                  </li>
                </ul>
              </div>

              {/* <hr id="horizonline"/> */}

            </div>

            {/* <hr id="horizonline"/> */}

          </div>

          <hr id="horizonline" />
        </nav>


      </div>


    );
  };
};

export default Header2;
