import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import _ from 'lodash';
import moment from 'moment';
import Pagination from '../../components/Pagination';
import Post from '../../components/Posts/Post';
import { getAllPosts, clearAllPosts } from '../../actions/post';

const propTypes = {
  posts: PropTypes.array,
  actions: PropTypes.shape({
    getAllPosts: PropTypes.func,
    push: PropTypes.func,
    clearAllPosts: PropTypes.func,
  }),
};

class AllPosts extends Component {
  componentWillMount() {
    this.props.actions.getAllPosts();
  }

  componentWillUnmount() {
    this.props.actions.clearAllPosts();
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        <Pagination
          content={posts}
          renderComponent={Post}
          itemsPerPage={4}
        />
      </div>
    );
  }
}

AllPosts.propTypes = propTypes;

export default connect((state) => {
  const posts = !_.isEmpty(state.posts.all) ?
  state.posts.all.map(post => ({
    id: post.id,
    title: post.title,
    description: post.description,
    categories: post.categories,
    author: post.author,
    likes: post.likes.length,
    createdAt: moment(post.created_at).format('ll'),
    updatedAt: moment(post.updated_at).format('ll'),
  })) : [];

  return {
    posts,
  };
}, dispatch => ({
  actions: bindActionCreators({
    getAllPosts,
    push,
    clearAllPosts,
  }, dispatch),
}))(AllPosts);
