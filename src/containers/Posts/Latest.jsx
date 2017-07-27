import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';
import LatestPostsForm from '../../components/Posts/LatestPosts';
import { getLatestsPosts, clearLatestPosts } from '../../actions/post';

const propTypes = {
  latestPosts: PropTypes.array,
  actions: PropTypes.shape({
    getLatestsPosts: PropTypes.func,
    clearLatestPosts: PropTypes.func,
  }),
};

class LatestPosts extends Component {
  componentWillMount() {
    this.props.actions.getLatestsPosts();
  }

  componentWillUnmount() {
    this.props.actions.clearLatestPosts();
  }

  render() {
    const { latestPosts } = this.props;

    return (
      <div>
        <LatestPostsForm posts={latestPosts} />
      </div>
    );
  }
}

LatestPosts.propTypes = propTypes;
export default connect((state) => {
  const latestPosts = !_.isEmpty(state.posts.latest) ?
  state.posts.latest.map(post => ({
    id: post.id,
    title: post.title,
    description: post.description,
    categories: post.categories,
    author: post.author,
    likes: post.likes.length,
    createdAt: moment(post.created_at).format('ll'),
    updatedAt: moment(post.updated_at).format('ll'),
  })) : [];

  return { latestPosts };
}, dispatch => ({
  actions: bindActionCreators({
    getLatestsPosts,
    clearLatestPosts,
  }, dispatch),
}))(LatestPosts);
