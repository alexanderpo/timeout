import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import CreateIcon from 'material-ui/svg-icons/content/create';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import {
  Paper,
  TextField,
  Divider,
  SelectField,
  MenuItem,
  RaisedButton,
  Snackbar,
} from 'material-ui';
import { createPostValidate } from '../../utils/inputValidation';


const propTypes = {
  author: PropTypes.string,
  categories: PropTypes.array,
  createPost: PropTypes.func,
};

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      selectedCategories: [],
      errorTitle: '',
      errorDescription: '',
      errorCategories: '',
      dialogBoxIsOpen: false,
      dialogBoxText: '',
    };

    this.handleSelectCategory = this.handleSelectCategory.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleClearButton = this.handleClearButton.bind(this);
    this.handleCreatePostButton = this.handleCreatePostButton.bind(this);
  }

  handleSelectCategory(event, index, values) {
    this.setState({
      selectedCategories: values,
    });
  }

  handleInputValue(key) {
    return (event) => {
      const value = event.target.value;
      this.setState({
        [key]: value,
      });
    };
  }

  handleClearButton() {
    this.setState({
      selectedCategories: [],
      title: '',
      description: '',
      errorTitle: '',
      errorCategories: '',
      errorDescription: '',
    });
  }

  handleCreatePostButton() {
    const { title, selectedCategories, description } = this.state;
    const { author, createPost } = this.props;
    const values = { title, selectedCategories, description };
    const errors = createPostValidate(values);
    if (!_.isEmpty(errors)) {
      this.setState({
        errorTitle: errors.title,
        errorCategories: errors.selectedCategories,
        errorDescription: errors.description,
      });
    } else {
      createPost(title, selectedCategories, description, author)
      .then((action) => {
        if (action.payload.error) {
          this.setState({
            dialogBoxIsOpen: true,
            dialogBoxText: action.payload.error,
          });
        } else {
          this.handleClearButton();
          this.setState({
            dialogBoxIsOpen: true,
            dialogBoxText: 'Запись успешно создана',
          });
        }
      });
    }
  }

  renderCategoryItems(selectedCategories) {
    return (
      this.props.categories.map(name => (
        <MenuItem
          key={name}
          insetChildren={true}
          value={name}
          checked={selectedCategories && selectedCategories.includes(name)}
          primaryText={name}
        />
      ))
    );
  }

  render() {
    const {
      title,
      description,
      selectedCategories,
      errorTitle,
      errorCategories,
      errorDescription,
      dialogBoxIsOpen,
      dialogBoxText,
    } = this.state;
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Paper zDepth={2} className="create-post-wrapper">
          <div>
            <span className="create-post-title">Создать запись</span>
            <Divider />
          </div>
          <div>
            <TextField
              hintText="Введите заголовок"
              floatingLabelText="Заголовок"
              fullWidth={true}
              value={title}
              errorText={errorTitle}
              onChange={this.handleInputValue('title')}
            />
            <SelectField
              multiple={true}
              hintText="Выберите категорию"
              floatingLabelText="Категория"
              value={selectedCategories}
              onChange={this.handleSelectCategory}
              fullWidth={true}
              errorText={errorCategories}
              style={{ maxWidth: 420 }}
            >
              {this.renderCategoryItems(selectedCategories)}
            </SelectField>
            <TextField
              floatingLabelText="Описание"
              multiLine={true}
              fullWidth={true}
              rows={5}
              rowsMax={10}
              value={description}
              errorText={errorDescription}
              onChange={this.handleInputValue('description')}
              textareaStyle={{ padding: 2, backgroundColor: '#F5F6F7' }}
            />
          </div>
          <div className="create-post-buttons-block">
            <RaisedButton
              icon={<ClearIcon />}
              label="Очистить"
              primary={true}
              className="create-post-button"
              onTouchTap={this.handleClearButton}
            />
            <RaisedButton
              icon={<CreateIcon />}
              label="Создать"
              primary={true}
              className="create-post-button"
              onTouchTap={this.handleCreatePostButton}
            />
          </div>
        </Paper>
        <Snackbar
          className="dialog-box"
          open={dialogBoxIsOpen}
          message={dialogBoxText}
          autoHideDuration={2000}
          onRequestClose={() => { this.setState({ dialogBoxIsOpen: false }); }}
        />
      </div>
    );
  }
}

CreatePost.propTypes = propTypes;
export default CreatePost;
