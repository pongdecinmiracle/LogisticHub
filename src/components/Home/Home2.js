import React  from 'react';
import './Home.css';
import LogoDHL from '../../pic/DHL.png';
import LogoFedEx from '../../pic/fedex.png';
import LogoKerry from '../../pic/kerry.png';
import LogoSendIt from '../../pic/sendit.png';
import LogoThaiPost from '../../pic/thaipost.png';
import Promotion_1 from '../../pic/Promotion-1.jpg';
import Promotion_2 from '../../pic/Promotion-2.jpg';
import Promotion_3 from '../../pic/Promotion-3.jpg';

class Home2 extends Component {

	  constructor(props) {
    super(props);
    this.state = {

			  datapost: {trackno: "" },


    }



      this.handleChange = this.handleChange.bind(this)
      this.retotrackingpage = this.retotrackingpage.bind(this)
      // this.togglepls = this.togglepls.bind(this);

	}

	  handleChange(e) {

        this.state.datapost[e.target.name] = e.target.value
        // this.state.datapost[e.target.name.this.state.p] = e.target.value
        this.setState(
            this.state

				)
				
		}
			
		retotrackingpage(){
			 localStorage.setItem('Trackingfromhome', JSON.stringify(this.state.datapost.trackno));
				window.location="http://localhost:3000/Tracking"
				// alert("Hello! I am an alert box!!");
		}



		render(){
					console.log(this.state.datapost)
    return (
<div>
                <div className="jumbotron" id="body-header">

               	 	<div className="row">
               	 		<div className="container">
               	 			<div className="col-md-6" id="body-left-column-top">

						                  <h1>Joeyable Express</h1>
						                  <p>
						                  Coolest Logistic Hub
						                  </p>
						                  <p><a className="btn btn-default btn-lg" href="#" role="button">Learn more</a></p>
						    </div>


						    <div className="col-md-6">

						    			<div id="Body-Tracking">

									    	<h2>
									    	TRACKING
									    	</h2>

                      
								    	<div className="input-group">
									      <input type="text" className="form-control"placeholder="Input tracking number here..." name="trackno" value={this.state.datapost.trackno} onChange={this.handleChange}/>
									      <span className="input-group-btn">
									        <button className="btn btn-default" type="Submit" onClick={this.retotrackingpage} >Check</button>
									      </span>

									 	</div>
                    


									 	</div>

						    </div>




						</div>
					</div>
                </div>



{/* Service */}

									  <div className="container">
									  <h2>Service</h2>
									  <div id="myCarousel" className="carousel slide" data-ride="carousel">

									    <ol className="carousel-indicators">
									      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
									      <li data-target="#myCarousel" data-slide-to="1"></li>
									      <li data-target="#myCarousel" data-slide-to="2"></li>
									    </ol>


									    <div className="carousel-inner">
									      <div className="item active">
									        <img src={LogoKerry} alt="Promotion 1" />
									      </div>

									      <div className="item">
									        <img src={LogoThaiPost} alt="Promotion 2"/>
									      </div>

									      <div className="item">
									        <img src={LogoFedEx}alt="Promotion 3" />
									      </div>
									    </div>


									    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
									      <span className="glyphicon glyphicon-chevron-left"></span>
									      <span className="sr-only">Previous</span>
									    </a>
									    <a className="right carousel-control" href="#myCarousel" data-slide="next">
									      <span className="glyphicon glyphicon-chevron-right"></span>
									      <span className="sr-only">Next</span>
									    </a>
									  </div>
									</div>


{/* Promotion*/}
										<div className="row" id="Body-Promotion">
										<div className="container">
										<h2>Promotion</h2>
										  <div className="col-sm-6 col-md-4">
										    <div className="thumbnail">
										      <img src={Promotion_1}/>
										      <div className="caption">
										        <h3>Thumbnail label</h3>
										        <p>A little bit detail</p>
										        <p> <a href="#" className="btn btn-default" role="button">Button</a></p>
										      </div>
										    </div>
										  </div>

										  <div className="col-sm-6 col-md-4">
										    <div className="thumbnail">
										      <img src={Promotion_2}/>
										      <div className="caption">
										        <h3>Promotion</h3>
										        <p>A little bit detail</p>
										        <p> <a href="#" className="btn btn-default" role="button">Button</a></p>
										      </div>
										    </div>
										  </div>

										  <div className="col-sm-6 col-md-4">
										    <div className="thumbnail">
										      <img src={Promotion_3}/>
										      <div className="caption">
										        <h3>Promotion</h3>
										        <p>A little bit detail</p>
										        <p><a href="#" className="btn btn-default" role="button">Button</a></p>
										      </div>
										    </div>
										  </div>
										</div>
										</div>






{/* logistic logo */}

										<div id="Body-logistic">
										<h1> OUR PARTNER </h1>
                									    <div className="row" id="Body-logistic-logo">
                									    <div className="container">
										  <div className="col-xs-6 col-md-2">
										    <a href="#" className="thumbnail">
										      <img id="img-circle" src={LogoDHL}/>
										      </a>
										      </div>

										      <div className="col-xs-6 col-md-2">
										    <a href="#" className="thumbnail">
										      <img id="img-circle" src={LogoFedEx}/>
										      </a>
										      </div>

										      <div className="col-xs-6 col-md-2">
										    <a href="#" className="thumbnail">
										      <img id="img-circle" src={LogoKerry}/>
										      </a>
										      </div>

										      <div className="col-xs-6 col-md-2">
										    <a href="#" className="thumbnail">
										      <img id="img-circle" src={LogoSendIt}/>
										      </a>
										      </div>

										      <div className="field">

										      <div className="col-xs-6 col-md-2">
										    <a href="#" className="thumbnail">
										      <img id="img-circle" src={LogoThaiPost}/>
										      </a>
										      </div>

										      </div>


										  </div>
										 </div>
										</div>




</div>

		);
		};
  };


export default Home2;
