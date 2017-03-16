import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import Logo from '../components/Logo';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
    };

    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleKeyPressEnter = this.handleKeyPressEnter.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.returnInitialState = this.returnInitialState.bind(this);
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

  returnInitialState() {
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  }

  handleSignUp() {
    this.returnInitialState();
    console.log('Clicked');
  }

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <div className="sign-wrapper">
          <Logo />
          <TextField
            hintText="Имя пользователя"
            floatingLabelText="Имя пользователя"
            value={name}
            onChange={this.handleInputValue('name')}
            onKeyPress={this.handleKeyPressEnter}
          />
          <TextField
            hintText="Email адрес"
            floatingLabelText="Email адрес"
            value={email}
            onChange={this.handleInputValue('email')}
            onKeyPress={this.handleKeyPressEnter}
          />
          <TextField
            hintText="Пароль"
            floatingLabelText="Пароль"
            type="password"
            value={password}
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
            onClick={() => { }}
          />
        </div>
      </div>
    );
  }
}

export default SignUp;
