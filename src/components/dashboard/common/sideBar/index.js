import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {

  render() {
    return (
      <div className="col-md-3 left_col" id="sidenav" style={{height:'100%', width:'70px'}}>
        <div className="left_col scroll-view">
          <div className="navbar nav_title" style={{border: 0}}>
            <Link to="/dashboard" className="site_title"><img src="/img/authenticase.jpg" height= "30px" width="30px" alt="A"/> <span>Authenticase</span></Link>
          </div>

          <div className="clearfix"></div>

          <br />

          <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
            <div className="menu_section">
              <ul className="nav side-menu">
                <li><a><i className="fa fa-home"></i> Posts <span className="fa fa-chevron-down"></span></a>
                  <ul className="nav child_menu">
                    <li><Link to="/dashboard/handicapper">All posts</Link></li>
                    <li><Link to="/dashboard/handicapper/newpost">Post pick</Link></li>
                  </ul>
                </li>
                <li><a><i className="fa fa-edit"></i> Orders <span className="fa fa-chevron-down"></span></a>
                  <ul className="nav child_menu">
                    <li><a href="form.html">Pending Orders</a></li>
                    <li><a href="form_advanced.html">Request Payout</a></li>
                    </ul>
                </li>
                <li><a><i className="fa fa-desktop"></i> Pick Of the day <span className="fa fa-chevron-down"></span></a>
                  <ul className="nav child_menu">
                    <li><a href="general_elements.html">Play </a></li>
                  </ul>
                </li>
              </ul>
            </div>

          </div>


          <div className="sidebar-footer hidden-small">
            <a data-toggle="tooltip" data-placement="top" title="Settings">
              <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="FullScreen">
              <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Lock">
              <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Logout">
              <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default SideBar;
