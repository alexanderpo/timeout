import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';
import CircularProgress from 'material-ui/CircularProgress';
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
    getTimeSearchResult: PropTypes.func,
  }),
};

class SearchPost extends Component {
  render() {
    const { posts, isLoading } = this.props;
    return (
      <div>
        <SearchTimeSlider
          getTimeSearchResult={this.props.actions.getTimeSearchResult}
        />
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
      </div>
    );
  }
}

SearchPost.propTypes = propTypes;

export default connect((state) => {
  const posts = state.search.success ? state.search.posts.map(post => ({
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

  const isLoading = state.search.isLoading;

  return {
    isLoading,
    posts,
  };
}, dispatch => ({
  actions: bindActionCreators({
    getTimeSearchResult,
  }, dispatch),
}))(SearchPost);
