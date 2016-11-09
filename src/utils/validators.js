export function signUpValidator(values) {
  const errors = {};

  if (values.name.length < 5 || values.name.length === 0) {
    errors.name = 'Username must contain 5 characters';
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
