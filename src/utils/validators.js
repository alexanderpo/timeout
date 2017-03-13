export function signInValidator(values) {
  const errors = {};

  if (values.name.length === 0) {
    errors.name = 'Username is empty';
  }

  if (values.password.length === 0) {
    errors.password = 'Password is empty';
  }

  return errors;
}

export function signUpValidator(values) {
  const errors = {};

  if (values.name.length < 5 || values.name.length === 0) {
    errors.name = 'Username must contains minimum 5 characters';
  }

  if (values.password.length < 6 || values.password.length === 0) {
    errors.password = 'Password must contain 6 characters';
  }

  if (values.email.length === 0 ||
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
}

export function updateUserValidator(values) {
  const errors = {};

  if (values.name.length < 5 || values.name.length === 0) {
    errors.name = 'Username must contains minimum 5 characters';
  }

  if (values.email.length === 0 ||
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
}

export function createPostValidator(values) {
  const errors = {};

  if (values.title.length < 3 || values.title.length === 0) {
    errors.title = 'Title must contains minimum 3 characters';
  }

  if (values.description.length === 0) {
    errors.description = 'Post must contains description';
  }

  /* if (values.body.length === 0) {
    errors.body = 'Post is empty';
  } */

  return errors;
}
