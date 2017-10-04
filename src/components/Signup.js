/*import React, { Component } from 'react';
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


  }

  _onValueChanged (e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  _validateForm () {
    let validated = true;
    let error = {};

    if (!this.state.userType) {
      error.userType= 'Are you joining as a handicapper or a bettor?';
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

    // if (!this.state.company) {
    //   error.company =  'Company  name is required';
    //   validated = false;
    // }

    if (!/^.+@.+\..{2,3}$/.test(this.state.email)) {
      error.email =  'Incorrect email format';
      validated = false;
    }

    if (!((/.{7,}/.test(this.state.password)) && (this.state.password === this.state.confirmPassword))) {
      error.password =  'Ensure passwords match, Password needs to be at least 7 characters';
      validated = false;
    }

    if (!/\d+/.test(this.state.phoneNumber)) {
      error.phoneNumber =  'A valid phone number is required';
      validated = false;
    }

    if (!
        ((/(0[1-9]|1[012])\/(0[1-9]|1[0-9]|2[0-9]|3[01])\/\d{4}/.test(this.state.dob))
        || (/^\d{4}[-/]\d{1,2}[-/]\d{1,2}$/.test(this.state.dob)))
      ) {
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

    const radioLabel = {
      'width': '40px',
      fontSize: '15px'
    };

    const radioBox = {
      'marginTop': '14px',
      color: '#666',
    };

    const errorBlock = {
      color: '#d81748',
      fontSize: '12px'
    }

    return (
        <div style={{width:'80%', margin:'auto', padding:'50px'}} className="z-depth-2 ">
            <form className="form-vertical">
				        <div className=" text-center" style={{color: '#fdcc52', marginBottom:'25px'}}> <h5 id="login_header"><img height="40" width="40" src="/img/authenticase.jpg" alt="Logo" /> Authenticase</h5></div>
                <p className="help-block text-center" style={{fontSize: '12px'}}> Feilds marked with <i className="icon-asterisk" ></i>  are compulsory</p><hr/>



                  <div style={radioBox} className="text-center">

                    <p style={{display:'inline',  marginRight: '44px', fontSize: '15px'}} >
                    <i className="fa fa-user-plus prefix grey-text" style={{ fontSize: '22px', lineHeight: '3', marginRight: '30px' }}>
                    </i>Join us as a <i className="icon-asterisk" ></i></p>

                    <label className='radio-inline' style={{fontSize: '15px'}}>
                    <input type="radio" name="userType"   value="Bettor" onChange={this.onValueChange}/> Bettor</label>

                    <p style={{display:'inline', marginLeft:'50px', marginRight: '50px', fontSize: '15px'}}>or  </p>

                    <label className='radio-inline' style={radioLabel}>
                    <input type="radio" name="userType"  onChange={this.onValueChange} value="Handicapper"/> Handicapper</label>
                    {this.state.error.userType && <span style= {errorBlock} className="help-block">{this.state.error.userType}</span>}
                  </div>

                  <div className="row ">
                    <div className="form-group col" style={{margin:'20px', marginTop:'20px'}}>
                          <div className="md-form">
                            <i className="fa fa-user prefix grey-text" style={{ fontSize: '22px', lineHeight: '3'}}></i>
                            <input type="text" id="firstName" className="form-control" onChange={this.onValueChange} name="firstName" value={this.state.firstName}/>
                            <label >First Name <i className="icon-asterisk" ></i></label>
                          </div>
                          {this.state.error.firstName && <span style= {errorBlock} className="help-block">{this.state.error.firstName}</span>}
                    </div>
                    <div className="form-group col" style={{margin:'20px', marginTop:'20px'}}>
                          <div className="md-form">
                            <i className="fa fa-user prefix grey-text" style={{ fontSize: '22px', lineHeight: '3'}}></i>
                            <input type="text" id="lastName" className="form-control" name="lastName" onChange={this.onValueChange} value={this.state.lastName}/>
                            <label >Last Name <i className="icon-asterisk"></i> </label>
                          </div>
                          {this.state.error.lastName && <span style= {errorBlock} className="help-block">{this.state.error.lastName}</span>}
                    </div>
                  </div>

                  <div className="row ">
                    <div className="form-group col" style={{margin:'20px', marginTop:'20px'}}>
                          <div className="md-form">
                            <i className="fa fa-envelope prefix grey-text" style={{ fontSize: '22px', lineHeight: '3'}}></i>
                            <input type="text" id="email" className="form-control" onChange={this.onValueChange} name="email" value={this.state.email}/>
                            <label>Email address <i className="icon-asterisk" ></i></label>
                          </div>
                          {this.state.error.email && <span style= {errorBlock} className="help-block">{this.state.error.email}</span>}
                    </div>
                    <div className="form-group col" style={{margin:'20px', marginTop:'20px'}}>
                          <div className="md-form">
                            <i className="fa fa-phone prefix grey-text" style={{ fontSize: '22px', lineHeight: '3'}}></i>
                            <input type="text" id="phoneNumber" className="form-control" name="phoneNumber" onChange={this.onValueChange} value={this.state.phoneNumber}/>
                            <label >Phone number <i className="icon-asterisk"></i></label>
                          </div>
                          {this.state.error.phoneNumber && <span style= {errorBlock} className="help-block">{this.state.error.phoneNumber}</span>}
                    </div>
                  </div>

                  <div className="row ">
                    <div className="form-group col" style={{margin:'20px', marginTop:'20px'}}>
                          <div className="md-form">
                            <div className="row">
                            <div className="col-xs-1">
                              <i className="fa fa-calendar prefix grey-text" style={{ fontSize: '22px', lineHeight: '3'}}></i>
                            </div>
                              <div className="col-xs-4">
                                <label style={{lineHeight:'3', marginLeft: '20px'}}> Date of birth <i className="icon-asterisk"></i></label>
                              </div>
                              <div className="col">
                              <input type="date" id="dob" className="form-control"  placeholder="mm/dd/yyyy"onChange={this.onValueChange} name="dob" value={this.state.dob}/>
                              </div>
                            </div>
                          </div>
                          {this.state.error.dob && <span style= {errorBlock} className="help-block">{this.state.error.dob}</span>}
                    </div>




                    <div className="form-group col" style={{margin:'20px', marginTop:'20px'}}>
                          <div className="md-form">
                            <i className="fa fa-th prefix grey-text" style={{ fontSize: '22px', lineHeight: '3'}}></i>
                            <input type="text" id="company" className="form-control" name="company" onChange={this.onValueChange} value={this.state.company}/>
                            <label>Company name</label>
                          </div>
                          {this.state.error.company && <span style= {errorBlock} className="help-block">{this.state.error.company}</span>}
                    </div>
                  </div>


                  <div className="row ">
                    <div className="form-group col" style={{margin:'20px', marginTop:'20px'}}>
                          <div className="md-form">
                            <i className="fa fa-lock prefix grey-text" style={{ fontSize: '22px', lineHeight: '3'}}></i>
                            <input type="password" id="password" className="form-control" onChange={this.onValueChange} name="password" value={this.state.password}/>
                            <label >Password <i className="icon-asterisk" ></i></label>
                          </div>
                          {this.state.error.password && <span style= {errorBlock} className="help-block">{this.state.error.password}</span>}
                    </div>

                    <div className="form-group col" style={{margin:'20px', marginTop:'20px'}}>
                          <div className="md-form">
                            <i className="fa fa-lock prefix grey-text" style={{ fontSize: '22px', lineHeight: '3'}}></i>
                            <input type="text" id="confirmPassword" className="form-control" name="confirmPassword" onChange={this.onValueChange} value={this.state.confirmPassword}/>
                            <label>Confirm Password <i className="icon-asterisk" ></i></label>
                          </div>
                    </div>
                  </div>


                  <div className="text-center">
                   <button type="button" className="btn btn-danger" onClick={this.createUser}> Sign up <i className="fa fa-user-plus"> </i></button>
                  </div>

                <div className="text-center" style={{marginTop:'20px'}}>
                  <h5 className="help-block" > Already Have an account? </h5>
                  <Link to='/login'> <button type="button"  className="btn btn-indigo">Login</button></Link>
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



*/

