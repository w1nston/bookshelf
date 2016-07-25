const apiBaseURL = 'http://localhost:1337';

export const bookshelfApi = {
  getBooks() {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', `${apiBaseURL}/books`);
      request.onload = function onload() {
        if (request.status === 200) {
          resolve(JSON.parse(request.response));
        } else {
          reject(new Error(request.statusText));
        }
      };
      request.onerror = function onerror() {
        reject(
          new Error('Network error attempting to request books from bookshelf-server api.')
        );
      };
      request.send();
    });
  },
};
