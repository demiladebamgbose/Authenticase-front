import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/userActions';
import Footer from './home/Footer';




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

      this.setState({requestSent: true});

      this.props.action.logUserIn(user).then((response) => {
        this.setState({
          email:'',
          password: '',
          requestSent: false
        })
        this.props.history.push('/dashboard');
      }).catch((err) => {
        console.log(err);
      });

    } else {
      console.log('wrong form');
    }

  }

  render () {
    return (
      <div>

      { this.state.requestSent && <div className="preload"></div> }

      { !this.state.requestSent &&
      <div>
        <div style = { styles.form } >
            <form className="form-vertical">
              <div>
              <div className="control-group normal_text text-center" style={{color: '#fdcc52', marginBottom:'25px'}}> <h4><img height="40" width="40" src="/img/authenticase.jpg" alt="Logo" /> Authenticase</h4></div>
                <div className="control-group normal_text text-center"> <h5><b> Log In</b></h5></div><hr/>


                <div className="form-group " style={{margin:'20px', marginTop:'20px'}}>
                      <div className="md-form">
                        <i className="fa fa-envelope prefix grey-text" style={{ fontSize: '22px', lineHeight: '3'}}></i>
                        <input type="text" autoComplete="off" id="email" className="form-control"name="email" onChange={this.onValueChange} value={this.state.email}/>
                        <label for="email">Email Address</label>
                      </div>
                      {this.state.error.email && <span style={styles.errorBlock} className="help-block">{this.state.error.email}</span>}
                </div>

                <div className="form-group " style={{margin:'20px', marginTop:'40px'}}>
                      <div className="md-form">
                        <i className="fa fa-lock prefix grey-text" style={{ fontSize: '22px', lineHeight: '3'}}></i>
                        <input type="password" id="password" className="form-control" name="password" onChange={ this.onValueChange } value={ this.state.password }/>
                        <label for="password">Password</label>
                      </div>
                      {this.state.error.password && <span style={styles.errorBlock} className="help-block">{this.state.error.password}</span>}
                      <p className="font-small blue-text d-flex justify-content-end" style={{fontSize: '14px'}}>Forgot <a className="blue-text ml-1"> Password?</a></p>

                </div>

                <div className="text-center">
                  <button onClick={this.logInUser} className="btn btn-indigo">Log in <i className="fa fa-sign-in ml-1"></i></button>
              </div>

                <section style={{borderTop: '1px solid #eee'}}>
                  Already have an account?
                </section>
                <div className="text-center"><Link to="/signup"><button className="btn btn-danger" type="button">Sign up</button></Link></div>
              </div>
            </form>
        </div>
        <Footer/>
        </div>
      }
      </div>
    );
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

const styles = {
  form : {
    width: '60%',
    background: '#fff',
    borderRadius: '5px',
    padding: '80px',
    display: 'block'
  },
  loginBtnStyle: {
    margin:'auto',
    width:'100px',
    display:'block'
  },
  errorBlock: {
    color: '#d81748',
    fontSize: '12px'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
