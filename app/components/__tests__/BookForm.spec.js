import React, { PropTypes } from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';
import BookForm from '../BookForm';
import BookTitleInput from '../../containers/BookTitleInput';
import BookAuthorInput from '../../containers/BookAuthorInput';
import SubmitButton from '../SubmitButton';

describe('BookForm', () => {
  it('sets displayName', () => {
    expect(BookForm.displayName).toBe('BookForm');
  });

  it('renders a BookTitleInput', () => {
    const component = shallow(<BookForm />);
    expect(component.find(BookTitleInput).length).toBe(1);
  });

  it('renders a BookAuthorInput', () => {
    const component = shallow(<BookForm />);
    expect(component.find(BookAuthorInput).length).toBe(1);
  });

  it('sets propType onSubmit', () => {
    expect(BookForm.propTypes.onSubmit).toBe(PropTypes.func);
  });

  it('sets propType title', () => {
    expect(BookForm.propTypes.title).toBe(PropTypes.string);
  });

  it('sets propType author', () => {
    expect(BookForm.propTypes.author).toBe(PropTypes.string);
  });

  describe('SubmitButton', () => {
    it('is rendered', () => {
      const component = shallow(<BookForm />);
      expect(component.find(SubmitButton).length).toBe(1);
    });

    it('has a label', () => {
      const component = shallow(<BookForm />);
      expect(component.find(SubmitButton).props().label).toBe('Add new book');
    });

    describe('onSubmit', () => {
      const onSubmit = createSpy();

      it('triggers callback with title and author', () => {
        const title = 'Title';
        const author = 'Author';
        const component = shallow(
          <BookForm
            title={title}
            author={author}
            onSubmit={onSubmit}
          />
        );
        component.find(SubmitButton).simulate('submit');
        expect(onSubmit).toHaveBeenCalledWith(title, author);
      });
    });
  });
});
