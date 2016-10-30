import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Slider,
  TextField,
} from 'redux-form-material-ui';

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  },
};

class FirstStep extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeSliderValue: 5,
    };

    this.handleTimeSlider = this.handleTimeSlider.bind(this);
  }

  handleTimeSlider(event, value) {
    this.setState({
      timeSliderValue: value,
    });
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <form>
          <Field
            name="name"
            component={TextField}
            hintText="Name"
            floatingLabelText="Name"
            fullWidth={true}
          />
          <Field
            name="description"
            component={TextField}
            hintText="Description"
            floatingLabelText="Description"
            fullWidth={true}
            multiLine={true}
            rows={1}
            rowsMax={10}
          />
          <div>
            <h4>You choose {this.state.timeSliderValue}  minutes.</h4>
            <Field
              name="time"
              component={Slider}
              defaultValue={5}
              min={5}
              max={120}
              step={5}
              onChange={this.handleTimeSlider}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'create-post-form',
})(FirstStep);