import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions  from '../actions/userActions';
import Script from 'react-load-script';
import $ from 'jquery';
import '../styles/iCheck/skins/flat/green.css';
import '../styles/select2/dist/css/select2.css';
import '../styles/switchery/dist/switchery.css';
import '../styles/starrr/dist/starrr.css';

class Signup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',lastName: '',company : '',email: '',password: '',
      confirmPassword: '',userType: '',dob: '',phoneNumber: '',error: {},
      requestSent:false

    }
    this.onValueChange = this._onValueChanged.bind(this);
    this.createUser = this._createUser.bind(this);
  }

  componentDidMount () {
    console.log(this.props);

    // var wizard = $("#wizard").steps({
    //   onFinished: function (event, currentIndex) {
    //     console.log("I set this in the constructor -- all finished");
    //     this.createUser();
    //   }
    // });
  }

  _onValueChanged (e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  _validateForm () {
    let validated = true;
    let error = {};

    // if (!this.state.userType) {
    //   error.userType= 'Are you joining as a handicapper or a bettor?';
    //   console.log(this.state)
    //   validated = false;
    // }


    if (!this.state.firstName) {
      error.firstName= 'First name cannot be empty';
      validated = false;
    }

    if (!this.state.lastName) {
      error.lastName =  'Last name cannot be empty';
      validated = false;
    }

    // if (!this.state.company) {
    //   error.company =  'Company  name is required';
    //   validated = false;
    // }

    if (!/^.+@.+\..{2,3}$/.test(this.state.email)) {
      error.email =  'Incorrect email format';
      validated = false;
    }

    if (!((/.{7,}/.test(this.state.password)) && (this.state.password === this.state.confirmPassword))) {
      error.password =  'Ensure passwords match, Password needs to be at least 7 characters';
      validated = false;
    }

    if (!/\d+/.test(this.state.phoneNumber)) {
      error.phoneNumber =  'A valid phone number is required';
      validated = false;
    }

    if (!
        ((/(0[1-9]|1[012])\/(0[1-9]|1[0-9]|2[0-9]|3[01])\/\d{4}/.test(this.state.dob))
        || (/^\d{4}[-/]\d{1,2}[-/]\d{1,2}$/.test(this.state.dob)))
      ) {
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
     if (validated) {
       const user = {
         name: {
           firstName : this.state.firstName,
           lastName: this.state.lastName
         },
         company: this.state.company,
         email: this.state.email,
         dob: dob,
         userType:"Handicapper",
         password: this.state.password,
         phoneNumber:this.state.phoneNumber
       };

       this.setState({requestSent: true});
       this.props.action.createUser(user).then(() => {
         this.setState({alertVisible: true});
         this.setState({
             firstName: '',
             lastName: '',
             company : '',
             email: '',
             password: '',
             confirmPassword: '',
             userType: '',
             dob: '',
             phoneNumber: '',
             error: {},
             requestSent: false
           });


          this.props.parentProps.history.push("/dashboard/handicapper");


         }).catch((err) => {
           console.log(err);
         })
      }

    }

  render () {
    return (

      <div >
      {this.state.requestSent && <div className="preload" style={{margin:"500px, 0px, 300px, 0"}}></div>}
      {!this.state.requestSent &&




      <div id="register" className="animate form registration_form">

        <section className="login_content" style={{width:'375px', margin:'auto',  }}>

        <form className="form-horizontal form-label-left">
         <h1>Create Account</h1>

              <div className="form_wizard wizard_horizontal" >


                       <div id="step-1">
                         <div className="row" style={{margin: '30px'}}>
                           <div className="radio" style={{display:'inline'}}>
                              <label>
                                <input type="radio" className="flat" name="userType"   value="Bettor" onChange={this.onValueChange}/> Bettor
                              </label>
                            </div>
                            <div className="radio" style={{display:'inline', marginLeft:'100px'}}>
                               <label>
                                 <input type="radio" className="flat"  name="userType"   value="Handicapper" onChange={this.onValueChange}/> Handicapper
                               </label>
                             </div>

                         </div>
                         {this.state.error.userType && <span style={{marginTop: "-18px", fontSize: "12px", color: "#d66b6b"}} className="help-block">{this.state.error.userType}</span>}

                         <div>
                           <input type="text" className="form-control" placeholder="First Name" required onChange={this.onValueChange} name="firstName" value={this.state.firstName} />
                           {this.state.error.firstName && <span style={{marginTop: "-18px", fontSize: "12px", color: "#d66b6b"}} className="help-block">{this.state.error.firstName}</span>}

                         </div>
                         <div>
                           <input type="text" className="form-control" placeholder="Last Name" required name="lastName" onChange={this.onValueChange} value={this.state.lastName}/>
                           {this.state.error.lastName && <span style={{marginTop: "-18px", fontSize: "12px", color: "#d66b6b"}} className="help-block">{this.state.error.lastName}</span>}
                         </div>
                         <div>
                           <input type="email" className="form-control" placeholder="Email" required  onChange={this.onValueChange} name="email" value={this.state.email}/>
                           {this.state.error.email && <span style={{marginTop: "-18px", fontSize: "12px", color: "#d66b6b"}} className="help-block">{this.state.error.email}</span>}
                         </div>



                       </div>
                       <div id="step-2">
                         <div>
                           <input type="text" className="form-control" placeholder="Phone Number" required name="phoneNumber" onChange={this.onValueChange} value={this.state.phoneNumber}/>

                           {this.state.error.phoneNumber && <span style={{marginTop: "-18px", fontSize: "12px", color: "#d66b6b"}} className="help-block">{this.state.error.phoneNumber}</span>}
                         </div>

                         <div>
                           <input type="email" className="form-control" placeholder="Company Name" required name="company" onChange={this.onValueChange} value={this.state.company}/>
                         </div>

                         <div>

                           <p style={{textAlign:"left" }}>Date of birth</p>
                             <input type="date" className="form-control" style={{marginBottom:'15px'}}placeholder="Date of birth" required placeholder="mm/dd/yyyy"onChange={this.onValueChange} name="dob" value={this.state.dob}/>

                             {this.state.error.dob && <span style={{marginTop: "-13px", fontSize: "12px", color: "#d66b6b"}} className="help-block">{this.state.error.dob}</span>}

                         </div>
                       </div>

                         <div>
                           <input type="password" className="form-control" placeholder="Password" required  onChange={this.onValueChange} name="password" value={this.state.password}/>
                           {this.state.error.password && <span style={{marginTop: "-18px", fontSize: "12px", color: "#d66b6b"}} className="help-block">{this.state.error.password}</span>}
                         </div>
                         <div>
                           <input type="password" className="form-control" placeholder="Confirm Password" required name="confirmPassword" onChange={this.onValueChange} value={this.state.confirmPassword} />
                         </div>

                         <div className="form-group text-center">
                         <button type="button" className="btn btn-default" onClick={this.createUser}>Sign up</button>
                         </div>

                     </div>


                     <div className="clearfix"></div>

                     <div className="separator">
                       <p className="change_link">Already a member ?
                         <a href="#signin" className="to_register" style={{color:'#7585D9'}}> Log in </a>
                       </p>

                       <div className="clearfix"></div>
                       <br />

              <div>
              <div className="clearfix"></div> <hr/>
                <p>© 2008-2017, Authenticase.com , Inc</p>
              </div>
            </div>


            </form>
        </section>
        </div>
       }

       <Script url="/vendor/iCheck/icheck.js"/>
       <Script url="/vendor/select2/dist/js/select2.js"/>
       <Script url="/vendor/starrr/dist/starrr.js"/>
       <Script url="/vendor/switchery/dist/switchery.js"/>

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

export default connect (mapStateToProps, mapDispatchToProps)(Signup);
