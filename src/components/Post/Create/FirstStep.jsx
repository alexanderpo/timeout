import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { Chip, Avatar, Slider, TextField, SelectField, MenuItem } from 'material-ui';
import ProfileImage from '../../../styles/images/user.png';

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
  createPost: PropTypes.func,
};

class FirstStep extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 5,
      title: '',
      description: '',
      category: '',
      date: moment().format('ll'),
    };

    this.handleTimeSlider = this.handleTimeSlider.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  handleTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleDescription(event) {
    this.setState({
      description: event.target.value,
    });
  }

  handleCategory(event, index, value) {
    this.setState({
      category: value,
    });
  }

  handleTimeSlider(event, value) {
    this.setState({
      time: value,
    });
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.chipBlock}>
          <Chip style={styles.chip}>
            <Avatar src={ProfileImage} />
            Username
          </Chip>
          <Chip style={styles.chip}>{ this.state.date }</Chip>
        </div>
        <div style={styles.container}>
          <form>
            <TextField
              name="title"
              hintText="Title"
              floatingLabelText="Title"
              fullWidth={true}
              onChange={this.handleTitle}
            />
            <TextField
              name="description"
              hintText="Description"
              floatingLabelText="Description"
              fullWidth={true}
              multiLine={true}
              rows={1}
              rowsMax={10}
              onChange={this.handleDescription}
            />
            <SelectField
              floatingLabelText="Category"
              fullWidth={true}
              value={this.state.category}
              onChange={this.handleCategory}
            >
              <MenuItem value={'Tehnology'} primaryText="Tehnology" />
              <MenuItem value={'Food'} primaryText="Food" />
              <MenuItem value={'Sport'} primaryText="Sport" />
              <MenuItem value={'Rest'} primaryText="Rest" />
              <MenuItem value={'Drawing'} primaryText="Drawing" />
            </SelectField>
            <div>
              <h4>Time for task {this.state.time}  minutes.</h4>
              <Slider
                name="time"
                defaultValue={5}
                min={5}
                max={120}
                step={5}
                onChange={this.handleTimeSlider}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

FirstStep.propTypes = propTypes;

export default FirstStep;
