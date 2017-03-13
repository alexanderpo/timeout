import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import { getPostsByAuthor, likePost } from '../../actions/post';
import DisplayPosts from '../../components/Post/DisplayPosts';
import CreatePostButton from '../../components/CreatePostButton';

const propTypes = {
  isLoading: PropTypes.bool,
  userId: PropTypes.string,
  posts: PropTypes.array,
  actions: PropTypes.shape({
    getPostsByAuthor: PropTypes.func,
    likePost: PropTypes.func, // eslint-disable-line
  }),
};

class UserPosts extends Component {

  componentWillMount() {
    this.props.actions.getPostsByAuthor(this.props.userId);
  }

  render() {
    const { isLoading, userId, posts, actions } = this.props;
    return (
      <div>
        <DisplayPosts
          isLoading={isLoading}
          userId={userId}
          posts={posts}
          likePost={actions.likePost}
        />
        <div>
          <CreatePostButton />
        </div>
      </div>
    );
  }
}

UserPosts.propTypes = propTypes;

export default connect((state) => {
  const userId = state.user.data.id;
  const isLoading = state.user.posts.isLoading;

  const posts = !_.isEmpty(state.user.posts.posts) ? state.user.posts.posts.map(post => ({
    id: post.id,
    title: post.title,
    description: post.description,
    author: {
      id: post.author.id,
      name: post.author.name,
      image: {
        data: post.author.image.data,
        type: post.author.image.type,
      },
    },
    time: post.time,
    likes: post.likes.length,
    isLiked: _.includes(post.likes, userId) ? true : false, // eslint-disable-line
    comments: 0,
    created_date: moment(post.created_date).format('ll'),
  })) : [];

  return {
    isLoading,
    userId,
    posts,
  };
}, dispatch => ({
  actions: bindActionCreators({
    getPostsByAuthor,
    likePost,
  }, dispatch),
}))(UserPosts);
