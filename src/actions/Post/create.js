export const CREATE_POST_INFORMATION = 'CREATE_POST_INFORMATION';

export function createPostInformation(author, date, title, description, category, time) {
  return {
    type: CREATE_POST_INFORMATION,
    payload: {
      url: '/test',
      method: 'post',
      body: {
        author,
        date,
        title,
        description,
        category,
        time,
      },
    },
  };
}
