import React, { Component } from 'react';
import { Paper, TextField, Divider, SelectField, MenuItem, RaisedButton } from 'material-ui';
import CreateIcon from 'material-ui/svg-icons/content/create';
import ClearIcon from 'material-ui/svg-icons/content/clear';

const categoriesList = [
  'Спорт',
  'Кино',
  'Музыка',
  'Кулинария',
  'Программирование',
  'Фотография',
];

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };

    this.handleSelectCategory = this.handleSelectCategory.bind(this);
  }

  handleSelectCategory(event, index, values) {
    this.setState({
      categories: values,
    });
  }

  renderCategoryItems(categories) {
    return (
      categoriesList.map((name) => (
        <MenuItem
          key={name}
          insetChildren={true}
          value={name}
          checked={categories && categories.includes(name)}
          primaryText={name}
        />
      ))
    );
  }

  render() {
    const { categories } = this.state;
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
            />
            <SelectField
              multiple={true}
              hintText="Выберите категорию"
              floatingLabelText="Категория"
              value={categories}
              onChange={this.handleSelectCategory}
              fullWidth={true}
              style={{ maxWidth: 420 }}
            >
              {this.renderCategoryItems(categories)}
            </SelectField>
            <TextField
              floatingLabelText="Описание"
              multiLine={true}
              fullWidth={true}
              rows={5}
              rowsMax={10}
              textareaStyle={{ padding: 2, backgroundColor: '#F5F6F7' }}
            />
          </div>
          <div className="create-post-buttons-block">
            <RaisedButton
              icon={<ClearIcon />}
              label="Очистить"
              primary={true}
              className="create-post-button"
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

export default CreatePost;
