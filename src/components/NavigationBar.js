import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class NavigationBar extends Component {

  componentDidMount () {
    //this.renderBuyButton();
  }
  componentDidUpdate () {
    //this.renderBuyButton();
  }



  render () {

    return (

      <div>

      <div id="wrapper" className="toggled fixed-top">
       <div id="sidebar-wrapper">
           <ul className="sidebar-nav">
               <li className="sidebar-brand">
                   <a href="">
                       Start Bootstrap
                   </a>
               </li>
               <li style={{marginTop: '30px'}}>
                   <a href="">Dashboard</a>
               </li>
               <li>
                   <a href="">Shortcuts</a>
               </li>
               <li>
                   <a href="">Overview</a>
               </li>
               <li>
                   <a href="">Events</a>
               </li>
               <li>
                   <a href="">About</a>
               </li>
               <li>
                   <a href="">Services</a>
               </li>
               <li>
                   <a href="">Contact</a>
               </li>
           </ul>
       </div>
   </div>



   <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar " style={{background:'#fff'}}>

        <div class="breadcrumb-dn mr-auto">
            <h5 style={{color: '#666', marginLeft:'20px', marginTop: '10px'}}> <img src="img/authenticase.jpg" height="30" width="30" alt="LOGO" /> Authenticase</h5>
        </div>

       <ul className="nav navbar-nav nav-flex-icons ml-auto" >
           <li className="nav-item">
               <a className="nav-link"><i className="fa fa-envelope"></i> <span className="clearfix d-none d-sm-inline-block">Contact</span></a>
           </li>
           <li className="nav-item">
               <a className="nav-link"><i className="fa fa-comments-o"></i> <span className="clearfix d-none d-sm-inline-block">Support</span></a>
           </li>
           <li className="nav-item">
               <a className="nav-link"><i className="fa fa-user"></i> <span className="clearfix d-none d-sm-inline-block">Account</span></a>
           </li>
           <li className="nav-item dropdown">
               <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   Dropdown
               </a>
               <div className="dropdown-menu dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                   <a className="dropdown-item" href="">Action</a>
                   <a className="dropdown-item" href="">Another action</a>
                   <a className="dropdown-item" href="">Something else here</a>
               </div>
           </li>
       </ul>
   </nav>
    </div>


    );
  }
}

export default NavigationBar;
