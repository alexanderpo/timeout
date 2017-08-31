import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUserData } from '../../actions/user';
import UserProfile from '../../components/Profile/UserProfile';

const propTypes = {
  userData: PropTypes.object,
  actions: PropTypes.shape({
    updateUserData: PropTypes.func,
  }),
};

class UserProfileWrapper extends Component {
  render() {
    return (
      <UserProfile
        updateProfile={this.props.actions.updateUserData}
        data={this.props.userData}
      />
    );
  }
}

UserProfileWrapper.propTypes = propTypes;

export default connect((state) => {
  const userData = state.user ? state.user : '';

  return { userData };
}, dispatch => ({
  actions: bindActionCreators({
    updateUserData,
  }, dispatch),
}))(UserProfileWrapper);
