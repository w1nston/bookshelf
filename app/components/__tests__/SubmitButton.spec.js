import React, { PropTypes } from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';
import SubmitButton from '../SubmitButton';

describe('SubmitButton', () => {
  it('sets displayName', () => {
    expect(SubmitButton.displayName).toBe('SubmitButton');
  });

  it('renders a container element', () => {
    const component = shallow(<SubmitButton />);
    expect(component.find('.submit-button-container').length).toBe(1);
  });

  it('renders a button element', () => {
    const component = shallow(<SubmitButton />);
    expect(component.find('button').length).toBe(1);
  });

  describe('prop label', () => {
    it('is set in propTypes declaration', () => {
      expect(SubmitButton.propTypes.label).toEqual(PropTypes.string);
    });

    describe('when defined', () => {
      const label = 'Label';

      it('is rendered', () => {
        const component = shallow(<SubmitButton label={label} />);
        expect(component.find('button').text()).toBe(label);
      });
    });
  });

  describe('prop onSubmit', () => {
    it('is set in propTypes declaration', () => {
      expect(SubmitButton.propTypes.onSubmit).toEqual(PropTypes.func);
    });

    describe('when defined', () => {
      const onSubmit = createSpy();

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
