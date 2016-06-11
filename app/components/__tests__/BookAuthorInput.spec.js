import React, { PropTypes } from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import BookAuthorInput from '../BookAuthorInput';
import TextInput from '../TextInput';

describe('BookAuthorInput', () => {
  it('sets displayName', () => {
    expect(BookAuthorInput.displayName).toBe('BookAuthorInput');
  });

  it('renders a TextInput component', () => {
    const component = shallow(<BookAuthorInput />);
    expect(component.find(TextInput).length).toBe(1);
  });

  it('sets name on the TextInput component', () => {
    const component = shallow(<BookAuthorInput />);
    expect(component.find(TextInput).props().name).toBe('author');
  });

  it('sets placeholder on the TextInput component', () => {
    const component = shallow(<BookAuthorInput />);
    expect(component.find(TextInput).props().placeholder).toBe('Author');
  });

  describe('prop text', () => {
    it('is declared in propTypes', () => {
      expect(BookAuthorInput.propTypes.text).toBe(PropTypes.string);
    });

    describe('when defined', () => {
      const text = 'Text';

      it('is passed to the TextInput component', () => {
        const component = shallow(<BookAuthorInput text={text} />);
        expect(component.find(TextInput).props().text).toBe(text);
      });
    });
  });

  describe('prop onChange', () => {
    it('is declared in propTypes', () => {
      expect(BookAuthorInput.propTypes.onChange).toBe(PropTypes.func);
    });

    describe('when defined', () => {
      const onChange = function() {};

      it('is passed to the TextInput component', () => {
        const component = shallow(<BookAuthorInput onChange={onChange} />);
        expect(component.find(TextInput).props().onChange).toBe(onChange);
      });
    });
  });
});
