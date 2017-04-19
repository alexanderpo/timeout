import React, { Component, PropTypes } from 'react';
import { TextField, RaisedButton, Snackbar } from 'material-ui';
import PasswordField from 'material-ui-password-field';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import _ from 'lodash';
import Logo from '../components/Logo';
import { signUpValidate } from '../utils/inputValidation';
import { signUp } from '../actions/user';

const propTypes = {
  actions: PropTypes.shape({
    signUp: PropTypes.func,
    push: PropTypes.func,
  }),
};

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      errorName: '',
      errorEmail: '',
      errorPassword: '',
      dialogBoxIsOpen: false,
      dialogBoxText: '',
    };

    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleKeyPressEnter = this.handleKeyPressEnter.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.clearInputFields = this.clearInputFields.bind(this);
  }

  handleInputValue(key) {
    return (event) => {
      const value = event.target.value;
      this.setState({
        [key]: value,
      });
    };
  }

  handleKeyPressEnter(event) {
    if (event.key === 'Enter') {
      this.handleSignUp();
    }
  }

  clearInputFields() {
    this.setState({
      name: '',
      email: '',
      password: '',
      errorName: '',
      errorEmail: '',
      errorPassword: '',
    });
  }

  handleSignUp() {
    const { name, email, password } = this.state;
    const values = { name, email, password };
    const errors = signUpValidate(values);

    if (!_.isEmpty(errors)) {
      this.setState({
        errorName: errors.name,
        errorEmail: errors.email,
        errorPassword: errors.password,
      });
    } else {
      this.props.actions.signUp(name, email, password)
      .then((action) => {
        if (action.payload.error) {
          this.setState({
            dialogBoxIsOpen: true,
            dialogBoxText: action.payload.error,
          });
        } else {
          this.setState({
            dialogBoxIsOpen: true,
            dialogBoxText: 'Вы успешно зарегистрированы, можете войти',
          });
          this.clearInputFields();
          setTimeout(() => {
            this.props.actions.push('/signin');
          }, 2500);
        }
      });
    }
  }

  render() {
    const {
      name,
      email,
      password,
      errorName,
      errorEmail,
      errorPassword,
      dialogBoxIsOpen,
      dialogBoxText,
    } = this.state;

    const { actions } = this.props;

    return (
      <div>
        <div className="sign-wrapper">
          <Logo />
          <TextField
            hintText="Имя пользователя"
            floatingLabelText="Имя пользователя"
            value={name}
            errorText={errorName}
            onChange={this.handleInputValue('name')}
            onKeyPress={this.handleKeyPressEnter}
          />
          <TextField
            hintText="Email адрес"
            floatingLabelText="Email адрес"
            value={email}
            errorText={errorEmail}
            onChange={this.handleInputValue('email')}
            onKeyPress={this.handleKeyPressEnter}
          />
          <PasswordField
            style={{ width: '256px' }}
            floatingLabelText="Введите пароль"
            type="password"
            value={password}
            errorText={errorPassword}
            onChange={this.handleInputValue('password')}
            onKeyPress={this.handleKeyPressEnter}
          />
          <RaisedButton
            className="sign-up-button"
            label="Зарегистрироваться"
            primary={true}
            onTouchTap={this.handleSignUp}
          />
          <RaisedButton
            className="back-sign-up-button"
            label="Назад"
            onClick={() => { actions.push('/signin'); }}
          />
        </div>
        <Snackbar
          className="dialog-box"
          open={dialogBoxIsOpen}
          message={dialogBoxText}
          autoHideDuration={2500}
          onRequestClose={() => { this.setState({ dialogBoxIsOpen: false }); }}
        />
      </div>
    );
  }
}

SignUp.propTypes = propTypes;

export default connect(null, dispatch => ({
  actions: bindActionCreators({
    signUp,
    push,
  }, dispatch),
}))(SignUp);
