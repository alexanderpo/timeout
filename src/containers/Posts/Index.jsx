import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import CircularProgress from 'material-ui/CircularProgress';
import { getAllPosts } from '../../actions/post';
import SearchPostPreview from '../../components/Post/SearchPostPreview';
import CreatePostButton from '../../components/CreatePostButton';

const styles = {
  postsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
};

const propTypes = {
  isLoading: PropTypes.bool,
  posts: PropTypes.array,
  actions: PropTypes.shape({
    getAllPosts: PropTypes.func,
  }),
};

class AllPosts extends Component {

  componentWillMount() {
    this.props.actions.getAllPosts();
  }

  render() {
    const { posts, isLoading } = this.props;
    return (
      <div>
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
                  />
                ))
              }
            </div>
          ) : ' '
        }
        <div>
          <CreatePostButton />
        </div>
      </div>
    );
  }
}

AllPosts.propTypes = propTypes;

export default connect((state) => {
  const posts = !_.isEmpty(state.posts.posts) ? state.posts.posts.map(post => ({
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
    comments: 0,
    created_date: moment(post.created_date).format('ll'),
  })) : [];

  const isLoading = state.posts.isLoading;

  return {
    posts,
    isLoading,
  };
}, dispatch => ({
  actions: bindActionCreators({
    getAllPosts,
  }, dispatch),
}))(AllPosts);
