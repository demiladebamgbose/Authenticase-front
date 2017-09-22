import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {

  render () {

    const signupBtnStyle = {
      margin:'auto',
      width:'100px',
      display:'block'
    };

    const radioLabel = {
      'margin-left': '150px',
      'width': '40px'
    };

    const radioBox = {
      width: '350px',
      margin: 'auto',
      display: 'block',
      'margin-top': '14px',
    };




    return (
        <div id="loginbox" >
            <form id="loginform" className="form-vertical">
				        <div className="control-group normal_text"> <h2 id="login_header"><img height="50" width="50" src="/img/authenticase.jpg" alt="Logo" /> Authenticase</h2></div>
                <p className="help-block text-center"> Feilds marked with <i className="icon-asterisk" ></i>  are compulsory</p>

                  <div style={radioBox}>
                    <label className='radio-inline'><input type="radio" name="gender"  value="bettor" /> Bettor</label>
                    <label className='radio-inline' style={radioLabel}><input type="radio" name="gender"  value="handicapper"/> Handicapper</label>
                  </div>






                <div className="control-group">
                <label className= "form-label">First name <i className="icon-asterisk" ></i></label>
                    <div className="controls">
                        <div className="main_input_box">
                            <span className="add-on bg_lg"><i className="icon-user"> </i></span><input type="text" placeholder="First name" />
                        </div>
                    </div>
                </div>
                <div className="control-group">
                <label className= "form-label">Last Name <i className="icon-asterisk" ></i> </label>
                    <div className="controls">
                        <div className="main_input_box">
                            <span className="add-on bg_lg"><i className="icon-user"></i></span><input type="text" placeholder="Last name" />
                        </div>
                    </div>
                </div>
                <div className="control-group">
                <label className= "form-label">Company name:</label>
                    <div className="controls">
                        <div className="main_input_box">
                            <span className="add-on bg_lg"><i className="icon-th"></i></span><input type="text" placeholder="Company name" />
                        </div>
                    </div>
                </div>
                <div className="control-group">
                <label className= "form-label">Email address <i className="icon-asterisk" ></i></label>
                    <div className="controls">
                        <div className="main_input_box">
                            <span className="add-on bg_lg"><i className="icon-envelope"></i></span><input type="email" placeholder="Email address" />
                        </div>
                    </div>
                </div>
                <div className="control-group">
                    <label className= "form-label">Date of birth <i className="icon-asterisk" ></i></label>
                    <div className="controls">
                        <div className="main_input_box">
                            <span className="add-on bg_lg"><i className="icon-calendar"></i></span><input type="date" placeholder="D.O.B" />
                        </div>
                    </div>
                </div>
                <div className="control-group">
                    <label className= "form-label">Phone number <i className="icon-asterisk" ></i></label>
                    <div className="controls">
                        <div className="main_input_box">
                            <span className="add-on bg_lg"><i className="icon-phone"></i></span><input type="tel" placeholder="Phone number" />
                        </div>
                    </div>
                </div>

                <div className="control-group">
                <label className= "form-label">Password <i className="icon-asterisk" ></i></label>
                    <div className="controls">
                        <div className="main_input_box">
                            <span className="add-on bg_lg"><i className="icon-lock"></i></span><input type="password" placeholder="Password" />
                        </div>
                    </div>
                </div>
                <div className="control-group">
                <label className= "form-label">Confirm password <i className="icon-asterisk" ></i></label>
                    <div className="controls">
                        <div className="main_input_box">
                            <span className="add-on bg_lg"><i className="icon-lock"></i></span><input type="password" placeholder="Password" />
                        </div>
                    </div>
                </div>

                <Link to='/dashboard'><button type="button"className="btn btn-success" style={signupBtnStyle}> Sign up</button></Link>


                <div className="form-actions">
                <p className="help-block text-center"> Already Have an account? </p>

                    <span><Link to='/login'> <a type="submit"  style={signupBtnStyle} className="btn btn-info" > Login</a> </Link></span>
                </div>
            </form>
        </div>
    );
  }
}

export default Signup;
