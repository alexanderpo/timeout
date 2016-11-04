import React, { Component, PropTypes } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

const propTypes = {
  actions: PropTypes.shape({
    push: PropTypes.func,
  }),
};

class SignIn extends Component {
  render() {
    return (
      <div className="pre-enter-wrapper">
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
          className="pre-enter-button"
          label="Sign In"
          primary={true}
        />
        <RaisedButton
          className="pre-enter-button"
          label="Register"
          primary={true}
          onClick={() => { this.props.actions.push('/signup'); }}
        />
      </div>
    );
  }
}

SignIn.propTypes = propTypes;

export default connect(null, dispatch => ({
  actions: bindActionCreators({
    push,
  }, dispatch),
}))(SignIn);
