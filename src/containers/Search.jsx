import React, { Component } from 'react';
import TimeSlider from '../components/TimeSlider';
import SearchSingleTask from '../components/SearchSingleTask';

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

class Search extends Component {
  render() {
    return (
      <div>
        <TimeSlider />
        <div style={styles.wrapper}>
          <SearchSingleTask />
          <SearchSingleTask />
          <SearchSingleTask />
          <SearchSingleTask />
          <SearchSingleTask />
          <SearchSingleTask />
          <SearchSingleTask />
          <SearchSingleTask />
        </div>
      </div>
    );
  }
}

export default Search;
