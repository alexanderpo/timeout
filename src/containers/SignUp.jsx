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

class SignUp extends Component {

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
            onClick={() => { console.log('clicked'); }}
          />
        </div>
      </div>
    );
  }
}

export default SignUp;
