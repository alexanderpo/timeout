export const signInValidate = (values) => {
  const errors = {};

  if (values.name.length === 0) {
    errors.name = 'Enter username';
  } else if (values.name.length < 3) {
    errors.name = 'Username must contain at least 3 characters';
  } else if (!/^[A-Za-z0-9-_.]+$/.test(values.name)) {
    errors.name = 'Username can only contain A-Z characters a-z _ -. 1-9';
  } else if (values.password.length === 0) {
    errors.password = 'Enter password';
  } else if (values.password.length < 6) {
    errors.password = 'Password must contain at least 6 characters';
  }

  return errors;
};

export const signUpValidate = (values) => {
  const errors = {};

  if (values.name.length === 0) {
    errors.name = 'Enter username';
  } else if (values.name.length < 3) {
    errors.name = 'Username must contain at least 3 characters';
  } else if (!/^[A-Za-z0-9-_.]+$/.test(values.name)) {
    errors.name = 'Username can only contain A-Z characters a-z _ -. 1-9';
  } else if (values.email.length === 0) {
    errors.email = 'Enter email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Wrong email address';
  } else if (values.password === undefined) {
    errors.password = 'Enter password';
  } else if (values.password.length === 0 && values.password === undefined) {
    errors.password = 'Enter password';
  } else if (values.password.length < 6) {
    errors.password = 'Password must contain at least 6 characters';
  }

  return errors;
};

export const updateUserValidate = (values) => {
  const errors = {};

  if (values.name.length === 0) {
    errors.name = 'Enter username';
  } else if (values.name.length < 3) {
    errors.name = 'Username must contain at least 3 characters';
  } else if (!/^[A-Za-z0-9-_.]+$/.test(values.name)) {
    errors.name = 'Username can only contain A-Z characters a-z _ -. 1-9';
  } else if (values.email.length === 0) {
    errors.email = 'Enter email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Wrong email address';
  } else if (values.passwordToggleIsOpen === true && values.password === undefined) {
    errors.password = 'Enter password';
  } else if (values.passwordToggleIsOpen === true && values.password.length === 0 && values.password === undefined) { // eslint-disable-line
    errors.password = 'Enter password';
  } else if (values.passwordToggleIsOpen === true && values.password.length < 6) {
    errors.password = 'Password must contain at least 6 characters';
  }

  return errors;
};

export const createPostValidate = (values) => {
  const errors = {};

  if (values.title.length === 0) {
    errors.title = 'Enter title';
  } else if (values.title.length < 3) {
    errors.title = 'Title must be at least 3 characters long';
  } else if (values.selectedCategories.length === 0) {
    errors.selectedCategories = 'Select at least one category';
  } else if (values.description.length === 0) {
    errors.description = 'Enter article description';
  }

  return errors;
};
