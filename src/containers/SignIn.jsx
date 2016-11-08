import React, { Component, PropTypes } from 'react';
import { TextField, RaisedButton, Snackbar } from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { signIn } from '../actions/user';

const propTypes = {
  message: PropTypes.string,
  success: PropTypes.bool,
  actions: PropTypes.shape({
    signIn: PropTypes.func,
    push: PropTypes.func,
  }),
};

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
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
    const { name, password, messageBoxIsOpen, autoHideMessageBoxTime } = this.state;

    return (
      <div>
        <div className="pre-enter-wrapper">
          <TextField
            hintText="Username"
            floatingLabelText="Username"
            value={name}
            onChange={this.changeValue('name')}
          />
          <TextField
            hintText="Password"
            floatingLabelText="Password"
            value={password}
            type="password"
            onChange={this.changeValue('password')}
          />
          <RaisedButton
            className="pre-enter-button"
            label="Sign In"
            primary={true}
            onClick={() => {
              actions.signIn(name, password)
              .then(() => {
                this.props.success ? // eslint-disable-line
                  this.setState({
                    name: '',
                    password: '',
                    messageBoxIsOpen: true,
                  }) : this.setState({ messageBoxIsOpen: true });
                actions.push('/');
              });
            }}
          />
          <RaisedButton
            className="pre-enter-button"
            label="Register"
            primary={true}
            onClick={() => { actions.push('/signup'); }}
          />
        </div>
        <Snackbar
          open={messageBoxIsOpen}
          message={this.props.message}
          autoHideDuration={autoHideMessageBoxTime}
          onRequestClose={() => { this.setState({ messageBoxIsOpen: false }); }}
        />
      </div>
    );
  }
}

SignIn.propTypes = propTypes;

export default connect((state) => {
  const success = state.user.success;
  const message = state.user.message ?
    state.user.message : '';

  return {
    success,
    message,
  };
}, dispatch => ({
  actions: bindActionCreators({
    signIn,
    push,
  }, dispatch),
}))(SignIn);
