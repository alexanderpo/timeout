import React, { Component, PropTypes } from 'react';
import { TextField, RaisedButton, Avatar, Toggle } from 'material-ui';
import PasswordField from 'material-ui-password-field';
import _ from 'lodash';
import { signUpValidate } from '../../utils/inputValidation';
import UserProfilePhoto from '../../styles/images/user.png';

const propTypes = {
  data: PropTypes.object,
};

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.data.name,
      email: this.props.data.email,
      password: '',
      errorName: '',
      errorEmail: '',
      errorPassword: '',
      profileImage: '',
      changePassToggled: false,
    };

    this.handleProfileImage = this.handleProfileImage.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.clearInputFields = this.clearInputFields.bind(this);
    this.handleSaveChanges = this.handleSaveChanges.bind(this);
    this.handleKeyPressEnter = this.handleKeyPressEnter.bind(this);
  }

  componentWillUnmount() {
    this.clearInputFields();
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
      this.handleSaveChanges();
    }
  }

  handleProfileImage(event) {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onload = (upload) => {
      this.setState({
        profileImage: upload.target.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  handleSaveChanges() {
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
      this.clearInputFields();
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

  render() {
    const {
      name,
      email,
      password,
      errorName,
      errorEmail,
      errorPassword,
      profileImage,
      changePassToggled,
    } = this.state;

    return (
      <div>
        <div className="user-profile-wrapper">
          <Avatar
            size={250}
            className="user-profile-image"
            src={!profileImage ? UserProfilePhoto : profileImage}
            onClick={() => { document.getElementById('image-loader').click(); }}
          />
          <input
            id="image-loader"
            type="file"
            accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|images/*"
            onChange={this.handleProfileImage}
          />
          <TextField
            hintText="Имя пользователя"
            floatingLabelText="Имя пользователя"
            value={name}
            errorText={errorName}
            onKeyPress={this.handleKeyPressEnter}
            onChange={this.handleInputValue('name')}
          />
          <TextField
            hintText="Email адрес"
            floatingLabelText="Email адрес"
            value={email}
            errorText={errorEmail}
            onKeyPress={this.handleKeyPressEnter}
            onChange={this.handleInputValue('email')}
          />
          <Toggle
            label="Изменить пароль"
            toggled={changePassToggled}
            onToggle={() => { this.setState({ changePassToggled: !changePassToggled }); }}
          />
          { changePassToggled ?
            <PasswordField
              style={{ width: '256px' }}
              floatingLabelText="Введите новый пароль"
              type="password"
              value={password}
              errorText={errorPassword}
              onKeyPress={this.handleKeyPressEnter}
              onChange={this.handleInputValue('password')}
            /> : null
          }
          <RaisedButton
            className="save-button"
            label="Сохранить"
            primary={true}
            onTouchTap={this.handleSaveChanges}
          />
        </div>
      </div>
    );
  }
}

UserProfile.propTypes = propTypes;
export default UserProfile;
