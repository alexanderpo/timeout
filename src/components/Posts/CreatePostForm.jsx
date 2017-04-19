import React, { Component, PropTypes } from 'react';
import { Paper, TextField, Divider, SelectField, MenuItem, RaisedButton } from 'material-ui';
import CreateIcon from 'material-ui/svg-icons/content/create';
import ClearIcon from 'material-ui/svg-icons/content/clear';

const propTypes = {
  categories: PropTypes.array,
};

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      selectedCategories: [],
    };

    this.handleSelectCategory = this.handleSelectCategory.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleClearButton = this.handleClearButton.bind(this);
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
    });
  }

  renderCategoryItems(selectedCategories) {
    return (
      this.props.categories.map((name) => (
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
    const { title, description, selectedCategories } = this.state;
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
              onChange={this.handleInputValue('title')}
            />
            <SelectField
              multiple={true}
              hintText="Выберите категорию"
              floatingLabelText="Категория"
              value={selectedCategories}
              onChange={this.handleSelectCategory}
              fullWidth={true}
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
            />
          </div>
        </Paper>
      </div>
    );
  }
}

CreatePost.propTypes = propTypes;
export default CreatePost;
