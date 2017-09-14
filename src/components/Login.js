import React, { Component } from 'react';

class Login extends Component {

  render () {
    return (

        <div id="loginbox">
            <form id="loginform" className="form-vertical">
				        <div className="control-group normal_text"> <h2 id="login_header"><img height="50" width="50" src="/img/authenticase.jpg" alt="Logo" /> Authenticase</h2></div>
                <div className="control-group">
                    <div className="controls">
                        <div className="main_input_box">
                            <span className="add-on bg_lg"><i className="icon-user"> </i></span><input type="text" placeholder="Username" />
                        </div>
                    </div>
                </div>
                <div className="control-group">
                    <div className="controls">
                        <div className="main_input_box">
                            <span className="add-on bg_ly"><i className="icon-lock"></i></span><input type="password" placeholder="Password" />
                        </div>
                    </div>
                </div>
                <div className="form-actions">
                    <span className="pull-left"><a className="flip-link btn btn-info" id="to-recover">Lost password?</a></span>
                    <span className="pull-right"> <a type="submit"  className="btn btn-success" > Login</a></span>
                </div>
            </form>
            <form id="recoverform" action="#" className="form-vertical">
				        <p className="normal_text">Enter your e-mail address below and we will send you instructions how to recover a password.</p>
                     <div className="controls">
                        <div className="main_input_box">
                            <span className="add-on bg_lo"><i className="icon-envelope"></i></span><input type="text" placeholder="E-mail address" />
                        </div>
                    </div>

                <div className="form-actions">
                    <span className="pull-left"><a href="/" className="flip-link btn btn-success" id="to-login">&laquo; Back to login</a></span>
                    <span className="pull-right"><a className="btn btn-info">Reecover</a></span>
                </div>
            </form>
        </div>
    );
  }
}

export default Login;
