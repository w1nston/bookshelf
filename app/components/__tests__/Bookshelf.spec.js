import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Bookshelf from '../Bookshelf';

describe('Bookshelf', () => {
  it('renders a container element', () => {
    const component = shallow(<Bookshelf />);
    expect(component.find('.bookshelf-container').length).toBe(1);
  });
});
