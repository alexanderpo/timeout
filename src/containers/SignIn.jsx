import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import Logo from '../components/Logo';

class SignIn extends Component {
  render() {
    return (
      <div>
        <div className="sign-wrapper">
          <Logo />
          <TextField
            hintText="Имя пользователя"
            floatingLabelText="Имя пользователя"
          />
          <TextField
            hintText="Пароль"
            floatingLabelText="Пароль"
            type="password"
          />
          <RaisedButton
            className="sign-button"
            label="Войти"
            primary={true}
          />
          <RaisedButton
            className="sign-button"
            label="Зарегистрироваться"
            primary={true}
            onClick={() => { }}
          />
        </div>
      </div>
    );
  }
}

export default SignIn;
