import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import { getAllPosts } from '../../actions/post';
import SearchPostPreview from '../../components/Post/SearchPostPreview';
import CreatePostButton from '../../components/CreatePostButton';

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
                user={post.author.name}
                title={post.title}
                description={post.description}
                avatar={post.author.image.data}
                time={post.time}
                likes={post.likes}
                comments={post.comments}
                createdDate={post.created_date}
              />
          )) : <div style={styles.noneText}>Dont have posts</div>
          }
        </div>
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

  return {
    posts,
  };
}, dispatch => ({
  actions: bindActionCreators({
    getAllPosts,
  }, dispatch),
}))(AllPosts);
