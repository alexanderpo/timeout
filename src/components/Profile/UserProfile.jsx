import React, { Component, PropTypes } from 'react';
import { TextField, RaisedButton, Avatar, Toggle, Snackbar } from 'material-ui';
import PasswordField from 'material-ui-password-field';
import _ from 'lodash';
import { updateUserValidate } from '../../utils/inputValidation';
import UserProfilePhoto from '../../styles/images/user.png';

const propTypes = {
  data: PropTypes.object,
  updateProfile: PropTypes.func,
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
      image: this.props.data.image,
      dialogBoxText: '',
      dialogBoxIsOpen: false,
      passwordToggleIsOpen: false,
    };

    this.handleProfileImage = this.handleProfileImage.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.clearInputFields = this.clearInputFields.bind(this);
    this.handleSaveChanges = this.handleSaveChanges.bind(this);
    this.handleKeyPressEnter = this.handleKeyPressEnter.bind(this);
    this.handlePasswordToggle = this.handlePasswordToggle.bind(this);
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

  handlePasswordToggle() {
    const { passwordToggleIsOpen } = this.state;
    this.setState({
      password: '',
      errorPassword: '',
      passwordToggleIsOpen: !passwordToggleIsOpen,
    });
  }

  handleProfileImage(event) {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onload = (upload) => {
      this.setState({
        image: upload.target.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  handleSaveChanges() {
    const { name, email, password, passwordToggleIsOpen } = this.state;
    const { data, updateProfile } = this.props;
    const values = { name, email, password, passwordToggleIsOpen };
    const errors = updateUserValidate(values);

    if (!_.isEmpty(errors)) {
      this.setState({
        errorName: errors.name,
        errorEmail: errors.email,
        errorPassword: errors.password,
      });
    } else {
      updateProfile(data.id, name, email, password, passwordToggleIsOpen)
      .then((action) => {
        if (action.payload.error) {
          this.setState({
            dialogBoxIsOpen: true,
            dialogBoxText: action.payload.error,
          });
        } else {
          this.setState({
            password: '',
            errorPassword: '',
            passwordToggleIsOpen: false,
            dialogBoxIsOpen: true,
            dialogBoxText: 'Ваш профиль успешно обновлён',
          });
        }
      });
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
      passwordToggleIsOpen: false,
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
      image,
      dialogBoxText,
      dialogBoxIsOpen,
      passwordToggleIsOpen,
    } = this.state;

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="user-profile-wrapper">
          <Avatar
            size={250}
            className="user-profile-image"
            src={!image ? UserProfilePhoto : image}
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
            className="change-password-toggle"
            label="Изменить пароль"
            toggled={passwordToggleIsOpen}
            onToggle={this.handlePasswordToggle}
          />
          { passwordToggleIsOpen ?
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

UserProfile.propTypes = propTypes;
export default UserProfile;
