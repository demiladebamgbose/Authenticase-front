import React, { Component } from 'react';
import Center from './components/Center';
import Footer from  './components/dashboard/common/footer/index';
import Header from  './components/dashboard/common/header/index';
import SideBar from  './components/dashboard/common/sideBar/index';
import Script from 'react-load-script'
import $ from 'jquery';
import  './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      color: "green"
    };
  }

  componentDidMount() {
    let bool = true;
    $('#menu_toggle').click(function() {


      // if ($(window).width() <  769) {
      //   $('#sidenav').attr("style","width: 70px");
      //   $("#sidenav").attr("style", "display: block");
      //   $('.right_col').attr("style","margin-left: 70px");
      //   $('.nav-menu').attr("style", "margin-left: 70px");
      //
      // } else {
        if (bool) {
          $('#sidenav').attr("style": "width: 70px");
          $('.right_col').attr("style","margin-left: 70px");
        } else {
          $('#sidenav').css("width": "230px");
          $('.right_col').attr("style","margin-left: 230px");
        }
      //}
      console.log($('#sidenav').css("width"), bool);

      bool = !bool
    });
  }

  render() {

    return (

      <div className="nav-md">
      <Script url="/vendor/jquery/jquery.js"/>
      <div className="container body" style={{padding: '0px', width: '100%'}}>
        <div className="main_container">
        <SideBar/>
        <Header/>

          <div className="right_col" role="main">
            <div className="">
              <div className="page-title">
                <ol className="breadcrumb" style={{margin:'0', padding:"0", height: "95px"}}>
                  <li className="breadcrumb-item"><a href="">Home</a></li>
                  <li className="breadcrumb-item"><a href="">Library</a></li>
                  <li className="breadcrumb-item active">Data</li>
                  <hr/>
                </ol>


              <Center/>
              </div>
            </div>
          </div>


          <Footer/>
        </div>
        </div>

        <Script url="/vendor/bootstrap/js/bootstrap.min.js"/>
        <Script url="/vendor/fastclick/lib/fastclick.js"/>
        <Script url="/vendor/nprogress/nprogress.js"/>
        <Script url="/vendor/custom.js"/>



      </div>
    );
  }
}

export default App;
