import mockBooks from './mockBooks';

const FAKE_REQUEST_TIMEOUT = 1000;

export const bookshelfApi = {
  getBooks() {
    return new Promise(resolve => {
      setTimeout(() => resolve(mockBooks), FAKE_REQUEST_TIMEOUT);
    });
  },
};
