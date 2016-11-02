import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';

class SignIn extends Component {
  render() {
    return (
      <div className="signin-wrapper">
        <TextField
          hintText="Username"
          floatingLabelText="Username"
        />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"
        />
        <RaisedButton
          className="signin-button"
          label="Sign In"
          primary={true}
        />
        <RaisedButton
          className="signin-button"
          label="Register"
          primary={true}
        />
      </div>
    );
  }
}

export default SignIn;
