import React, { Component, PropTypes } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { signIn } from '../actions/user';

const propTypes = {
  actions: PropTypes.shape({
    signIn: PropTypes.func,
    push: PropTypes.func,
  }),
};

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }

  changeValue(key) {
    return (event) => {
      const value = event.target.value;
      this.setState({
        [key]: value,
      });
    };
  }

  render() {
    const { actions } = this.props;
    const { name, password } = this.state;

    return (
      <div className="pre-enter-wrapper">
        <TextField
          hintText="Username"
          floatingLabelText="Username"
          value={name}
          onChange={this.changeValue('name')}
        />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          value={password}
          type="password"
          onChange={this.changeValue('password')}
        />
        <RaisedButton
          className="pre-enter-button"
          label="Sign In"
          primary={true}
          onClick={() => {
            actions.signIn(name, password)
            .then(() => {
              this.setState({
                name: '',
                password: '',
              });
              actions.push('/');
            });
          }}
        />
        <RaisedButton
          className="pre-enter-button"
          label="Register"
          primary={true}
          onClick={() => { actions.push('/signup'); }}
        />
      </div>
    );
  }
}

SignIn.propTypes = propTypes;

export default connect(null, dispatch => ({
  actions: bindActionCreators({
    signIn,
    push,
  }, dispatch),
}))(SignIn);
