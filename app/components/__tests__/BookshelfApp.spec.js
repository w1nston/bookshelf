import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';
import BookshelfApp from '../BookshelfApp';
import BookForm from '../../containers/BookForm';

describe('BookshelfApp', () => {
  it('renders a container div', () => {
    const component = shallow(<BookshelfApp />);
    expect(component.type()).toBe('div');
  });

  it('renders a BookForm', () => {
    const component = shallow(<BookshelfApp />);
    expect(component.find(BookForm).length).toBe(1);
  });
});
