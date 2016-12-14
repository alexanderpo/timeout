import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import { getAllPosts } from '../../actions/post';
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

AllPosts.propTypes = propTypes;

export default connect((state) => {
  const posts = !_.isEmpty(state.posts.posts) ? state.posts.posts.map(post => ({
    id: post._id, // eslint-disable-line
    title: post.title,
    description: post.description,
    time: post.time,
    username: post.author.name,
    userId: post.author.link,
    likes: post.likes.length,
    comments: 0,
    created_date: moment(post.created_date).format('ll'),
  })) : [];

  return {
    posts,
  };
}, dispatch => ({
  actions: bindActionCreators({
    getAllPosts,
  }, dispatch),
}))(AllPosts);
