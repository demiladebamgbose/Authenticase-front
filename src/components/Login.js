import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Script from 'react-load-script';
import * as userActions from '../actions/userActions';
import Signup from './Signup';

import './../styles/bootstrap/dist/css/bootstrap.css';
import './../styles/font-awesome/css/font-awesome.css';
import './../styles/custom.css';


class Login extends Component {

  constructor(props) {
      super(props);
      this.state = {
          email: '',
          password: '',
          error: {},
          validated: false,
          requestSent: false
      }

      this.onValueChange = this._onValueChanged.bind(this);
      this.logInUser = this._logInUser.bind(this);
  }

  _onValueChanged(e) {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this._validateForm(this.state.email, this.state.password);
    });
  }

  _validateForm(email, password) {
    let error = {};

    if (!/^.+@.+\..{2,3}$/.test(email)) {
      error.email = 'Improper email format';
      this.setState({error});
      return;
    }

    if (!/.{7,}/.test(password)) {
      error.password = 'Password needs to be at least 7 chatacters';
      this.setState({error});
      return;
    }

    this.setState({ validated: true , error: {} });
  }

  _logInUser(e) {
    e.preventDefault();
    if (this.state.validated) {

      const email = this.state.email;
      const password = this.state.password;
      const user = { email, password };

      this.props.action.logUserIn(user).then((response) => {
        console.log(this.props.user.presentUser);
      }).catch((err) => {
        console.log(err);
      });

    } else {
      console.log('wrong form');
    }

  }

  render() {
    return (


      <div>
        {this.state.requestSent && <div className="preload"></div>}

        {!this.state.requestSent &&
          <div className="login">

             <a className="hiddenanchor" id="signup"></a>
             <a className="hiddenanchor" id="signin"></a>
              <div className="login_wrapper">
              <div className="animate form login_form">
                <section className="login_content" style={{ textDecoration:'none' }}>
                  <form>
                    <h1>Login</h1>
                    <div>
                      <input type="text" className="form-control" placeholder="Email address" name="email" onChange={this.onValueChange} value={this.state.email} required="" />
                      {this.state.error.email && <span style={{marginTop: "-18px", fontSize: "12px", color: "#d66b6b"}} className="help-block">{this.state.error.email}</span>}
                    </div>
                    <div>
                      <input type="password" className="form-control" placeholder="Password" name="password" onChange={ this.onValueChange } value={ this.state.password } required="" />
                      {this.state.error.password && <span style={{marginTop: "-18px", fontSize: "12px", color: "#d66b6b"}} className="help-block">{this.state.error.password}</span>}
                    </div>
                    <div>
                      <a className="btn btn-success submit" type="submit" style={{ textDecoration:'none' }}>Log in</a>
                      <a className="reset_pass" href="" style={{color:'#7585D9'}}>Lost your password?</a>
                    </div>

                    <div className="clearfix"></div>

                    <div className="separator">
                      <p className="change_link">New to Authenticase?
                        <a href="#signup" className="to_register" style={{color:'#7585D9'}}> Create an Authenticase account </a>
                      </p>

                      <div className="clearfix"></div>
                      <br />

                      <div>
                      <p>© 2008-2017, Authenticase.com , Inc</p>
                      </div>
                    </div>
                  </form>
                </section>
              </div>
              <Signup/>
            </div>
          </div>
        }

        <Script url="/vendor/fastclick/lib/fastclick.js"/>
        <Script url="/vendor/nprogress/nprogress.js"/>
        <Script url="/vendor/jQuery-Smart-Wizard/js/jquery.smartWizard.js"/>
        <Script url="/vendor/custom.js"/>
      </div>





    )
  }
}


function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
