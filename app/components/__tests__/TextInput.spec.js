import React, { PropTypes } from 'react';
import expect from 'expect';
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

  it('has displayName set', () => {
    expect(TextInput.displayName).toBe('TextInput');
  });

  describe('placeholder', () => {
    it('is set in propTypes declaration', () => {
      expect(TextInput.propTypes.placeholder).toEqual(PropTypes.string);
    });

    describe('when defined', () => {
      const placeholder = 'Placeholder';

      it('is set on the input element', () => {
        const component = shallow(<TextInput placeholder={placeholder} />);
        const inputElement = component.find('input');
        expect(inputElement.props().placeholder).toBe(placeholder);
      });
    });
  });

  describe('value', () => {
    it('is set in propTypes declaration', () => {
      expect(TextInput.propTypes.value).toEqual(PropTypes.string);
    });

    describe('when defined', () => {
      const value = 'Value';

      it('is set on the input element', () => {
        const component = shallow(<TextInput value={value} />);
        const inputElement = component.find('input');
        expect(inputElement.props().value).toBe(value);
      });
    });

    describe('when undefined', () => {
      const value = undefined;

      it('is not setting text undefined', () => {
        const component = shallow(<TextInput value={value} />);
        const inputElement = component.find('input');
        expect(inputElement.text()).toNotBe('undefined');
      });
    });
  });

  describe('name', () => {
    it('is set in propTypes declaration', () => {
      expect(TextInput.propTypes.name).toEqual(PropTypes.string);
    });

    describe('when defined', () => {
      const name = 'Name';

      it('is set on the input element', () => {
        const component = shallow(<TextInput name={name} />);
        const inputElement = component.find('input');
        expect(inputElement.props().name).toBe(name);
      });
    });
  });
});
