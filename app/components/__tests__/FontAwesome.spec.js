import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import FontAwesome from '../FontAwesome';

describe('FontAwesome', () => {
  it('renders an i tag for the icon to render in', () => {
    const component = shallow(<FontAwesome />);
    expect(component.type()).toBe('i');
  });

  it('contains className "fa"', () => {
    const component = shallow(<FontAwesome />);
    expect(component.hasClass('fa')).toBe(true);
  });

  describe('prop icons', () => {
    describe('when containing several icons', () => {
      const icons = ['icon1', 'icon2'];

      it('sets each icon in class name', () => {
        const component = shallow(<FontAwesome icons={icons} />);
        expect(component.hasClass(`fa-${icons[0]} fa-${icons[1]}`)).toBe(true);
      });
    });

    describe('when empty', () => {
      const icons = [];

      it('does not set any icon names in the class name', () => {
        const component = shallow(<FontAwesome icons={icons} />);
        expect(component.hasClass('fa-')).toBe(false);
      });
    });

    describe('when undefined', () => {
      const icons = undefined;

      it('does not set any icon names in the class name', () => {
        const component = shallow(<FontAwesome icons={icons} />);
        expect(component.hasClass('fa-')).toBe(false);
      });
    });
  });
});
