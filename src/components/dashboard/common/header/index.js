import React, {Component} from 'react';

class Header extends Component {

  render() {
    return (
      <div className="top_nav">
        <div className="nav_menu">
          <nav className="" role="navigation">
            <div className="nav toggle">
              <a id="menu_toggle"><i className="fa fa-bars"></i></a>
            </div>

            <ul className="nav navbar-nav navbar-right">
              <li className="">
                <a href="" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  <img src="images/img.jpg" alt=""/>My Account
                </a>
                <ul className="dropdown-menu dropdown-usermenu pull-right">
                  <li><a href=""> Profile</a></li>
                  <li>
                    <a href="">
                      <span className="badge bg-red pull-right">50%</span>
                      <span>Settings</span>
                    </a>
                  </li>
                  <li><a href="">Help</a></li>
                  <li><a href="login.html"><i className="fa fa-sign-out pull-right"></i> Log Out</a></li>
                </ul>
              </li>


              <li role="presentation" className="" style={{paddingRight:"5px"}}>
                <a href="" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  <img src="images/img.jpg" alt=""/> Shoping Cart
                </a>
              </li>

              <li role="presentation" className="dropdown" >
                <a href="" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false"> Alerts
                </a>
                <ul id="menu1" className="dropdown-menu list-unstyled msg_list" role="menu">
                  <li>
                    <a>
                      <span className="message">
                        Film festivals used to be do-or-die moments for movie makers. They were where...
                      </span>
                    </a>
                  </li>

                  <li>
                    <div className="text-center">
                      <a>
                        <strong>See All Alerts</strong>
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </li>



              <li role="presentation" className="dropdown" >
                <a href="" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false"> Conversations
                </a>
                <ul id="menu1" className="dropdown-menu list-unstyled msg_list" role="menu">

                  <li>
                    <a>
                      <span className="message">
                        Film festivals used to be do-or-die moments for movie makers. They were where...
                      </span>
                    </a>
                  </li>
                  <li>
                    <div className="text-center">
                      <a>
                        <strong>See All Conversations</strong>
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </li>


              <li role="presentation" className="" style={{paddingRight:"5px"}}>
                <a href="" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  <img src="images/img.jpg" alt=""/> Home
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header;
