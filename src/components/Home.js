import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import $ from 'jquery';
import Script from 'react-load-script';
import Header from './dashboard/common/header/index'

import './../styles/my-css.css';

import Footer from './home/Footer';



class Home extends Component {


  render () {
    const container = {
      width: '100%',
      background:'#fff !important'

    };

    const howitworks = {
      'border-color': '#ccc',
      'border-width': '0px 1px 0px 0px',
      'border-style': 'solid'
    }
    const centerImage = {
      margin: 'auto',
      display: 'block'
    }

    const marginTop = {
      'margin-top': '28px'
    }



    return(
      <div style={{background:'#fff'}}>

        <div className="top_nav">
          <div className="nav_menu">
            <nav className="" role="navigation">
              <div className="" style={{display:'inline-block', marginLeft:'50px'}}>
                <h4 style={{lineHeight:'0'}}>
                  <img src="/img/authenticase.jpg" height="30px" width="30px"alt="logo" style={{marginRight:'20px'}}/>Authenticase</h4>
              </div>

              <ul className="nav navbar-nav navbar-right">

                <li role="presentation" className="" style={{paddingRight:"5px"}}>
                  <Link to="/login" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <img src="images/img.jpg" alt=""/> Signup
                  </Link>
                </li>


                <li role="presentation" className="" style={{paddingRight:"5px"}}>
                  <Link to="/login" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <img src="images/img.jpg" alt=""/> Login
                  </Link>
                </li>

                <li role="presentation" className="" style={{paddingRight:"5px"}}>
                  <a href="/#contact" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <img src="images/img.jpg" alt=""/> POTD
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>








            <div className="jumbotron" id="download">
              <div className="overlay" >
                <div className="row">
                  <div className="col-md-12 mx-auto">
                    <h1 className="text-center">Spreading The Benefits of Wining! </h1>
                    <div className="text-center col-sm-12">
                      <div className="text-center col-sm-12" style={{marginTop:'40px', marginBottom:'20px'}}>
                        <div className="col-sm-3"></div>
                        <div className="col-sm-7">
                            <div className="col-sm-10">
                              <input type="text" className="form-control" placeholder="Search Keywords" required />

                            </div>
                            <div className="col-sm-1" style={{marginLeft:'-69px'}}>
                            <button type="button" className="btn btn-primary"><i className="fa fa-search"></i></button>
                            </div>
                            <div className="col-sm-2">
                            </div>
                        </div>
                        <div className="col-sm-1"></div>


                      </div>
                        <p>Sell your sports picks or package to millions</p>

                         <button className="btn btn-primary"> Post Your Pick</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <section className="" style={{background:'#fbffe8'}}>
              <div className="container text-center">
                <h2>All Posts </h2>
                <p>Find thousands of sports picks & predictions</p>

                <div className="x_panel">
                  <div className="x_title">
                  <h2><small>Categories A-Z</small></h2>
                    <ul className="nav navbar-right panel_toolbox">
                      <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                      </li>
                      <li className="dropdown">
                        <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                        <ul className="dropdown-menu" role="menu">
                          <li><a href="">Settings 1</a>
                          </li>
                          <li><a href="">Settings 2</a>
                          </li>
                        </ul>
                      </li>
                      <li><a className="close-link"><i className="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div className="clearfix"></div>
                  </div>
                  <div className="x_content">

                  <div className="col-sm-12">
                  A<br/>
                    American Football [12] <br/>
                    Archery [2]<br/>
                    Athletics [3]<br/>
                    B<br/>
                    Badminton [3]<br/>
                    Baseball [9]<br/>
                    Basketball [31]<br/>
                    Bowls [1]<br/>
                    Boxing [4]<br/>
                    C<br/>
                    Canoeing [1]<br/>
                    Cricket [50]<br/>
                    Current Affairs [27]<br/>
                    Cycling [23]<br/>
                    D<br/>
                    Darts [6]<br/>
                    Disability Sport [23]<br/>
                    Diving [23]<br/>
                  </div>


                  </div>
                </div>
              </div>
            </section>

            <div className="contact"  id="POTD" >
              <div className="container text-center" >
                <h3>Pick of the day POTD </h3>
                <p>Reward: $50</p>

                <p style={{'text-decoration':'underline', color: '#666', cursor: 'pointer'}}> click to see results</p>
                <div className="text-center">
                  <button type="button" className="btn btn-primary" > Play</button>
                </div>
              </div>
            </div>

            <section className="features" id="features">
              <div className="container">
                <div className="section-heading text-center">
                  <h1>How it works</h1>

                </div>
                <div className="row">
                  <div className="col-sm-6" style={ howitworks }>
                    <h4 className="text-center" >Cappers</h4>
                    <div style={marginTop}>
                      <img src="img/typing.jpg"  style={centerImage} width="50px" height="50px" alt="Post picks"/>
                      <p className="text-muted text-center" style={{width:'400px', margin:'auto', fontSize: '15px'}}>Post sports and/or gambling picks for a fee or free</p>
                    </div>
                    <div style={marginTop}>
                      <img src="img/score.png"  style={centerImage} width="50px" height="50px" alt="Release picks"/>
                      <p className="text-muted text-center" style={{width:'400px', margin:'auto', fontSize: '15px'}}>Release your picks to the public as soon as game kick off</p>
                    </div>
                    <div style={marginTop}>
                      <img src="img/dollar.png"  style={centerImage} width="50px" height="50px" alt="Release picks"/>
                      <p className="text-muted text-center" style={{width:'400px', margin:'auto', fontSize: '15px'}}>Request payout if picks sold are confirmed as <b>successful</b></p>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <h4 className="text-center" >Bettors</h4>
                    <div style={marginTop}>
                      <img src="img/search.jpeg"  style={centerImage} width="50px" height="50px" alt="Post picks"/>
                      <p className="text-muted text-center" style={{width:'400px', margin:'auto', fontSize: '15px'}}>Search for free or premium picks posted by handicappers</p>
                    </div>
                    <div style={marginTop}>
                      <img src="img/cart.png"  style={centerImage} width="50px" height="50px" alt="Release picks"/>
                      <p className="text-muted text-center" style={{width:'400px', margin:'auto', fontSize: '15px'}}>Order selected premium picks and pay via our secure payment system</p>
                    </div>
                    <div style={marginTop}>
                      <img src="img/card.png"  style={centerImage} width="50px" height="50px" alt="Release picks"/>
                      <p className="text-muted text-center" style={{width:'400px', margin:'auto', fontSize: '15px'}}>Request refund if picks purchased are confirmed as <b> not successful</b></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>



            <section className="cta" style={{background:"#eee", color:"#000", padding:"100px"}}>
                <div className="text-center">
                  <h2 className="text-center">Not a member yet? </h2>
                  <p className="text-center">Sign up to <b>Authenticase</b> for free</p>
                  <div className="text-center">
                    <button type="button" className="btn btn-danger " > JOIN US</button>
                  </div>
                </div>
            </section>

            <Footer/>



            <div style={{background:"#0B0911", color:'#eee', fontSize:'12px' }} id="main_footer">
              <div className="container" style={{padding:'20px', 'font-size': '20px'}}>
                <div className="row" style={{padding:'20px'}}>

                <div className="col-sm-3">
                  <ul style={{'list-style': 'none', color:'#eee'}}>
                    <li >
                      <a href="/" style={{'textDecoration': 'none', fontSize:'12px', color:'#eee'}}>About</a>
                    </li>
                    <li >
                      <a href="/" style={{'textDecoration': 'none', fontSize:'12px', color:'#eee'}}>Member benefits</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3">
                  <ul style={{'list-style': 'none', color:'#eee'}}>
                    <li >
                      <a href="/" style={{'textDecoration': 'none', fontSize:'12px', color:'#eee'}}>Advertising</a>
                    </li>
                    <li >
                      <a href="/" style={{'textDecoration': 'none', fontSize:'12px', color:'#eee'}}>Help</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3">
                  <ul style={{'list-style': 'none', color:'#eee'}}>
                    <li >
                      <a href="/"  style={{'textDecoration': 'none', fontSize:'12px', color:'#eee'}}>Privacy policy</a>
                    </li>
                    <li >
                      <a href="/"  style={{'textDecoration': 'none', fontSize:'12px', color:'#eee'}}>Terms of use</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3">
                  <ul style={{listStyle:'none','textDecoration': 'none'}}>
                    <li>
                      <a href="/" style={{listStyle:'none','textDecoration': 'none', fontSize:'12px', color:'#eee'}}>Contact us</a>
                    </li>
                    <li >
                      <a href="/" style={{'textDecoration': 'none', fontSize:'12px', color:'#eee'}}>Download app</a>
                    </li>
                  </ul>
                </div>
              </div>
                <p style={{ fontSize:'12px'}} className="text-center        ">&copy; Authenticase.com 2017. All rights reserved.</p>
              </div>
            </div>

            <Script url="vendor/bootstrap/js/bootstrap.js"/>
            <Script url="vendor/jquery-easing/jquery.easing.js"/>
            <Script url="js/new-age.js"/>

        </div>
    );
  }
}

export default Home;
