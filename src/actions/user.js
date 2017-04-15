import { createAction } from 'redux-actions';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const LOGOUT = 'LOGOUT';
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

export const logout = createAction(LOGOUT);

export const signIn = (name, password) => {
  const data = { name, password };
  return {
    type: SIGN_IN,
    payload: {
      url: 'signin',
      method: 'post',
      body: data,
    },
  };
};

export const signUp = (name, email, password) => {
  const data = { name, email, password };
  return {
    type: SIGN_UP,
    payload: {
      url: 'signup',
      method: 'post',
      body: data,
    },
  };
};

export const updateUserData = (id, name, email, password, isChange) => {
  const data = { name, email, password, isChange };
  return {
    type: UPDATE_USER_DATA,
    payload: {
      url: `profile/${id}`,
      method: 'put',
      body: data,
    },
  };
};
