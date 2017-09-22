import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {

  render () {

    const header = {
      padding:'15px'
    }


    return (
      <div>
        <div id="header">
          <div className="control-group normal_text" style={header}> <h4 id="login_header"><img height="40" width="40" src="/img/authenticase.jpg" alt="Logo" /> Authenticase</h4></div>
        </div>

        <div id="user-nav"  className="navbar navbar-inverse">
        <ul className="nav">
          <li  className="dropdown" id="profile-messages" ><a title="" href="/" data-toggle="dropdown" data-target="#profile-messages" className="dropdown-toggle"><i className="icon icon-user"></i>  <span className="text">Welcome User</span><b className="caret"></b></a>
            <ul className="dropdown-menu">
              <li><a href="/"><i className="icon-user"></i> My Profile</a></li>
              <li className="divider"></li>
              <li><a href="/"><i className="icon-check"></i> My Tasks</a></li>
              <li className="divider"></li>
              <li><a href="login.html"><i className="icon-key"></i> Log Out</a></li>
            </ul>
          </li>
          <li className="dropdown" id="menu-messages"><a href="/" data-toggle="dropdown" data-target="#menu-messages" className="dropdown-toggle"><i className="icon icon-envelope"></i> <span className="text">Messages</span> <span className="label label-important">5</span> <b className="caret"></b></a>
            <ul className="dropdown-menu">
              <li><a className="sAdd" title="" href="/"><i className="icon-plus"></i> new message</a></li>
              <li className="divider"></li>
              <li><a className="sInbox" title="" href="/"><i className="icon-envelope"></i> inbox</a></li>
              <li className="divider"></li>
              <li><a className="sOutbox" title="" href="/"><i className="icon-arrow-up"></i> outbox</a></li>
              <li className="divider"></li>
              <li><a className="sTrash" title="" href="/"><i className="icon-trash"></i> trash</a></li>
            </ul>
          </li>
          <li className=""><a title="" href="/"><i className="icon icon-cog"></i> <span className="text">Settings</span></a></li>
          <li className="">< Link to="/login"><a title=""><i className="icon icon-share-alt"></i> <span className="text">Logout</span></a></Link></li>
        </ul>
        </div>


        <div id="sidebar"><a  className="visible-phone"><i className="icon icon-home"></i> Dashboard</a>
          <ul>
            <li className="active"><a ><i className="icon icon-home"></i> <span>Dashboard</span></a> </li>
            <li> <a href="charts.html"><i className="icon icon-signal"></i> <span>Charts &amp; graphs</span></a> </li>
            <li> <a href="widgets.html"><i className="icon icon-inbox"></i> <span>Widgets</span></a> </li>
            <li><a href="tables.html"><i className="icon icon-th"></i> <span>Tables</span></a></li>
            <li><a href="grid.html"><i className="icon icon-fullscreen"></i> <span>Full width</span></a></li>
            <li className="submenu"> <a ><i className="icon icon-th-list"></i> <span>Forms</span> <span className="label label-important">3</span></a>
              <ul>
                <li><a href="form-common.html">Basic Form</a></li>
                <li><a href="form-validation.html">Form with Validation</a></li>
                <li><a href="form-wizard.html">Form with Wizard</a></li>
              </ul>
            </li>
            <li><a href="buttons.html"><i className="icon icon-tint"></i> <span>Buttons &amp; icons</span></a></li>
            <li><a href="interface.html"><i className="icon icon-pencil"></i> <span>Eelements</span></a></li>
            <li className="submenu"> <a ><i className="icon icon-file"></i> <span>Addons</span> <span className="label label-important">5</span></a>
              <ul>
                <li><a href="index2.html">Dashboard2</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="calendar.html">Calendar</a></li>
                <li><a href="invoice.html">Invoice</a></li>
                <li><a href="chat.html">Chat option</a></li>
              </ul>
            </li>
            <li className="submenu"> <a ><i className="icon icon-info-sign"></i> <span>Error</span> <span className="label label-important">4</span></a>
              <ul>
                <li><a href="error403.html">Error 403</a></li>
                <li><a href="error404.html">Error 404</a></li>
                <li><a href="error405.html">Error 405</a></li>
                <li><a href="error500.html">Error 500</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>


    );
  }
}

export default NavigationBar;
