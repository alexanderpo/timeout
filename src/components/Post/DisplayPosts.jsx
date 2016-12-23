import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import CircularProgress from 'material-ui/CircularProgress';
import SearchPostPreview from './SearchPostPreview';

const styles = {
  postsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '50%',
  },
  postsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
};

const propTypes = {
  isLoading: PropTypes.bool,
  userId: PropTypes.string,
  posts: PropTypes.array,
  likePost: PropTypes.func,
};

class DisplayPosts extends Component { // eslint-disable-line

  render() {
    const { posts, isLoading } = this.props;
    return (
      <div style={styles.postsWrapper}>
        {
          isLoading ? (
            <div className="spinner">
              <CircularProgress size={60} thickness={6} />
            </div>
          ) : ''
        }
        {
          (!isLoading && _.isEmpty(posts)) ?
          (<div className="no-posts-text">Dont have posts</div>) : ' '
        }
        {
          (!isLoading && !_.isEmpty(posts)) ? (
            <div style={styles.postsContainer}>
              {
                posts.map(post => (
                  <SearchPostPreview
                    key={post.id}
                    user={post.author.name}
                    title={post.title}
                    description={post.description}
                    avatar={post.author.image.data}
                    time={post.time}
                    likes={post.likes}
                    comments={post.comments}
                    createdDate={post.created_date}
                    likePost={this.props.likePost}
                    userId={this.props.userId}
                    postId={post.id}
                    isLiked={post.isLiked}
                  />
                ))
              }
            </div>
          ) : ' '
        }
      </div>
    );
  }
}

DisplayPosts.propTypes = propTypes;
export default DisplayPosts;
