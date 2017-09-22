import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/userActions';




class Login extends Component {

  constructor(props) {
      super(props);
      this.state = {
          email: '',
          password: '',
          error: {},
          validated: false
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


  _logInUser() {
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

  render () {

    const loginBtnStyle = {
      margin:'auto',
      width:'100px',
      display:'block'
    };


    return (
        <div id="loginbox">
            <form id="loginform" className="form-vertical">
				        <div className="control-group normal_text"> <h2 id="login_header"><img height="50" width="50" src="/img/authenticase.jpg" alt="Logo" /> Authenticase</h2></div>
                <div className="form-group control-group">
                    <div className="controls">
                        <div className="main_input_box">
                            <span className="add-on bg_lg"><i className="icon-user"> </i></span><input type="text"  className="form-control"placeholder="Email address" name="email" onChange={this.onValueChange} value={this.state.email}/>
                        </div>
                        {this.state.error.email && <span className="help-block">{this.state.error.email}</span>}
                    </div>
                </div>
                <div className="control-group">
                    <div className="controls">
                        <div className="main_input_box">
                            <span className="add-on bg_ly"><i className="icon-lock"></i></span><input type="password" placeholder="Password"  name="password" onChange={ this.onValueChange } value={ this.state.password }/>
                        </div>
                        {this.state.error.password && <span className="help-block">{this.state.error.password}</span>}
                    </div>
                </div>

                <button type="button" onClick={this.logInUser}className="btn btn-success" style={loginBtnStyle}> Log in</button>

                <div className="form-actions">
                    <span className="pull-left"><a className="flip-link btn btn-info" id="to-recover">Fogot password?</a></span>
                    <span className="pull-right"> <Link to="/signup"><a type="submit"  className="btn btn-info"> or Sign up</a></Link></span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
