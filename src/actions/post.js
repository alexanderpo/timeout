export const CREATE_POST_FIRST_STEP = 'CREATE_POST_FIRST_STEP';

export function createPostFirstStep(title, description, category, time, user) {
  return {
    type: CREATE_POST_FIRST_STEP,
    payload: {
      url: 'post/create/first-step',
      method: 'post',
      body: {
        title,
        description,
        category,
        time,
        user,
      },
    },
  };
}
