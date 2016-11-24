import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import {
  RaisedButton,
  FlatButton,
  Snackbar,
} from 'material-ui';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import FirstStep from '../../components/CreatePost/FirstStep';
import SecondStep from '../../components/CreatePost/SecondStep';
import ThirdStep from '../../components/CreatePost/ThirdStep';
import { createPostFirstStep } from '../../actions/post';
import { createPostValidator } from '../../utils/validators';

const propTypes = {
  username: PropTypes.string,
  actions: PropTypes.shape({
    createPostFirstStep: PropTypes.func,
  }),
};

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      titleErrorText: '',
      description: '',
      descriptionErrorText: '',
      category: 'Tehnology',
      time: 5,
      loading: false,
      finished: false,
      stepIndex: 0,
      date: moment().format('ll'),
      messageBoxText: '',
      autoHideMessageBoxTime: 4000,
      messageBoxIsOpen: false,
    };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.dummyAsync = this.dummyAsync.bind(this);
    this.getStepContent = this.getStepContent.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.onChildChanged = this.onChildChanged.bind(this);
  }

  onChildChanged(newState) {
    this.setState({
      title: newState.title,
      description: newState.description,
      category: newState.category,
      time: newState.time,
    });
  }

  getStepContent(stepIndex) {       // eslint-disable-line
    switch (stepIndex) {
      case 0: return (
        <FirstStep
          username={this.props.username}
          title={this.state.title}
          titleErrorText={this.state.titleErrorText}
          description={this.state.description}
          descriptionErrorText={this.state.descriptionErrorText}
          category={this.state.category}
          time={this.state.time}
          date={this.state.date}
          callbackParent={this.onChildChanged}
        />
      );
      case 1: return (<SecondStep />);
      case 2: return (<ThirdStep />);
      default:
        return 'Create post step by step';
    }
  }

  dummyAsync(cb) {
    this.setState({ loading: true }, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  }

  handleNext() { // eslint-disable-line
    const {
      stepIndex,
      title,
      description,
      category,
      time,
    } = this.state;

    const values = { title, description };
    const errors = createPostValidator(values);

    const { username } = this.props;

    if (!this.state.loading) {
      switch (stepIndex) {
        case 0:
          if (!_.isEmpty(errors)) {
            this.setState({
              titleErrorText: errors.title,
              descriptionErrorText: errors.description,
            });
          } else {
            this.setState({ titleErrorText: '', descriptionErrorText: '' });
            this.props.actions.createPostFirstStep(title, description, category, time, username)
            .then((action) => {
              action.payload.success ? // eslint-disable-line
                this.dummyAsync(() => this.setState({
                  loading: false,
                  stepIndex: stepIndex + 1,
                  finished: stepIndex >= 2,
                  title: '',
                  description: '',
                  category: 'Tehnology',
                  time: 5,
                  messageBoxIsOpen: true,
                  messageBoxText: action.payload.message,
                })) : this.setState({
                  messageBoxIsOpen: true,
                  messageBoxText: action.payload.message,
                });
            });
          }
          break;
        case 1:
          return 'update body post';
        default:
          return 'Create post';
      }
    }
  }

  handlePrev() {
    const { stepIndex } = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1,
      }));
    }
  }

  renderContent() {
    const { finished, stepIndex } = this.state;
    const contentStyle = { margin: '0 16px', overflow: 'hidden' };
    const buttonBlockStyle = {
      marginTop: 24,
      marginBottom: 12,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
    };

    if (finished) {
      return (
        <div style={contentStyle}>
          <p>
            <button
              onClick={(event) => {
                event.preventDefault();
                this.setState({ stepIndex: 0, finished: false });
              }}
            > Clear </button>
          Complete!
          </p>
        </div>
      );
    }

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={buttonBlockStyle}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrev}
            style={{ marginRight: 12 }}
          />
          <RaisedButton
            label={stepIndex === 2 ? 'Finish' : 'Next'}
            primary={true}
            onTouchTap={this.handleNext}
          />
        </div>
      </div>
    );
  }

  render() {
    const {
      loading,
      stepIndex,
      messageBoxText,
      messageBoxIsOpen,
      autoHideMessageBoxTime,
    } = this.state;

    return (
      <div>
        <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel>Information</StepLabel>
            </Step>
            <Step>
              <StepLabel>Create post</StepLabel>
            </Step>
            <Step>
              <StepLabel>Preview</StepLabel>
            </Step>
          </Stepper>
          <ExpandTransition loading={loading} open={true}>
            {this.renderContent()}
          </ExpandTransition>
        </div>
        <Snackbar
          open={messageBoxIsOpen}
          message={messageBoxText}
          autoHideDuration={autoHideMessageBoxTime}
          onRequestClose={() => { this.setState({ messageBoxIsOpen: false }); }}
        />
      </div>
    );
  }
}

CreatePost.propTypes = propTypes;

export default connect((state) => {
  const username = state.user.name;

  return {
    userId,
    username,
  };
}, dispatch => ({
  actions: bindActionCreators({
    createPostFirstStep,
  }, dispatch),
}))(CreatePost);
