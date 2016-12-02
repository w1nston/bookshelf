/* global define, it, describe, expect, jest */
import React from 'react';
import { shallow } from 'enzyme';
import TextInput from '../TextInput';

describe('TextInput', () => {
  it('renders a container element', () => {
    const component = shallow(<TextInput />);
    expect(component.find('.text-input-container').length).toBe(1);
  });

  it('renders an input element', () => {
    const component = shallow(<TextInput />);
    expect(component.find('input').length).toBe(1);
  });

  describe('placeholder', () => {
    describe('when defined', () => {
      const placeholder = 'Placeholder';

      it('is set on the input element', () => {
        const component = shallow(<TextInput placeholder={placeholder} />);
        const inputElement = component.find('input');
        expect(inputElement.props().placeholder).toBe(placeholder);
      });
    });
  });

  describe('text', () => {
    describe('when defined', () => {
      const text = 'Text';

      it('is set on the input element', () => {
        const component = shallow(<TextInput text={text} />);
        const inputElement = component.find('input');
        expect(inputElement.props().value).toBe(text);
      });
    });

    describe('when undefined', () => {
      const text = undefined;

      it('is not setting text undefined', () => {
        const component = shallow(<TextInput text={text} />);
        const inputElement = component.find('input');
        expect(inputElement.text()).not.toBe('undefined');
      });
    });
  });

  describe('name', () => {
    describe('when defined', () => {
      const name = 'Name';

      it('is set on the input element', () => {
        const component = shallow(<TextInput name={name} />);
        const inputElement = component.find('input');
        expect(inputElement.props().name).toBe(name);
      });
    });
  });

  describe('onChange', () => {
    describe('when defined', () => {
      const onChange = jest.fn();

      it('triggers the provided callback', () => {
        const newValue = 'New value';
        const component = shallow(<TextInput onChange={onChange} />);
        const event = { target: { value: newValue } };
        component.find('input').simulate('change', event);
        expect(onChange).toHaveBeenCalledWith(event);
      });
    });
  });
});
