import React, { Component } from 'react';
import { Slider, Badge, RaisedButton } from 'material-ui';
import SearchIcon from 'material-ui/svg-icons/action/search';

const styles = {
  slider: {
    margin: 20,
    float: 'left',
  },
  badge: {
    height: 32,
    width: 32,
  },
  searchBtn: {
    margin: 12,
  },
};

class SearchTimeSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeSliderValue: 5,
    };
    this.handleTimeSliderValue = this.handleTimeSliderValue.bind(this);
  }

  handleTimeSliderValue(event, value) {
    this.setState({
      timeSliderValue: value,
    });
  }

  render() {
    return (
      <div style={styles.slider}>
        <Badge
          badgeContent={this.state.timeSliderValue}
          primary={true}
          badgeStyle={styles.badge}
        >
          <Slider
            style={{ height: 400 }}
            axis="y"
            min={5}
            max={120}
            step={5}
            defaultValue={5}
            value={this.state.timeSliderValue}
            onChange={this.handleTimeSliderValue}
          />
        </Badge>
        <RaisedButton
          label="Search"
          primary={true}
          icon={<SearchIcon />}
          style={styles.searchBtn}
        />
      </div>
    );
  }
}

export default SearchTimeSlider;
