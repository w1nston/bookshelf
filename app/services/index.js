import 'whatwg-fetch';

const apiBaseURL = 'http://localhost:1337';

export const bookshelfApi = {
  getBooks() {
    return fetch(`${apiBaseURL}/books`)
      .then(response => response.json())
      .catch(error =>
        console.error(
          'Something went awry trying to fetch books from bookshelf-server.',
          error
        )
      );
  }
};
