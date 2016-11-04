import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { TextField, RaisedButton } from 'material-ui';
import { createUser } from '../actions/user';

const propTypes = {
  actions: PropTypes.shape({
    createUser: PropTypes.func,
    push: PropTypes.func,
  }),
};

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
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
    const { username, email, password } = this.state;

    return (
      <div className="pre-enter-wrapper">
        <TextField
          hintText="Pick a username"
          floatingLabelText="Username"
          onChange={this.changeValue('username')}
        />
        <TextField
          hintText="Your email address"
          floatingLabelText="Email"
          onChange={this.changeValue('email')}
        />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"
          onChange={this.changeValue('password')}
        />
        <RaisedButton
          className="pre-enter-button"
          label="Register"
          primary={true}
          onClick={() => { actions.createUser(username, email, password); }}
        />
        <RaisedButton
          className="pre-enter-button"
          label="Back"
          onClick={() => { actions.push('/signin'); }}
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
