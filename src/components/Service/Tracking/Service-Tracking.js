import React, { Component } from 'react';
import './Service-Tracking.css';
import LogoCat from '../../../pic/cat.jpg';
import axios from 'axios'
import _ from 'lodash';


class Service_Tracking extends Component {




  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isLoading: true,
      isToggleOn: false,
      data:[],
      datapost: {},
      trackingresult:{trackno: "-"},
      token : "123132313",
      trackrequest: JSON.parse(localStorage.getItem('Trackingfromhome')),

    }

    console.log(this.state.trackrequest)
    console.log(this.state.data)
    this.checkthatdataexist()
      
      this.handleChange = this.handleChange.bind(this)
      this.postTracking = this.postTracking.bind(this)
      this.togglepls = this.togglepls.bind(this);

  }


    handleChange(e) {


        this.state.datapost[e.target.name] = e.target.value
        // this.state.datapost[e.target.name.this.state.p] = e.target.value
        this.setState(
            this.state

        )
    }

    //from home page or header navbar

    checkthatdataexist(){
      console.log("function is runinng")
       if (typeof this.state.token !== 'undefined' && this.state.token !== null) {

          this.state.datapost.trackno = this.state.trackrequest
          console.log(this.state.trackrequest)
          console.log(this.state.datapost)

         {this.requesttracking()}
    
         }else{
           
            alert("พังจ้า")
         }
      
    }

     requesttracking() {
       
        console.log("requesttracking is runinng")
 
      //  this.setState({ trackingresult : window.location.pathname })
        axios.post('http://localhost:3002/trackno', this.state.datapost)
            .then((res) => {
     //           console.log(res)
                  this.setState({ data: res.data })
            }).then(() => {
                // refreshData()

                console.log(this.state.data)
                  {this.bringfirstdata()}
                  // console.log(this.state.token)
                  // console.log(this.state.data)
                  // console.log(this.state.data.map((each) =>(each.Barcode)))

            })
    }



    postTracking() {

      //  this.setState({ trackingresult : window.location.pathname })

        const { refreshData } = this.props
        this.togglepls()
    // console.log(this.state.token)
        axios.post('http://localhost:3002/trackno', this.state.datapost)
            .then((res) => {
     //           console.log(res)
                  this.setState({ data: res.data })
            }).then(() => {
                // refreshData()
                  {this.bringfirstdata()}
                  console.log(this.state.token)
                  // console.log(this.state.data)
                  // console.log(this.state.data.map((each) =>(each.Barcode)))

            })
    }


  togglepls() {

    this.setState({
      isToggleOn : !this.state.isToggleOn
    })
  }

  bringfirstdata(){
   this.setState({
     trackingresult : this.state.data[0]


   })
    // console.log(this.state.trackingresult.trackno)
  }






  render() {

          if (this.state.isToggleOn) {
    //  this.getTracking()
    } else {
      console.log('toggle true')
    }

    return (
      <div className="Service_Tracking">








        {/* Tracking col-md-9*/}

        <div id="service-tracking-component">
          <h2 id="service-tracking-header">
            TRACKING
                                  </h2>
          {/*<form action="Service-Tracking" method="post">*/}
            <div className="input-group" id="service-tracking-search">
              <input type="text" className="form-control" placeholder="Input tracking number here..." name="trackno" value={this.state.datapost.trackno} onChange={this.handleChange}/>


              <span className="input-group-btn">
                <button className="btn btn-default" type="Submit" onClick={this.postTracking} >post</button>
                {/*<button className="btn btn-default" type="Submit" onClick={this.getTracking}>get</button>*/}
              </span>

            </div>
          {/*</form>*/}
        </div>

        <div className="col-md-1"></div>
        <div className="col-md-10" id="service-tracking-system">
          {/* Tracking system col-md-10 in col-md-9 */}


          <div className="panel panel-default">
            <div className="panel-body">


              <h1> Tracking Number :  {this.state.trackingresult.Barcode}</h1>




               {/*Wizard Progressbar ja*/}
              
                <div className="row bs-wizard" >

                  <div className="col-xs-4 bs-wizard-step complete">
                    <div className="text-center bs-wizard-stepnum">Step 1</div>
                    <div className="progress"><div className="progress-bar"></div></div>
                    <a href="#" className="bs-wizard-dot"></a>
                    <div className="bs-wizard-info text-center">Test1</div>
                  </div>


                  <div className="col-xs-4 bs-wizard-step active">
                    <div className="text-center bs-wizard-stepnum">Step 3</div>
                    <div className="progress"><div className="progress-bar"></div></div>
                    <a href="#" className="bs-wizard-dot"></a>
                    <div className="bs-wizard-info text-center">Test2</div>
                  </div>

                  <div className="col-xs-4 bs-wizard-step disabled">
                    <div className="text-center bs-wizard-stepnum">Step 4</div>
                    <div className="progress"><div className="progress-bar"></div></div>
                    <a href="#" className="bs-wizard-dot"></a>
                    <div className="bs-wizard-info text-center"> Test3</div>
                  </div>
                
              </div>



              {/* end wizard progress bar ja*/}

              {/*Tracking-detial 1 */}


               {/*<div id="service-tracking-detail1">
              {this.state.data.map((each) =>(
                <div>
                <p> Tracking Number : {each.Barcode}</p>
                <p> Export : {each.DateTime}</p>
                <p> Delivery : {each.StatusName}</p>
                <p> To : {each.Location}</p>
                </div>
              ))}
              </div>*/}




                  <div className="container" id="service-tracking-table">

                      {/*https://bootsnipp.com/snippets/featured/mobile-friendly-api-documentation*/}

                      <div className="method">
                          <div className="row margin-0 list-header hidden-sm hidden-xs">
                              <div className="col-md-3"><div className="header">Date</div></div>
                              <div className="col-md-3"><div className="header">Location</div></div>
                              <div className="col-md-3"><div className="header">Status</div></div>
                              <div className="col-md-3"><div className="header">Message</div></div>
                          </div>
                        </div>
                      {this.state.data.map((each) =>(





                        <div className="method">
                          <div className="row margin-0">

                              <div className="col-md-3">
                                  <div className="cell">
                                      <div className="propertyname">
                                          {each.DateTime}  <span className="mobile-isrequired"></span>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="cell">
                                      <div className="type">
                                        {each.Location}
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="cell">
                                      <div className="isrequired">
                                           {each.StatusName}
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="cell">
                                      <div className="description">
                                           {each.Description}
                                      </div>
                                  </div>
                              </div>
                          </div>


                    </div>
                      ))}
                  </div>





              {/*End Tracking-detial 1 */}






            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>












    );

  };
};


export default Service_Tracking;
