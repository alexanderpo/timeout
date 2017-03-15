import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import Logo from '../components/Logo';

class SignUp extends Component {

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
            hintText="Email адрес"
            floatingLabelText="Email адрес"
          />
          <TextField
            hintText="Пароль"
            floatingLabelText="Пароль"
            type="password"
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
            onClick={() => { }}
          />
        </div>
      </div>
    );
  }
}

export default SignUp;
