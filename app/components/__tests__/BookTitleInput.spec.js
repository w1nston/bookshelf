/* global define, it, describe, expect */
import React from 'react';
import { shallow } from 'enzyme';
import BookTitleInput from '../BookTitleInput';
import TextInput from '../TextInput';

describe('BookTitleInput', () => {
  it('renders a TextInput component', () => {
    const component = shallow(<BookTitleInput />);
    expect(component.type()).toBe(TextInput);
  });

  it('sets name on the TextInput component', () => {
    const component = shallow(<BookTitleInput />);
    expect(component.find(TextInput).props().name).toBe('title');
  });

  it('sets placeholder on the TextInput component', () => {
    const component = shallow(<BookTitleInput />);
    expect(component.find(TextInput).props().placeholder).toBe('Title');
  });

  describe('prop text', () => {
    describe('when defined', () => {
      const text = 'Text';

      it('is passed to the TextInput component', () => {
        const component = shallow(<BookTitleInput text={text} />);
        expect(component.find(TextInput).props().text).toBe(text);
      });
    });
  });

  describe('prop onChange', () => {
    describe('when defined', () => {
      const onChange = function onChange() {
      };

      it('is passed to the TextInput component', () => {
        const component = shallow(<BookTitleInput onChange={onChange} />);
        expect(component.find(TextInput).props().onChange).toBe(onChange);
      });
    });
  });
});
