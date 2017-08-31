import React, { Component, PropTypes } from 'react';
import Post from './Post';
import Pagination from '../Pagination';

const propTypes = {
  posts: PropTypes.array,
  likePost: PropTypes.func,
};

class LatestPostsForm extends Component {
  render() {
    const { posts, likePost } = this.props;

    return (
      <div>
        <Pagination
          content={posts}
          action={likePost}
          renderComponent={Post}
          itemsPerPage={5}
        />
      </div>
    );
  }
}

LatestPostsForm.propTypes = propTypes;
export default LatestPostsForm;
