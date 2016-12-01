import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import { getPostsByAuthor } from '../../actions/post';
import SearchPostPreview from '../../components/Post/SearchPostPreview';

const styles = {
  noneText: {
    margin: 'auto',
    fontWeight: 100,
    fontSize: 50,
    color: '#cccccc',
  },
  postsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
};

const propTypes = {
  username: PropTypes.string,
  posts: PropTypes.array,
  actions: PropTypes.shape({
    getPostsByAuthor: PropTypes.func,
  }),
};

class UserPosts extends Component {

  componentWillMount() {
    this.props.actions.getPostsByAuthor(this.props.username);
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <div style={styles.postsContainer}>
          {
            !_.isEmpty(posts) ? posts.map(post => (
              <SearchPostPreview
                key={post.id}
                user={post.username}
                title={post.title}
                description={post.description}
                time={post.time}
                likes={post.likes}
                comments={post.comments}
                createdDate={post.created_date}
              />
          )) : <div style={styles.noneText}>Dont have posts</div>
          }
        </div>
      </div>
    );
  }
}

UserPosts.propTypes = propTypes;

export default connect((state) => {
  const username = state.user.data.name;

  const posts = !_.isEmpty(state.user.posts.posts) ? state.user.posts.posts.map(post => ({
    id: post._id, // eslint-disable-line
    title: post.title,
    description: post.description,
    time: post.time,
    username: post.author,
    likes: post.likes.length,
    comments: post.comments.length,
    created_date: moment(post.created_date).format('ll'),
  })) : [];

  return {
    username,
    posts,
  };
}, dispatch => ({
  actions: bindActionCreators({
    getPostsByAuthor,
  }, dispatch),
}))(UserPosts);
