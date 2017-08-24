import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CreatePostForm from '../../components/Posts/CreatePostForm';
import { createPost } from '../../actions/post';

const categories = [
  'Cooking',
  'Sport',
  'Gaming',
  'Logic',
  'Other',
];

const propTypes = {
  userID: PropTypes.string,
  actions: PropTypes.shape({
    createPost: PropTypes.func,
  }),
};

class CreatePost extends Component {
  render() {
    return (
      <CreatePostForm
        author={this.props.userID}
        createPost={this.props.actions.createPost}
        categories={categories}
      />
    );
  }
}

CreatePost.propTypes = propTypes;
export default connect((state) => {
  const userID = state.user.id;
  return {
    userID,
  };
}, dispatch => ({
  actions: bindActionCreators({
    createPost,
  }, dispatch),
}))(CreatePost);
