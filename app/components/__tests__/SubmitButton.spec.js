/* global define, it, describe, expect, jest */
import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from '../SubmitButton';

describe('SubmitButton', () => {
  it('renders a container element', () => {
    const component = shallow(<SubmitButton />);
    expect(component.find('.submit-button-container').length).toBe(1);
  });

  it('renders a button element', () => {
    const component = shallow(<SubmitButton />);
    expect(component.find('button').length).toBe(1);
  });

  describe('prop label', () => {
    describe('when defined', () => {
      const label = 'Label';

      it('is rendered', () => {
        const component = shallow(<SubmitButton label={label} />);
        expect(component.find('button').text()).toBe(label);
      });
    });
  });

  describe('prop onSubmit', () => {
    describe('when defined', () => {
      const onSubmit = jest.fn();

      it('is connected to the button', () => {
        const component = shallow(<SubmitButton onSubmit={onSubmit} />);
        expect(component.find('button').props().onClick).toEqual(onSubmit);
      });

      describe('on clicking the button', () => {
        it('triggers the onSubmit function passed', () => {
          const component = shallow(<SubmitButton onSubmit={onSubmit} />);
          component.find('button').simulate('click');
          expect(onSubmit).toHaveBeenCalled();
        });
      });
    });
  });
});
