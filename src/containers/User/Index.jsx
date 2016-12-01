import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Paper, TextField, RaisedButton } from 'material-ui';

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
    push: PropTypes.func,
  }),
};

class UserProfile extends Component {
  render() {
    return (
      <div>
        <Paper style={styles.formContainer} zDepth={2}>
          <Paper style={styles.avatar} circle={true} zDepth={1} />
          <RaisedButton
            label="Choose image"
            containerElement="label"
          >
            <input type="file" style={styles.imageInput} />
          </RaisedButton>
          <TextField
            hintText="Enter new username"
            floatingLabelText="Username"
            defaultValue={this.props.user.name}
          />
          <TextField
            hintText="Your email address"
            floatingLabelText="Email"
            defaultValue={this.props.user.email}
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
    push,
  }, dispatch),
}))(UserProfile);
