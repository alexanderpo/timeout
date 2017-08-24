import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import _ from 'lodash';
import moment from 'moment';
import Pagination from '../../components/Pagination';
import Post from '../../components/Posts/Post';
import { getAuthorPosts, clearAuthorPosts, likePost } from '../../actions/post';

const propTypes = {
  userId: PropTypes.string,
  posts: PropTypes.array,
  actions: PropTypes.shape({
    getAuthorPosts: PropTypes.func,
    push: PropTypes.func,
    clearAuthorPosts: PropTypes.func,
    likePost: PropTypes.func,
  }),
};

class UserPosts extends Component {
  componentWillMount() {
    this.props.actions.getAuthorPosts(this.props.userId);
  }

  componentWillUnmount() {
    this.props.actions.clearAuthorPosts();
  }

  render() {
    const { posts, actions } = this.props;

    return (
      <div>
        <Pagination
          content={posts}
          action={actions.likePost}
          renderComponent={Post}
          itemsPerPage={4}
        />
      </div>
    );
  }
}

UserPosts.propTypes = propTypes;

export default connect((state) => {
  const userId = state.user.id;
  const posts = !_.isEmpty(state.posts.author) ?
  state.posts.author.map(post => ({
    id: post.id,
    title: post.title,
    description: post.description,
    categories: post.categories,
    author: post.author,
    likes: post.likes.length,
    isLiked: _.includes(post.likes, userId) ? true : false, // eslint-disable-line
    createdAt: moment(post.created_at).format('ll'),
    updatedAt: moment(post.updated_at).format('ll'),
  })) : [];

  return {
    userId,
    posts,
  };
}, dispatch => ({
  actions: bindActionCreators({
    getAuthorPosts,
    push,
    clearAuthorPosts,
    likePost,
  }, dispatch),
}))(UserPosts);
