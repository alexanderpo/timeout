import React, { Component, PropTypes } from 'react';
import { TextField, RaisedButton, Snackbar } from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { signIn } from '../actions/user';

const propTypes = {
  message: PropTypes.string,
  success: PropTypes.bool,
  actions: PropTypes.shape({
    signIn: PropTypes.func, // eslint-disable-line
    push: PropTypes.func, // eslint-disable-line
  }),
};

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

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      autoHideMessageBoxTime: 4000,
      messageBoxIsOpen: false,
    };

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  changeValue(key) {
    return (event) => {
      const value = event.target.value;
      this.setState({
        [key]: value,
      });
    };
  }

  handleSignIn() {
    const { name, password } = this.state;
    this.props.actions.signIn(name, password)
    .then(() => {
      this.props.success ? // eslint-disable-line
        this.setState({
          name: '',
          password: '',
          messageBoxIsOpen: true,
        }) : this.setState({ messageBoxIsOpen: true });
      this.props.actions.push('/');
    });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSignIn();
    }
  }

  render() {
    const { actions } = this.props;
    const { name, password, messageBoxIsOpen, autoHideMessageBoxTime } = this.state;

    return (
      <div>
        <div className="pre-enter-wrapper">
          <div>
            <div style={styles.logoText}>timeout application</div>
            <div style={styles.sloganText}>Spend time with interest</div>
          </div>
          <TextField
            hintText="Username"
            floatingLabelText="Username"
            value={name}
            onChange={this.changeValue('name')}
            onKeyPress={this.handleKeyPress}
          />
          <TextField
            hintText="Password"
            floatingLabelText="Password"
            value={password}
            type="password"
            onChange={this.changeValue('password')}
            onKeyPress={this.handleKeyPress}
          />
          <RaisedButton
            className="pre-enter-button"
            label="Sign In"
            primary={true}
            onTouchTap={this.handleSignIn}
          />
          <RaisedButton
            className="pre-enter-button"
            label="Register"
            primary={true}
            onClick={() => { actions.push('/signup'); }}
          />
        </div>
        <Snackbar
          open={messageBoxIsOpen}
          message={this.props.message}
          autoHideDuration={autoHideMessageBoxTime}
          onRequestClose={() => { this.setState({ messageBoxIsOpen: false }); }}
        />
      </div>
    );
  }
}

SignIn.propTypes = propTypes;

export default connect((state) => {
  const success = state.user.success;
  const message = state.user.message ?
    state.user.message : '';

  return {
    success,
    message,
  };
}, dispatch => ({
  actions: bindActionCreators({
    signIn,
    push,
  }, dispatch),
}))(SignIn);
