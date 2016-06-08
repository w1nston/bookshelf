import React, { PropTypes } from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';
import BookForm from '../BookForm';
import TextInput from '../TextInput';
import SubmitButton from '../SubmitButton';

describe('BookForm', () => {
  it('sets displayName', () => {
    expect(BookForm.displayName).toBe('BookForm');
  });

  it('renders two TextInputs', () => {
    const component = shallow(<BookForm />);
    expect(component.find(TextInput).length).toBe(2);
  });

  it('renders a SubmitButton', () => {
    const component = shallow(<BookForm />);
    expect(component.find(SubmitButton).length).toBe(1);
  });

  it('sets a label on SubmitButton', () => {
    const component = shallow(<BookForm />);
    expect(component.find(SubmitButton).props().label).toBe('Add new book');
  });

  it('sets title in propTypes declaration', () => {
    expect(BookForm.propTypes.title).toBe(PropTypes.string);
  });

  it('sets author in propTypes declaration', () => {
    expect(BookForm.propTypes.author).toBe(PropTypes.string);
  });

  it('sets name to title on the first TextInput', () => {
    const component = shallow(<BookForm />);
    const firstTextInput = component.find(TextInput).at(0);
    expect(firstTextInput.props().name).toBe('title');
  });

  it('sets placeholder to Title on the first TextInput', () => {
    const component = shallow(<BookForm />);
    const firstTextInput = component.find(TextInput).at(0);
    expect(firstTextInput.props().placeholder).toBe('Title');
  });

  it('sets handleTitleChange in propTypes declaration', () => {
    expect(BookForm.propTypes.handleTitleChange).toBe(PropTypes.func);
  });

  it('sets handleAuthorChange in propTypes declaration', () => {
    expect(BookForm.propTypes.handleAuthorChange).toBe(PropTypes.func);
  });

  it('sets addBook in propTypes declaration', () => {
    expect(BookForm.propTypes.addBook).toBe(PropTypes.func.isRequired);
  });

  it('sets name to author on the second TextInput', () => {
    const component = shallow(<BookForm />);
    const secondTextInput = component.find(TextInput).at(1);
    expect(secondTextInput.props().name).toBe('author');
  });

  it('sets placeholder to Author on the second TextInput', () => {
    const component = shallow(<BookForm />);
    const secondTextInput = component.find(TextInput).at(1);
    expect(secondTextInput.props().placeholder).toBe('Author');
  });

  describe('when prop handleTitleChange is defined', () => {
    const handleTitleChange = function() {};

    it('is set as prop onChange to the first TextInput', () => {
      const component = shallow(
        <BookForm handleTitleChange={handleTitleChange} />
      );
      const firstTextInput = component.find(TextInput).at(0);
      expect(firstTextInput.props().onChange).toBe(handleTitleChange);
    });
  });

  describe('when prop handleAuthorChange is defined', () => {
    const handleAuthorChange = function() {};

    it('is set as prop onChange to the second TextInput', () => {
      const component = shallow(
        <BookForm handleAuthorChange={handleAuthorChange} />
      );
      const secondTextInput = component.find(TextInput).at(1);
      expect(secondTextInput.props().onChange).toBe(handleAuthorChange);
    });
  });

  describe('when prop title is defined', () => {
    const title = 'Title';

    it('is set as prop text to the first TextInput', () => {
      const component = shallow(<BookForm title={title} />);
      const firstTextInput = component.find(TextInput).at(0);
      expect(firstTextInput.props().text).toBe(title);
    });
  });

  describe('when prop author is defined', () => {
    const author = 'Author';

    it('is set as prop text to the second TextInput', () => {
      const component = shallow(<BookForm author={author} />);
      const secondTextInput = component.find(TextInput).at(1);
      expect(secondTextInput.props().text).toBe(author);
    });
  });

  describe('onSubmit', () => {
    it('triggers prop addBook with field values', () => {
      const title = 'Title';
      const author = 'Author';
      const addBook = createSpy();
      const component = shallow(
        <BookForm
          addBook={addBook}
          title={title}
          author={author}
        />
      );
      component.find(SubmitButton).simulate('submit');
      expect(addBook).toHaveBeenCalledWith(title, author);
    });
  });
});
