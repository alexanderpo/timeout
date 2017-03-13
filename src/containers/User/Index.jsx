import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Paper, TextField, RaisedButton, Snackbar } from 'material-ui';
import { updateUserProfile, updateUser } from '../../actions/user';
import { updateUserValidator } from '../../utils/validators';

const styles = {
  formContainer: {
    margin: '10px 50px',
    padding: 5,
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    fontWeight: 300,
  },
  titleText: {
    fontWeight: 200,
    margin: 5,
    textTransform: 'lowercase',
  },
  imageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  avatar: {
    margin: 5,
    width: 250,
    height: 250,
  },
};

const propTypes = {
  user: PropTypes.object,
  actions: PropTypes.shape({
    updateUserProfile: PropTypes.func,
    updateUser: PropTypes.func,
  }),
};

class UserProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      messageBoxIsOpen: false,
      messageBoxText: '',
      autoHideMessageBoxTime: 4000,
      nameErrorText: '',
      emailErrorText: '',
      dataImage: this.props.user.image.data,
      name: this.props.user.name,
      email: this.props.user.email,
      imageType: this.props.user.image.type,
    };

    this.handleImage = this.handleImage.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleTextFields = this.handleTextFields.bind(this);
  }

  handleTextFields(key) {
    return (event) => {
      const value = event.target.value;
      this.setState({
        [key]: value,
      });
    };
  }

  handleImage(event) {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onload = (upload) => {
      this.setState({
        dataImage: upload.target.result,
        imageType: file.type,
      });
    };

    reader.readAsDataURL(file);
  }

  handleUpdate() {
    const { id } = this.props.user;
    const oldName = this.props.user.name;
    const oldImageType = this.props.user.image.type;
    const { name, email, dataImage, imageType } = this.state;
    const values = { name, email };
    const errors = updateUserValidator(values);

    if (!_.isEmpty(errors)) {
      this.setState({
        nameErrorText: errors.name,
        emailErrorText: errors.email,
      });
    } else {
      this.props.actions.updateUserProfile(id, oldName, name, email, dataImage, oldImageType, imageType)// eslint-disable-line
      .then((action) => {
        if (action.payload.success) {
          this.setState({
            nameErrorText: '',
            emailErrorText: '',
            messageBoxIsOpen: true,
            messageBoxText: action.payload.message,
          });
          this.props.actions.updateUser(action.payload);
        } else {
          this.setState({
            messageBoxIsOpen: true,
            messageBoxText: action.payload.message,
          });
        }
      });
    }
  }

  render() {
    const {
      messageBoxIsOpen,
      messageBoxText,
      autoHideMessageBoxTime,
      nameErrorText,
      emailErrorText,
    } = this.state;
    return (
      <div>
        <div style={styles.formContainer}>
          <Paper style={styles.avatar} zDepth={1}>
            <img style={{ width: 250, height: 250 }} src={this.state.dataImage} alt="img" />
          </Paper>
          <RaisedButton
            label="Choose image"
            containerElement="label"
          >
            <input type="file" style={styles.imageInput} onChange={this.handleImage} />
          </RaisedButton>
          <TextField
            hintText="Enter new username"
            floatingLabelText="Username"
            defaultValue={this.props.user.name}
            errorText={nameErrorText}
            onChange={this.handleTextFields('name')}
          />
          <TextField
            hintText="Your email address"
            floatingLabelText="Email"
            defaultValue={this.props.user.email}
            errorText={emailErrorText}
            onChange={this.handleTextFields('email')}
          />
          <RaisedButton
            style={{ margin: 20 }}
            label="Save"
            primary={true}
            onTouchTap={this.handleUpdate}
          />
        </div>
        <Snackbar
          open={messageBoxIsOpen}
          message={messageBoxText}
          autoHideDuration={autoHideMessageBoxTime}
          onRequestClose={() => { this.setState({ messageBoxIsOpen: false }); }}
        />
      </div>
    );
  }
}

UserProfile.propTypes = propTypes;

export default connect((state) => {
  const user = state.user.data;

  return {
    user,
  };
}, dispatch => ({
  actions: bindActionCreators({
    updateUserProfile,
    updateUser,
  }, dispatch),
}))(UserProfile);
