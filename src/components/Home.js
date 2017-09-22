import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

            <section className="download bg-primary text-center" id="download">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 mx-auto">
                    <h2 className="section-heading text-center">An online bet trading marketplace </h2>
                    <p>enabling astute handicappers, bettors and sports enthusiasts to sell and buy all things sports and gambling picks</p>
                    <div className="badges">
                      <a className="badge-link" href="/"><img src="public/img/google-play-badge.svg" alt=""/></a>
                      <a className="badge-link" href="/"><img src="img/app-store-badge.svg" alt=""/></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="features" id="features">
              <div className="container">
                <div className="section-heading text-center">
                  <h1>How it works</h1>
                  <p className="text-muted">Authenticase is not a bookmaking, betting and online gambling company; it is merely a broker and receives percentage off service and success fees from both bettors and handicappers on picks purchased and picks confirmed successful respectively</p>
                  <hr/>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12" style={ howitworks }>
                    <h4 className="text-center" style={{color:'#fdcc52'}}>Cappers</h4><hr/>
                    <div style={marginTop}>
                      <img src="img/typing.jpg"  style={centerImage} width="50px" height="50px" alt="Post picks"/>
                      <p className="text-muted text-center" style={{width:'400px', margin:'auto'}}>Post sports and/or gambling picks for a fee or free</p>
                    </div>
                    <div style={marginTop}>
                      <img src="img/score.png"  style={centerImage} width="50px" height="50px" alt="Release picks"/>
                      <p className="text-muted text-center" style={{width:'400px', margin:'auto'}}>Release your picks to the public as soon as game kick off</p>
                    </div>
                    <div style={marginTop}>
                      <img src="img/dollar.png"  style={centerImage} width="50px" height="50px" alt="Release picks"/>
                      <p className="text-muted text-center" style={{width:'400px', margin:'auto'}}>Request payout if picks sold are confirmed as <b>successful</b></p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <h4 className="text-center" style={{color:'#fdcc52'}}>Bettors</h4><hr/>
                    <div style={marginTop}>
                      <img src="img/search.jpeg"  style={centerImage} width="50px" height="50px" alt="Post picks"/>
                      <p className="text-muted text-center" style={{width:'400px', margin:'auto'}}>Search for free or premium picks posted by handicappers</p>
                    </div>
                    <div style={marginTop}>
                      <img src="img/cart.png"  style={centerImage} width="50px" height="50px" alt="Release picks"/>
                      <p className="text-muted text-center" style={{width:'400px', margin:'auto'}}>Order selected premium picks and pay via our secure payment system</p>
                    </div>
                    <div style={marginTop}>
                      <img src="img/card.png"  style={centerImage} width="50px" height="50px" alt="Release picks"/>
                      <p className="text-muted text-center" style={{width:'400px', margin:'auto'}}>Request refund if picks purchased are confirmed as <b> not successful</b></p>
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
                <div style={{width: '200px', margin:'auto', display:'block'}}>
                  <button type="button" className="btn btn-info btn-lg" > PLAY</button>
                </div>
              </div>
            </section>

            <section className="cta">
              <div className="overlay col-lg-12">
                <div style={{width:'500px', margin: 'auto', color:'white', "margin-top":'150px'}}>
                  <h2 className="text-center">Not a member yet? </h2>
                  <p className="text-center">Sign up to <b>Authenticase</b> for free</p>
                  <div style={{width: '100px', margin:'auto', display:'block'}}>
                    <button type="button" className="btn btn-danger btn-lg" > JOIN US</button>
                  </div>
                </div>
              </div>
            </section>



            <footer>
              <div className="container" style={{padding:'20px', 'font-size': '20px'}}>
                <div className="col-md-12 col-lg-12 col-sm-12" style={{padding:'20px'}}>

                <div className="col-sm-3">
                  <ul style={{'list-style': 'none'}}>
                    <li >
                      <a href="/">About</a>
                    </li>
                    <li >
                      <a href="/">Member benefits</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3">
                  <ul style={{'list-style': 'none'}}>
                    <li >
                      <a href="/">Advertising</a>
                    </li>
                    <li >
                      <a href="/">Help</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3">
                  <ul style={{'list-style': 'none'}}>
                    <li >
                      <a href="/">Privacy policy</a>
                    </li>
                    <li >
                      <a href="/">Terms of use</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3">
                  <ul style={{'list-style': 'none'}}>
                    <li >
                      <a href="/">Contact us</a>
                    </li>
                    <li >
                      <a href="/">Download app</a>
                    </li>
                  </ul>
                </div>
              </div>
                <p>&copy; Authenticase.com 2017. All rights reserved.</p>
              </div>
            </footer>
        </div>
    );
  }
}

export default Home;
