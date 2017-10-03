import React, { Component } from 'react';


class Footer extends Component {

  render () {
    return  (
      <Footer>
        <div className="container" style={{padding:'20px', 'font-size': '20px'}}>
          <div className="row" style={{padding:'20px'}}>

          <div className="col">
            <ul style={{'list-style': 'none'}}>
              <li >
                <a href="/">About</a>
              </li>
              <li >
                <a href="/">Member benefits</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul style={{'list-style': 'none'}}>
              <li >
                <a href="/">Advertising</a>
              </li>
              <li >
                <a href="/">Help</a>
              </li>
            </ul>
          </div>
          <div className="col">
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
      </Footer>
    );
  }
}

export default Footer;
