export function signInValidate(values) {
  const errors = {};

  if (values.name.length === 0) {
    errors.name = 'Введите имя пользователя';
  } else if (values.name.length < 3) {
    errors.name = 'Имя пользователя должно содержать не менее 3 символов';
  } else if (!/^[A-Za-z0-9-_.]+$/.test(values.name)) {
    errors.name = 'Имя пользователя может содержать только символы A-Z a-z _ - . 1-9';
  } else if (values.password.length === 0) {
    errors.password = 'Введите пароль';
  } else if (values.password.length < 6) {
    errors.password = 'Пароль должен содержать не менее 6 символов';
  }

  return errors;
}

export function signUpValidate(values) {
  const errors = {};

  if (values.name.length === 0) {
    errors.name = 'Введите имя пользователя';
  } else if (values.name.length < 3) {
    errors.name = 'Имя пользователя должно содержать не менее 3 символов';
  } else if (!/^[A-Za-z0-9-_.]+$/.test(values.name)) {
    errors.name = 'Имя пользователя может содержать только символы A-Z a-z _ - . 1-9';
  } else if (values.email.length === 0) {
    errors.email = 'Введите email адрес';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Неправильный email адрес';
  } else if (values.password.length === 0) {
    errors.password = 'Введите пароль';
  } else if (values.password.length < 6) {
    errors.password = 'Пароль должен содержать не менее 6 символов';
  }

  return errors;
}