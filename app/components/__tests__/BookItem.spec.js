/* global define, it, describe, expect */
import React from 'react';
import { shallow } from 'enzyme';
import BookItem from '../BookItem';

describe('BookItem', () => {
  it('renders a container for its content', () => {
    const component = shallow(<BookItem />);
    expect(component.type()).toBe('tr');
  });

  it('sets class name on table row', () => {
    const component = shallow(<BookItem />);
    expect(component.props().className).toContain('book-item-row');
  });

  describe('title', () => {
    describe('when defined', () => {
      const title = 'Title';

      it('is rendered', () => {
        const component = shallow(<BookItem title={title} />);
        expect(component.find('.title').text()).toBe(title);
      });

      it('is rendered inside a table cell', () => {
        const component = shallow(<BookItem title={title} />);
        expect(component.find('.title').type()).toBe('td');
      });
    });
  });

  describe('author', () => {
    describe('when defined', () => {
      const author = 'Author';

      it('is rendered', () => {
        const component = shallow(<BookItem author={author} />);
        expect(component.find('.author').text()).toBe(author);
      });

      it('is rendered inside a table cell', () => {
        const component = shallow(<BookItem author={author} />);
        expect(component.find('.author').type()).toBe('td');
      });
    });
  });
});
