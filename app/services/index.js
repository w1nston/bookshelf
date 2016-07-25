import 'whatwg-fetch';

const apiBaseURL = 'http://localhost:1337';

function parseJSONFromResponse(response) {
  return response.json();
}

export const bookshelfApi = {
  getBooks() {
    return fetch(`${apiBaseURL}/books`)
      .then(parseJSONFromResponse)
      .catch(error =>
        console.error(
`Something went wrong trying to fetch books from bookshelf-server.
Make sure the bookshelf-server is started.`, error));
  }
};
