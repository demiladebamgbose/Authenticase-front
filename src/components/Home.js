import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './home/Footer';

class Home extends Component {



  render () {
    const container = {
      width: '100%'
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
      <div>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
              <div style={container} className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">	 <h4><img height="30" width="30" src="/img/authenticase.jpg" alt="Logo" /> Authenticase</h4></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i className="fa fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#features">How it works</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#contact">POTD</a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link js-scroll-trigger" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link js-scroll-trigger"  to="/signup">Sign up</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <section className="download text-center" id="download">
              <div className="container" >
                <div className="row">
                  <div className="col-md-12 mx-auto">
                    <h2 className="section-heading text-center"><b>Spreading The Benefits of Winning! </b></h2>
                    <span>
                      <input type="text" name="search" placeholder= "Search keywords"  style={{width: '500px', height: '12px', marginTop: '70px', marginBottom: '70px',color:'#333', backgroundColor:'#fff', border: '1px solid #fff', borderRadius:'2px', padding: '15px'}}/>
                      <button type="button" className="btn btn-primary"><i className="fa fa-search"></i></button>
                    </span>
                    <p style={{fontSize: '18px'}}>Sell your sports picks or package to millions </p>
                    <button style={{textTransform:'none'}} type="button" className="btn btn-primary">Post your pick </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="features" id="features">
              <div className="container">
                <div className="section-heading text-center">
                  <h1>Find thousands of sports picks & predictions</h1>
                  <hr/>
                </div>
                <div className="row">
                  <div className="col" style={ howitworks }>
                    <h4 className="text-center" style={{color:'#fdcc52'}}>Cappers</h4><hr/>
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

                  <div className="col">
                    <h4 className="text-center" style={{color:'#fdcc52'}}>Bettors</h4><hr/>
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

            <section className="contact bg-primary" id="contact">
              <div className="container">
                <h3>Pick of the day POTD </h3><hr/>
                <p>Reward: $50</p>

                <p style={{'text-decoration':'underline', color: '#666', cursor: 'pointer'}}> click to see results</p>
                <div className="text-center">
                  <button type="button" className="btn btn-deep-orange" > PLAY</button>
                </div>
              </div>
            </section>

            <section className="cta">
              <div className="overlay col-lg-12">
                <div style={{width:'500px', margin: 'auto', color:'white', "margin-top":'150px'}}>
                  <h2 className="text-center">Not a member yet? </h2>
                  <p className="text-center">Sign up to <b>Authenticase</b> for free</p>
                  <div className="text-center">
                    <button type="button" className="btn btn-danger " > JOIN US</button>
                  </div>
                </div>
              </div>
            </section>

            <Footer/>


        </div>
    );
  }
}

export default Home;
