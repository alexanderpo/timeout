import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { TextField, RaisedButton, Snackbar } from 'material-ui';
import { createUser } from '../actions/user';

const propTypes = {
  actions: PropTypes.shape({
    createUser: PropTypes.func, // eslint-disable-line
    push: PropTypes.func, // eslint-disable-line
  }),
};

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      errorText: '',
      autoHideMessageBoxTime: 4000,
      messageBoxIsOpen: false,
    };
  }

  changeValue(key) {
    return (event) => {
      const value = event.target.value;
      this.setState({
        [key]: value,
      });
    };
  }

  render() {
    const { actions } = this.props;
    const {
      name,
      email,
      password,
      errorText,
      messageBoxIsOpen,
      autoHideMessageBoxTime,
    } = this.state;

    return (
      <div>
        <div className="pre-enter-wrapper">
          <TextField
            hintText="Pick a username"
            floatingLabelText="Username"
            errorText={errorText}
            value={name}
            onChange={this.changeValue('name')}
          />
          <TextField
            hintText="Your email address"
            floatingLabelText="Email"
            errorText={errorText}
            value={email}
            onChange={this.changeValue('email')}
          />
          <TextField
            hintText="Password"
            floatingLabelText="Password"
            errorText={errorText}
            type="password"
            value={password}
            onChange={this.changeValue('password')}
          />
          <RaisedButton
            className="pre-enter-button"
            label="Register"
            primary={true}
            onClick={() => {
              actions.createUser(name, email, password)
              .then(() => {
                this.setState({
                  name: '',
                  email: '',
                  password: '',
                  messageBoxIsOpen: true,
                });
              });
            }}
          />
          <RaisedButton
            className="pre-enter-button"
            label="Back"
            onClick={() => { actions.push('/signin'); }}
          />
        </div>
        <Snackbar
          open={messageBoxIsOpen}
          message={'Now you can sign in to your account!'}
          autoHideDuration={autoHideMessageBoxTime}
          action="Sign In"
          onActionTouchTap={() => { actions.push('/signin'); }}
          onRequestClose={() => { this.setState({ messageBoxIsOpen: false }); }}
        />
      </div>
    );
  }
}

Register.propTypes = propTypes;

export default connect(null, dispatch => ({
  actions: bindActionCreators({
    createUser,
    push,
  }, dispatch),
}))(Register);
