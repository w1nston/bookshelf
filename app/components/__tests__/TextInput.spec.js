import React, { PropTypes } from 'react';
import expect, { createSpy } from 'expect';
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

  describe('text', () => {
    it('is set in propTypes declaration', () => {
      expect(TextInput.propTypes.text).toEqual(PropTypes.string);
    });

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

  describe('onChange', () => {
    it('is set in propTypes declaration', () => {
      expect(TextInput.propTypes.onChange).toBe(PropTypes.func);
    });

    describe('when defined', () => {
      const onChange = createSpy();

      it('triggers the provided callback', () => {
        const newValue = 'New value';
        const component = shallow(<TextInput onChange={onChange} />);
        const event = { target: { value: newValue }};
        component.find('input').simulate('change', event);
        expect(onChange).toHaveBeenCalledWith(event);
      });
    });
  });
});
