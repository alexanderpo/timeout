export function signUpValidator(values) {
  const errors = {};
  console.log(values);
  if (values.name && values.name.length < 5) {
    errors.name = 'Username must contain 5 characters';
  }

  if (values.password && values.password.length < 6) {
    errors.password = 'Passord must contain 6 characters';
  }

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
}
