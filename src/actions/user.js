export const CREATE_USER = 'CREATE_USER';

export function createUser(username, email, password) {
  return {
    type: CREATE_USER,
    payload: {
      url: 'user/register',
      method: 'post',
      body: {
        username,
        email,
        password,
      },
    },
  };
}
