import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Script from 'react-load-script'

// import Calendar from './calendar'
import './Service-History.css';
// import LogoDHL from '../../../pic/checkinfopack.png';


class Service_History extends Component {

  constructor(props) {
    super(props);
    this.state = {



    }


  }

  // componentWillMount() {
  //         const script = document.createElement("script");

  //         script.src = "https://cdn.omise.co/card.js";
  //         script.async = true;



  //         document.body.appendChild(script);
  //     }




  render() {
    return (

      <div className="Delivery-History" >




        <h2>Delivery History </h2>


        <form className="form-horizontal" id="datepicker-form">
          <div className="form-group">
            <label className="control-label col-sm-3 " for="email">Since:</label>
            <div className="col-sm-2">
              <select className="form-control gramform" name="weight" onChange={this.handleChange}>
                <option>DATE</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>

              </select>
            </div>

            <div className="col-sm-2">
              <select className="form-control gramform" name="weight" onChange={this.handleChange}>
                <option>MONTH</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>


              </select>
            </div>

            <div className="col-sm-2">
              <select className="form-control gramform" name="weight" onChange={this.handleChange}>
                <option>YEAR</option>
                <option>2014</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
              </select>
            </div>


          </div>

          <div className="form-group">
            <label className="control-label col-sm-3" for="pwd">To:</label>
            <div className="col-sm-2">
              <select className="form-control gramform" name="boxsize" onChange={this.handleChange}>
                <option>DATE</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </select>
            </div>

            <div className="col-sm-2">
              <select className="form-control gramform" name="weight" onChange={this.handleChange}>
                <option>MONTH</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>


              </select>
            </div>

            <div className="col-sm-2">
              <select className="form-control gramform" name="weight" onChange={this.handleChange}>
                <option>YEAR</option>
                <option>2014</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
              </select>
            </div>

          </div>


        </form>



        <div className="col-md-11" id="showhistory">

          {/*https://bootsnipp.com/snippets/featured/mobile-friendly-api-documentation*/}

          <div className="method">
            <div className="row margin-0 list-header hidden-sm hidden-xs">
              <div className="col-md-1"><div className="header" id="header-prepare">Ref No</div></div>
              <div className="col-md-1"><div className="header" id="header-prepare">Track No</div></div>
              <div className="col-md-2"><div className="header" id="header-prepare">Recipient's Name</div></div>
              <div className="col-md-2"><div className="header" id="header-prepare">Address</div></div>
              <div className="col-md-1"><div className="header" id="header-prepare">Postcode</div></div>
              <div className="col-md-1"><div className="header" id="header-prepare">Date</div></div>
              <div className="col-md-1"><div className="header" id="header-prepare">Logistic</div></div>
              <div className="col-md-2"><div className="header" id="header-prepare">Dropoff</div></div>
              <div className="col-md-1"><div className="header" id="header-prepare">Status</div></div>
            </div>
          </div>






          <div className="method">
            <div className="row margin-0">

              <div className="col-md-1" >
                <div className="cell" >

                  <div className="prepare-checkbox">
                    JS12345556
                                            </div>

                </div>
              </div>

              <div className="col-md-1">
                <div className="cell">
                  <div className="prepare-trackingcode">
                    ET23123131
                                      </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className="cell">
                  <div className="prepare-Recipient">
                    Joey
                                      </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className="cell">
                  <div className="prepare-address">
                    525/213 Prachautit 76
                                      </div>
                </div>
              </div>
              <div className="col-md-1">
                <div className="cell">
                  <div className="prepare-postcode">
                    10140
                                      </div>
                </div>
              </div>

              <div className="col-md-1">
                <div className="cell">
                  <div className="prepare-date">
                    22-06-2017
                                            </div>
                </div>
              </div>

              <div className="col-md-1">
                <div className="cell">
                  <div className="prepare-logistic">
                    Fedex
                                            </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className="cell">
                  <div className="prepare-dropoff">
                    Soi Lat Ya
                                            </div>
                </div>
              </div>

              <div className="col-md-1">
                <div className="cell">
                  <div className="isrequired">
                    Complete


                                            </div>
                </div>
              </div>


            </div>


          </div>

        </div>









      </div>




    );
  }
}

export default Service_History;
