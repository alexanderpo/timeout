import { createAction } from 'redux-actions';

export const CREATE_USER = 'CREATE_USER';
export const SIGN_IN = 'SIGN_IN';
export const SET_NEXT_PATHNAME = 'SET_NEXT_PATHNAME';
export const LOGOUT = 'LOGOUT';

export const logout = createAction(LOGOUT);
export const setNextPathname = createAction(SET_NEXT_PATHNAME);

export function createUser(name, email, password) {
  return {
    type: CREATE_USER,
    payload: {
      url: 'user/register',
      method: 'post',
      body: {
        name,
        email,
        password,
      },
    },
  };
}

export function signIn(name, password) {
  return {
    type: SIGN_IN,
    payload: {
      url: 'authenticate',
      method: 'post',
      body: {
        name,
        password,
      },
    },
  };
}
