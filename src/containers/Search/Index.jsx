import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';
import { getTimeSearchResult, likePost } from '../../actions/post';
import DisplayPosts from '../../components/Post/DisplayPosts';
import SearchTimeSlider from '../../components/Search/SearchTimeSlider';

const propTypes = {
  isLoading: PropTypes.bool,
  userId: PropTypes.string,
  posts: PropTypes.array,
  actions: PropTypes.shape({
    getTimeSearchResult: PropTypes.func,
    likePost: PropTypes.func,
  }),
};

class SearchPost extends Component { // eslint-disable-line
  render() {
    const { posts, isLoading, userId, actions } = this.props;
    return (
      <div>
        <div>
          <SearchTimeSlider
            getTimeSearchResult={this.props.actions.getTimeSearchResult}
          />
        </div>
        <DisplayPosts
          isLoading={isLoading}
          userId={userId}
          posts={posts}
          likePost={actions.likePost}
        />
      </div>
    );
  }
}

SearchPost.propTypes = propTypes;

export default connect((state) => {
  const userId = state.user.data.id;

  const posts = state.search.success ? state.search.posts.map(post => ({
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

  const isLoading = state.search.isLoading;

  return {
    isLoading,
    userId,
    posts,
  };
}, dispatch => ({
  actions: bindActionCreators({
    getTimeSearchResult,
    likePost,
  }, dispatch),
}))(SearchPost);
