import 'whatwg-fetch';

const apiBaseURL = 'http://localhost:1337';

function parseJSONFromResponse(response) {
  return response.json();
}

function stringIsEmpty(str) {
  return str === '' || str === undefined || str === null;
}

export const bookshelfApi = {
  getBooks() {
    return fetch(`${apiBaseURL}/books`)
      .then(parseJSONFromResponse)
      .catch(error =>
        console.error('something went wrong attempting to fetch books:', error));
  },

  createBook(title, author) {
    if (stringIsEmpty(title) || stringIsEmpty(author)) {
      return false;
    }

    return fetch(`${apiBaseURL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        title,
        author,
      }),
    }).then(() => true)
      .catch(() => false);
  },
};
