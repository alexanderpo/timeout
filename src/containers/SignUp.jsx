import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { TextField, RaisedButton, Snackbar } from 'material-ui';
import _ from 'lodash';
import { createUser } from '../actions/user';
import { signUpValidator } from '../utils/validators';

const propTypes = {
  actions: PropTypes.shape({
    createUser: PropTypes.func,
    push: PropTypes.func, // eslint-disable-line
  }),
};

const styles = {
  logoText: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontWeight: 200,
    fontSize: 20,
    textTransform: 'uppercase',
  },
  sloganText: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontWeight: 200,
    fontSize: 14,
    textTransform: 'lowercase',
  },
};

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      errorNameText: '',
      errorEmailText: '',
      errorPasswordText: '',
      autoHideMessageBoxTime: 4000,
      messageBoxIsOpen: false,
    };

    this.handleSignUp = this.handleSignUp.bind(this);
  }

  changeValue(key) {
    return (event) => {
      const value = event.target.value;
      this.setState({
        [key]: value,
      });
    };
  }

  handleSignUp() {
    const { name, email, password } = this.state;
    const values = { name, email, password };
    const errors = signUpValidator(values);

    if (!_.isEmpty(errors)) {
      this.setState({
        errorNameText: errors.name,
        errorEmailText: errors.email,
        errorPasswordText: errors.password,
      });
    } else {
      this.props.actions.createUser(name, email, password)
      .then(() => {
        this.setState({
          name: '',
          email: '',
          password: '',
          errorNameText: '',
          errorEmailText: '',
          errorPasswordText: '',
          messageBoxIsOpen: true,
        });
      });
    }
  }

  render() {
    const { actions } = this.props;
    const {
      name,
      email,
      password,
      errorNameText,
      errorEmailText,
      errorPasswordText,
      messageBoxIsOpen,
      autoHideMessageBoxTime,
    } = this.state;

    return (
      <div>
        <div className="pre-enter-wrapper">
          <div>
            <div style={styles.logoText}>timeout application</div>
            <div style={styles.sloganText}>Spend time with interest</div>
          </div>
          <TextField
            hintText="Pick a username"
            floatingLabelText="Username"
            errorText={errorNameText}
            value={name}
            onChange={this.changeValue('name')}
          />
          <TextField
            hintText="Your email address"
            floatingLabelText="Email"
            errorText={errorEmailText}
            value={email}
            onChange={this.changeValue('email')}
          />
          <TextField
            hintText="Password"
            floatingLabelText="Password"
            errorText={errorPasswordText}
            type="password"
            value={password}
            onChange={this.changeValue('password')}
          />
          <RaisedButton
            className="sign-up-button"
            label="Register"
            primary={true}
            onTouchTap={this.handleSignUp}
          />
          <RaisedButton
            className="back-sign-up-button"
            label="Back"
            onClick={() => { actions.push('/signin'); }}
          />
        </div>
        <Snackbar
          open={messageBoxIsOpen}
          message={'Now you can sign in to your account!'}
          autoHideDuration={autoHideMessageBoxTime}
          action="SignIn"
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
