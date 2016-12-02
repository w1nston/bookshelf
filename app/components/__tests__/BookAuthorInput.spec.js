/* global define, it, describe, expect, jest */
import React from 'react';
import { shallow } from 'enzyme';
import BookAuthorInput from '../BookAuthorInput';
import TextInput from '../TextInput';

describe('BookAuthorInput', () => {
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
    describe('when defined', () => {
      const text = 'Text';

      it('is passed to the TextInput component', () => {
        const component = shallow(<BookAuthorInput text={text} />);
        expect(component.find(TextInput).props().text).toBe(text);
      });
    });
  });

  describe('prop onChange', () => {
    describe('when defined', () => {
      const onChange = function onChange() {};

      it('is passed to the TextInput component', () => {
        const component = shallow(<BookAuthorInput onChange={onChange} />);
        expect(component.find(TextInput).props().onChange).toBe(onChange);
      });
    });
  });
});
