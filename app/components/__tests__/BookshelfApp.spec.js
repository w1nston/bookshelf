import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import BookshelfApp from '../BookshelfApp';
import BookForm from '../../containers/BookForm';
import BookList from '../../containers/BookList';

describe('BookshelfApp', () => {
  it('renders a container div', () => {
    const component = shallow(<BookshelfApp />);
    expect(component.type()).toBe('div');
  });

  it('renders a BookForm container', () => {
    const component = shallow(<BookshelfApp />);
    expect(component.find(BookForm).length).toBe(1);
  });

  it('renders a BookList container', () => {
    const component = shallow(<BookshelfApp />);
    expect(component.find(BookList).length).toBe(1);
  });
});
