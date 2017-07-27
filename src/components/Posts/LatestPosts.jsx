import React, { Component, PropTypes } from 'react';
import Post from './Post';
import Pagination from '../Pagination';

const propTypes = {
  posts: PropTypes.array,
};

class LatestPostsForm extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div>
        <Pagination
          content={posts}
          renderComponent={Post}
          itemsPerPage={5}
        />
      </div>
    );
  }
}

LatestPostsForm.propTypes = propTypes;
export default LatestPostsForm;
