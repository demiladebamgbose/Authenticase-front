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


   <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar " style={{background:'#434c5b', position: "fixed",
    top: "0", right: "0", left: "0",zIndex: "1030", color:'#fff'}}>

        <div class="breadcrumb-dn mr-auto">
            <h5 style={{color: '#fff', marginLeft:'20px', marginTop: '10px'}}> <img src="img/authenticase.jpg" height="30" width="30" alt="LOGO" /> Authenticase</h5>
        </div>

       <ul className="nav navbar-nav nav-flex-icons ml-auto" >

         <li className="nav-item">
             <a className="nav-link"     style={{paddingRight: ".5rem", paddingLeft: ".5rem", color:"#eee", textShadow:'none' }}>
             <i className="fa fa-home"></i> <span style={{ display: "inline-block"}} className="clearfix d-none d-sm-inline-block">Home</span></a>
         </li>
           <li className="nav-item">
               <a className="nav-link"     style={{paddingRight: ".5rem", paddingLeft: ".5rem", color:"#eee", textShadow:'none' }}>
               <i className="fa  fa-comments-o"></i> <span style={{ display: "inline-block"}} className="clearfix d-none d-sm-inline-block">Conversations</span></a>
           </li>
           <li className="nav-item">
               <a className="nav-link" style={{ display: "inline-block", paddingLeft: ".5rem", color:"#eee", textShadow:'none'}} ><i className="fa fa-bell"></i> <span className="clearfix d-none d-sm-inline-block">Alerts</span></a>
           </li>
           <li className="nav-item">
               <a className="nav-link" style={{ display: "inline-block", paddingLeft: ".5rem", color:"#eee", textShadow:'none'}} ><i className="fa fa-cart-plus"></i> <span className="clearfix d-none d-sm-inline-block">Cart</span></a>
           </li>
           <li className="nav-item dropdown" style={{ display: "inline-block", paddingLeft: ".5rem", color:"#eee", textShadow:'none'}} >
               <a className="nav-link dropdown-toggle" style={{ display: "inline-block", paddingLeft: ".5rem", color:"#eee", textShadow:'none'}}href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <i className="fa fa-user"></i> My Account
               </a>
               <div className="dropdown-menu dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                   <a className="dropdown-item" href="">Action</a>
                   <a className="dropdown-item" href="">Another action</a>
                   <a className="dropdown-item" href="">Something else here</a>
               </div>
           </li>
       </ul>
   </nav>
   <div className="z-depth-2 " style={{position:"fixed", marginTop: "-55px", display: "flex", background:"#eee", width:'100%'}} >

       <ul className="" style={{display: "flex"}} >
           <li className="nav-item">
               <a className="nav-link"     style={{paddingRight: ".5rem", paddingLeft: ".5rem" }}><i className="fa fa-envelope"></i> <span style={{ display: "inline-block"}} className="clearfix d-none d-sm-inline-block">Contact</span></a>
           </li>
           <li className="nav-item">
               <a className="nav-link"><i className="fa fa-comments-o"></i> <span style={{ display: "inline-block"}} className="clearfix d-none d-sm-inline-block">Support</span></a>
           </li>
           <li className="nav-item">
               <a className="nav-link"><i className="fa fa-user"></i> <span style={{ display: "inline-block"}} className="clearfix d-none d-sm-inline-block">Account</span></a>
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
   </div>
   <div className="" style={{ marginTop: "120px", display: "flex", backgroundColor:"#fff"}} >

       <ul className="" style={{display: "flex"}} >
           <li className="nav-item">
               <a className="nav-link"     style={{paddingRight: ".5rem", paddingLeft: ".5rem" }}><i className="fa fa-envelope"></i> <span style={{ display: "inline-block"}} className="clearfix d-none d-sm-inline-block">Contact</span></a>
           </li>
           <li className="nav-item">
               <a className="nav-link"><i className="fa fa-comments-o"></i> <span style={{ display: "inline-block"}} className="clearfix d-none d-sm-inline-block">Support</span></a>
           </li>
           <li className="nav-item">
               <a className="nav-link"><i className="fa fa-user"></i> <span style={{ display: "inline-block"}} className="clearfix d-none d-sm-inline-block">Account</span></a>
           </li>

       </ul>
   </div>
    </div>


    );
  }
}

export default NavigationBar;
