import React, { PropTypes } from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';
import SimpleButton from '../SimpleButton';

describe('SimpleButton', () => {
  it('sets displayName', () => {
    expect(SimpleButton.displayName).toBe('SimpleButton');
  });

  it('renders a container element', () => {
    const component = shallow(<SimpleButton />);
    expect(component.find('.simple-button-container').length).toBe(1);
  });

  it('renders a button element', () => {
    const component = shallow(<SimpleButton />);
    expect(component.find('button').length).toBe(1);
  });

  describe('prop label', () => {
    it('is set in propTypes declaration', () => {
      expect(SimpleButton.propTypes.label).toEqual(PropTypes.string);
    });

    describe('when defined', () => {
      const label = 'Label';

      it('is rendered', () => {
        const component = shallow(<SimpleButton label={label}/>);
        expect(component.find('button').text()).toBe(label);
      });
    });
  });

  describe('prop onClick', () => {
    it('is set in propTypes declaration', () => {
      expect(SimpleButton.propTypes.onClick).toEqual(PropTypes.func);
    });

    describe('when defined', () => {
      const onClick = createSpy();

      it('is connected to the button', () => {
        const component = shallow(<SimpleButton onClick={onClick} />);
        expect(component.find('button').props().onClick).toEqual(onClick);
      });

      describe('on clicking the button', () => {
        it('triggers the onClick function passed', () => {
          const component = shallow(<SimpleButton onClick={onClick} />);
          component.find('button').simulate('click');
          expect(onClick).toHaveBeenCalled();
        });
      });
    });
  });
});
