import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions  from '../actions/userActions';


class Signup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      company : '',
      email: '',
      password: '',
      confirmPassword: '',
      userType: '',
      dob: '',
      phoneNumber: '',
      error: {}

    }

    this.onValueChange = this._onValueChanged.bind(this);
    this.createUser = this._createUser.bind(this);
  }

  _onValueChanged (e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  _validateForm () {
    let validated = true;
    let error = {};

    if (!this.state.userType) {
      error.userType= 'Select one user type pleease';
      validated = false;
    }


    if (!this.state.firstName) {
      error.firstName= 'First name cannot be empty';
      validated = false;
    }

    if (!this.state.lastName) {
      error.lastName =  'Last name cannot be empty';
      validated = false;
    }

    if (!this.state.company) {
      error.company =  'Company  name is required';
      validated = false;
    }

    if (!/^.+@.+\..{2,3}$/.test(this.state.email)) {
      error.email =  'Incorrect Email format';
      validated = false;
    }

    if (!((/.{7,}/.test(this.state.password)) && (this.state.password === this.state.confirmPassword))) {
      error.password =  'Ensure passwords match, Password needs to be at least 7 characters';
      validated = false;
    }

    if (!/\d+/.test(this.state.phoneNumber)) {
      error.phoneNumber =  'Phone numberis required';
      validated = false;
    }

    if (/(0[1-9]|1[012])\/(0[1-9]|1[0-9]|2[0-9]|3[01])\/\d{4}/.test(this.state.dob)) {
      error.dob =  'Date of birth is required';
      validated = false;
    }

    if (validated) {
      this.setState({ error: {} });
    } else {
      this.setState({error}, () => {
        console.log(this.state);
      });
    }

    return validated;

  }

  _createUser (e) {
    let validated = this._validateForm();
    let dob = new Date(this.state.dob).toUTCString();
    console.log(dob);
    if (validated) {
      const user = {
        name: {
          firstName : this.state.firstName,
          lastName: this.state.lastName
        },
        company: this.state.company,
        email: this.state.email,
        dob: dob,
        userType:this.state.userType,
        password: this.state.password,
        phoneNumber:this.state.phoneNumber
      };

      this.props.action.createUser(user).then((value) => {
        console.log(value);

        }).catch((err) => {
          console.log(err);
        })
    }

  }

  render () {

    const signupBtnStyle = {
      margin:'auto',
      width:'100px',
      display:'block'
    };

    const radioLabel = {
      'marginLeft': '150px',
      'width': '40px'
    };

    const radioBox = {
      width: '350px',
      margin: 'auto',
      display: 'block',
      'marginTop': '14px',
    };

    return (
        <div id="loginbox" >
            <form id="loginform" className="form-vertical">
				        <div className="control-group normal_text"> <h2 id="login_header"><img height="50" width="50" src="/img/authenticase.jpg" alt="Logo" /> Authenticase</h2></div>
                <p className="help-block text-center"> Feilds marked with <i className="icon-asterisk" ></i>  are compulsory</p>

                  <div style={radioBox}>
                    <label className='radio-inline'>
                    <input type="radio" name="userType"   value="Bettor" onChange={this.onValueChange}/> Bettor</label>
                    <label className='radio-inline' style={radioLabel}>
                    <input type="radio" name="userType"  onChange={this.onValueChange} value="Handicapper"/> Handicapper</label>
                    {this.state.error.userType && <span className="help-block">{this.state.error.userType}</span>}
                  </div>






                <div className="control-group">
                <label className= "form-label">First name <i className="icon-asterisk" ></i></label>
                    <div className="controls">
                        <div className="main_input_box">
                            <span className="add-on bg_lg"><i className="icon-user"> </i></span>
                            <input type="text" onChange={this.onValueChange} name="firstName" placeholder="First name" />
                            {this.state.error.firstName && <span className="help-block">{this.state.error.firstName}</span>}
                        </div>
                    </div>
                </div>
                <div className="control-group">
                <label className= "form-label">Last Name <i className="icon-asterisk" ></i> </label>
                    <div className="controls">
                        <div className="main_input_box">
                            <span className="add-on bg_lg"><i className="icon-user"></i></span>
                            <input type="text" onChange={this.onValueChange} name="lastName"  placeholder="Last name" />
                            {this.state.error.lastName && <span className="help-block">{this.state.error.lastName}</span>}
                        </div>
                    </div>
                </div>
                <div className="control-group">
                <label className= "form-label">Company name:</label>
                    <div className="controls">
                        <div className="main_input_box">
                            <span className="add-on bg_lg"><i className="icon-th"></i></span>
                            <input type="text" onChange={this.onValueChange} name="company" placeholder="Company name" />
                            {this.state.error.company && <span className="help-block">{this.state.error.company}</span>}
                        </div>
                    </div>
                </div>
                <div className="control-group">
                <label className= "form-label">Email address <i className="icon-asterisk" ></i></label>
                    <div className="controls">
                        <div className="main_input_box">
                            <span className="add-on bg_lg"><i className="icon-envelope"></i></span>
                            <input type="email" placeholder="Email address" onChange={this.onValueChange} name="email"/>
                            {this.state.error.email && <span className="help-block">{this.state.error.email}</span>}
                        </div>
                    </div>
                </div>
                <div className="control-group">
                    <label className= "form-label">Date of birth <i className="icon-asterisk" ></i></label>
                    <div className="controls">
                        <div className="main_input_box">
                            <span className="add-on bg_lg"><i className="icon-calendar"></i></span>
                            <input type="date" placeholder="mm/dd/yyyy" onChange={this.onValueChange} name="dob" />
                            {this.state.error.dob && <span className="help-block">{this.state.error.dob}</span>}
                        </div>
                    </div>
                </div>
                <div className="control-group">
                    <label className= "form-label">Phone number <i className="icon-asterisk" ></i></label>
                    <div className="controls">
                        <div className="main_input_box">
                            <span className="add-on bg_lg"><i className="icon-phone"></i></span>
                            <input type="tel" onChange={this.onValueChange} name="phoneNumber" placeholder="Phone number" />
                            {this.state.error.phoneNumber && <span className="help-block">{this.state.error.phoneNumber}</span>}
                        </div>
                    </div>
                </div>

                <div className="control-group">
                <label className= "form-label">Password <i className="icon-asterisk" ></i></label>
                    <div className="controls">
                        <div className="main_input_box">
                            <span className="add-on bg_lg"><i className="icon-lock"></i></span>
                            <input type="password" placeholder="Password" onChange={this.onValueChange} name="password" />
                            {this.state.error.password && <span className="help-block">{this.state.error.password}</span>}
                        </div>
                    </div>
                </div>
                <div className="control-group">
                <label className= "form-label">Confirm password <i className="icon-asterisk" ></i></label>
                    <div className="controls">
                        <div className="main_input_box">
                            <span className="add-on bg_lg"><i className="icon-lock"></i></span>
                            <input type="password" placeholder="Confirm password"  onChange={this.onValueChange} name="confirmPassword"/>
                        </div>
                    </div>
                </div>

                <button type="button"className="btn btn-success" style={signupBtnStyle} onClick={this.createUser}> Sign up</button>


                <div className="form-actions">
                <p className="help-block text-center"> Already Have an account? </p>
                    <span><Link to='/login' type="submit"  style={signupBtnStyle} className="btn btn-info">Login</Link></span>
                </div>
            </form>
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


export default connect (mapStateToProps, mapDispatchToProps)(Signup);
