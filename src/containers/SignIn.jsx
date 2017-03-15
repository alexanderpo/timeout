import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';

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

class SignIn extends Component {
  render() {
    return (
      <div>
        <div className="pre-enter-wrapper">
          <div>
            <div style={styles.logoText}>timeout application</div>
            <div style={styles.sloganText}>потратьте время с пользой</div>
          </div>
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
            className="pre-enter-button"
            label="Войти"
            primary={true}
          />
          <RaisedButton
            className="pre-enter-button"
            label="Зарегистрироваться"
            primary={true}
            onClick={() => { console.log('clicked'); }}
          />
        </div>
      </div>
    );
  }
}

export default SignIn;
