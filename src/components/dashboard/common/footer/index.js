import React, {Component} from 'react';


class Footer extends Component {
  render () {
    return (
      <footer style={{position:'relative'}}>
        <div className="pull-right">
          <small>© Authenticase.com 2017. All rights reserved</small>
        </div>
        <div className="clearfix"></div>
      </footer>
    );
  }
}

export default Footer;
