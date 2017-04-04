import { createAction } from 'redux-actions';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const LOGOUT = 'LOGOUT';

export const logout = createAction(LOGOUT);

export function signIn(name, password) {
  const data = { name, password };
  return {
    type: SIGN_IN,
    payload: {
      url: 'signin',
      method: 'post',
      body: data,
    },
  };
}

export function signUp(name, email, password) {
  const data = { name, email, password };
  return {
    type: SIGN_UP,
    payload: {
      url: 'signup',
      method: 'post',
      body: data,
    },
  };
}
