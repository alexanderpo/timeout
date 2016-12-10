import React, { Component, PropTypes } from 'react';
import { Chip, Avatar, Slider, TextField } from 'material-ui';
// import ProfileImage from '../../styles/images/user.png';

// TODO: implement curent user avatar on first step

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 5,
  },
  chipBlock: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
};

const propTypes = {
  title: PropTypes.string,
  titleErrorText: PropTypes.string,
  description: PropTypes.string,
  descriptionErrorText: PropTypes.string,
  time: PropTypes.number,
  date: PropTypes.string,
  username: PropTypes.string,
  callbackParent: PropTypes.func,
};

class FirstStep extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: this.props.time,
      title: this.props.title,
      description: this.props.description,
      date: this.props.date,
    };

    this.handleTimeSlider = this.handleTimeSlider.bind(this);
  }

  handleTextValue(key) {
    return (event) => {
      const value = event.target.value;
      this.setState({
        [key]: value,
      });
      this.props.callbackParent(this.state);
    };
  }

  handleTimeSlider(event, value) {
    this.setState({
      time: value,
    });
    this.props.callbackParent(this.state);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.chipBlock}>
          <Chip style={styles.chip}>
            { /* <Avatar src={ProfileImage} /> */ }
            {this.props.username}
          </Chip>
          <Chip style={styles.chip}>{ this.state.date }</Chip>
        </div>
        <div style={styles.container}>
          <div>
            <TextField
              name="title"
              hintText="Title"
              floatingLabelText="Title"
              fullWidth={true}
              onChange={this.handleTextValue('title')}
              defaultValue={this.state.title}
              errorText={this.props.titleErrorText}
            />
            <TextField
              name="description"
              hintText="Description"
              floatingLabelText="Description"
              fullWidth={true}
              multiLine={true}
              rows={1}
              rowsMax={10}
              defaultValue={this.state.description}
              onChange={this.handleTextValue('description')}
              errorText={this.props.descriptionErrorText}
            />
            <div>
              <h4>Time of post {this.state.time}  minutes.</h4>
              <Slider
                name="time"
                defaultValue={this.state.time}
                min={5}
                max={120}
                step={5}
                onChange={this.handleTimeSlider}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FirstStep.propTypes = propTypes;

export default FirstStep;
