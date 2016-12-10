import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Paper, TextField, RaisedButton } from 'material-ui';
import { updateUserProfile } from '../../actions/user';

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
    push: PropTypes.func,
  }),
};

class UserProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
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
    const { name, email, dataImage, imageType } = this.state;
    this.props.actions.updateUserProfile(id, name, email, dataImage, imageType);
    // TODO: update user state in store
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Paper style={styles.formContainer} zDepth={2}>
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
            onChange={this.handleTextFields('name')}
          />
          <TextField
            hintText="Your email address"
            floatingLabelText="Email"
            defaultValue={this.props.user.email}
            onChange={this.handleTextFields('email')}
          />
          <TextField
            hintText="New password"
            floatingLabelText="Password"
            type="password"
          />
          <RaisedButton
            style={{ margin: 5 }}
            label="Save"
            primary={true}
            onTouchTap={this.handleUpdate}
          />
        </Paper>
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
    push,
  }, dispatch),
}))(UserProfile);
