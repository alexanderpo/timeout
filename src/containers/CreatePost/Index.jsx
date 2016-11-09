import React, { Component } from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import {
  RaisedButton,
  FlatButton,
} from 'material-ui';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import FirstStep from '../../components/CreatePost/FirstStep';
import SecondStep from '../../components/CreatePost/SecondStep';
import ThirdStep from '../../components/CreatePost/ThirdStep';

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      finished: false,
      stepIndex: 0,
      date: new Date(),
    };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.dummyAsync = this.dummyAsync.bind(this);
    this.getStepContent = this.getStepContent.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  getStepContent(stepIndex) {       // eslint-disable-line
    switch (stepIndex) {
      case 0: return (<FirstStep />);
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

  handleNext() {
    const { stepIndex } = this.state;
    if (!this.state.loading) {
      // TODO: action for send first part of data
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
      }));
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
    const { loading, stepIndex } = this.state;

    return (
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
    );
  }
}

export default CreatePost;
