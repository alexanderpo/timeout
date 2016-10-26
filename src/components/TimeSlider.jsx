import React, { Component } from 'react';
import { Slider, Badge } from 'material-ui';

const styles = {
  slider: {
    display: 'flex',
    height: 124,
    margin: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  badge: {
    height: 32,
    width: 32,
  },
};

class TimeSlider extends Component {
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
      </div>
    );
  }
}

export default TimeSlider;
