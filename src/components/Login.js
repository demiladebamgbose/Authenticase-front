import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/userActions';



class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
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

                <Link to="/dashboard"><button type="button"className="btn btn-success" style={loginBtnStyle}> Log in</button></Link>

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
