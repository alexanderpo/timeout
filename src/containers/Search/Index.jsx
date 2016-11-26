import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';
import SearchTimeSlider from '../../components/Search/SearchTimeSlider';
import SearchPostPreview from '../../components/Post/SearchPostPreview';
import { getTimeSearchResult } from '../../actions/post';

const styles = {
  noneText: {
    margin: 'auto',
    fontWeight: 100,
    fontSize: 50,
    color: '#cccccc',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    overflowY: 'auto',
    height: 490,
  },
};

const propTypes = {
  posts: PropTypes.array,
  actions: PropTypes.shape({
    getTimeSearchResult: PropTypes.func,
  }),
};

class SearchPost extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <SearchTimeSlider getTimeSearchResult={this.props.actions.getTimeSearchResult} />
        <div style={styles.wrapper}>
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

SearchPost.propTypes = propTypes;

export default connect((state) => {
  const posts = state.search.success ? state.search.posts.map(post => ({
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
    posts,
  };
}, dispatch => ({
  actions: bindActionCreators({
    getTimeSearchResult,
  }, dispatch),
}))(SearchPost);
