import fetch from 'isomorphic-fetch';
import NProgress from 'nprogress';

const LOADING = 'LOADING';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export default function () {
  return ({ dispatch, getState }) => next => (action) => {
    if (!action || !action.payload || !action.payload.url) {
      return next(action);
    }

    const {
      type,
      payload: {
        data = {},
        method = 'get',
        url,
        body,
      },
    } = action;

    const authToken = getState().user.token;

    setTimeout(() => next({
      type: `${type}_${LOADING}`,
      ...!data ? { payload: data } : {},
    }));

    NProgress.configure({ showSpinner: false });
    NProgress.start();

    return fetch(`/api/${url}`, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': authToken ? `${authToken}` : '',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        NProgress.done();
        if (response.status >= 400) {
          return Promise.reject(response.status);
        }

        return response.json();
      })
      .then(responseData => dispatch({
        type: `${type}_${SUCCESS}`,
        payload: responseData,
      }))
      .catch((err) => {
        dispatch({
          type: `${type}_${FAILURE}`,
          error: true,
          payload: err,
        });

        return Promise.reject(err);
      });
  };
}
