import React, { Component } from 'react';
import SearchTimeSlider from '../../components/Search/SearchTimeSlider';
import SearchPostPreview from '../../components/Post/SearchPostPreview';

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    overflowY: 'auto',
    height: 490,
  },
};

class SearchPost extends Component {
  render() {
    return (
      <div>
        <SearchTimeSlider />
        <div style={styles.wrapper}>
          <SearchPostPreview />
          <SearchPostPreview />
          <SearchPostPreview />
          <SearchPostPreview />
          <SearchPostPreview />
          <SearchPostPreview />
          <SearchPostPreview />
          <SearchPostPreview />
        </div>
      </div>
    );
  }
}

export default SearchPost;
