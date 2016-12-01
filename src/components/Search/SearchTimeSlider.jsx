import React, { Component, PropTypes } from 'react';
import { Slider, RaisedButton } from 'material-ui';
import SearchIcon from 'material-ui/svg-icons/action/search';

const styles = {
  wrapper: {
    margin: 20,
    marginBottom: 0,
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  slider: {
    width: '80%',
  },
  badge: {
    height: 32,
    width: 32,
  },
  searchBtn: {
    boxShadow: 'none',
    width: '10%',
  },
  buttonStyle: {},
};

const propTypes = {
  getTimeSearchResult: PropTypes.func,
};

class SearchTimeSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeSliderValue: 5,
    };
    this.handleTimeSliderValue = this.handleTimeSliderValue.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    const time = this.state.timeSliderValue;
    this.props.getTimeSearchResult(time);
  }

  handleTimeSliderValue(event, value) {
    this.setState({
      timeSliderValue: value,
    });
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <Slider
          style={styles.slider}
          min={5}
          step={5}
          max={120}
          defaultValue={this.state.timeSliderValue}
          value={this.state.timeSliderValue}
          onChange={this.handleTimeSliderValue}
        />
        <RaisedButton
          label={this.state.timeSliderValue}
          primary={true}
          icon={<SearchIcon />}
          style={styles.searchBtn}
          buttonStyle={styles.buttonStyle}
          onTouchTap={this.handleSearch}
        />
      </div>
    );
  }
}

SearchTimeSlider.propTypes = propTypes;
export default SearchTimeSlider;
