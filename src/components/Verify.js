import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Verify extends Component {

  constructor (props) {
    super(props);
    this.state = {
      verified : false
    }
    console.log(this.props.match.params.email);
  }

  handleVerification () {
    const email = this.props.match.params.email;
    // make api call
  }

  render () {
    return (
      <Redirect to="/dashboard" />
    );
  }

}


export default Verify;
