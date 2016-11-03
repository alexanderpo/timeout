import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { TextField, RaisedButton } from 'material-ui';

const propTypes = {
  actions: PropTypes.shape({
    push: PropTypes.func,
  }),
};

class Register extends Component {
  render() {
    return (
      <div className="pre-enter-wrapper">
        <TextField
          hintText="Pick a username"
          floatingLabelText="Username"
        />
        <TextField
          hintText="Your email address"
          floatingLabelText="Email"
          type="password"
        />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"
        />
        <RaisedButton
          className="pre-enter-button"
          label="Register"
          primary={true}
        />
        <RaisedButton
          className="pre-enter-button"
          label="Back"
          primary={true}
          onClick={() => { this.props.actions.push('signin'); }}
        />
      </div>
    );
  }
}

Register.propTypes = propTypes;

export default connect(null, dispatch => ({
  actions: bindActionCreators({
    push,
  }, dispatch),
}))(Register);
