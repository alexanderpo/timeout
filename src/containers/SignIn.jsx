import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { TextField, RaisedButton, Snackbar } from 'material-ui';
import _ from 'lodash';
import { signIn } from '../actions/user';
import Logo from '../components/Logo';
import { signInValidate } from '../utils/inputValidation';

const propTypes = {
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
      errorName: '',
      errorPassword: '',
      dialogBoxIsOpen: false,
      dialogBoxText: '',
    };

    this.handleInputValue = this.handleInputValue.bind(this);
    this.clearInputFields = this.clearInputFields.bind(this);
    this.handleKeyPressEnter = this.handleKeyPressEnter.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
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
      this.handleSignIn();
    }
  }

  clearInputFields() {
    this.setState({
      name: '',
      password: '',
      errorName: '',
      errorPassword: '',
    });
  }

  handleSignIn() {
    const { name, password } = this.state;
    const values = { name, password };
    const errors = signInValidate(values);

    if (!_.isEmpty(errors)) {
      this.setState({
        errorName: errors.name,
        errorPassword: errors.password,
      });
    } else {
      this.props.actions.signIn(name, password)
      .then((action) => {
        if (action.payload.error) {
          this.setState({
            dialogBoxIsOpen: true,
            dialogBoxText: action.payload.error,
          });
        } else {
          this.clearInputFields();
          this.props.actions.push('/');
        }
      });
    }
  }

  render() {
    const {
      name,
      password,
      errorName,
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
            hintText="Пароль"
            floatingLabelText="Пароль"
            type="password"
            value={password}
            errorText={errorPassword}
            onChange={this.handleInputValue('password')}
            onKeyPress={this.handleKeyPressEnter}
          />
          <RaisedButton
            className="sign-in-button"
            label="Войти"
            primary={true}
            onTouchTap={this.handleSignIn}
          />
          <RaisedButton
            className="back-sign-up-button"
            label="Зарегистрироваться"
            primary={true}
            onClick={() => { actions.push('/signup'); }}
          />
        </div>
        <Snackbar
          className="dialog-box"
          open={dialogBoxIsOpen}
          message={dialogBoxText}
          autoHideDuration={4000}
          onRequestClose={() => { this.setState({ dialogBoxIsOpen: false }); }}
        />
      </div>
    );
  }
}

SignIn.propTypes = propTypes;

export default connect(null, dispatch => ({
  actions: bindActionCreators({
    signIn,
    push,
  }, dispatch),
}))(SignIn);
